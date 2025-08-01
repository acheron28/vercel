from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from typing import List
from datetime import datetime

# Import models
from models.team import Team, TeamCreate, TeamUpdate, TeamMember
from models.project import Project, ProjectCreate, ProjectUpdate, Achievement
from models.technology import Technology, TechnologyCreate
from models.system_status import SystemStatus, SystemStatusCreate, SystemStatusUpdate, SystemMetrics

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app
app = FastAPI(title="VerseOS API", version="1.0.0")

# Create router with /api prefix
api_router = APIRouter(prefix="/api")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Root endpoint
@api_router.get("/")
async def root():
    return {"message": "VerseOS API is running", "version": "1.0.0"}

# Team endpoints
@api_router.get("/teams", response_model=List[Team])
async def get_teams():
    """Get all teams with their members"""
    try:
        teams_cursor = db.teams.find()
        teams = await teams_cursor.to_list(length=100)
        return [Team(**team) for team in teams]
    except Exception as e:
        logger.error(f"Error fetching teams: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch teams")

@api_router.get("/teams/{team_id}", response_model=Team)
async def get_team(team_id: str):
    """Get a specific team by ID"""
    try:
        team = await db.teams.find_one({"id": team_id})
        if not team:
            raise HTTPException(status_code=404, detail="Team not found")
        return Team(**team)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching team {team_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch team")

@api_router.post("/teams", response_model=Team)
async def create_team(team_data: TeamCreate):
    """Create a new team"""
    try:
        team = Team(**team_data.dict())
        await db.teams.insert_one(team.dict())
        return team
    except Exception as e:
        logger.error(f"Error creating team: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create team")

# Project endpoints
@api_router.get("/project", response_model=Project)
async def get_project():
    """Get project information"""
    try:
        project = await db.project.find_one()
        if not project:
            raise HTTPException(status_code=404, detail="Project not found")
        return Project(**project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch project")

@api_router.put("/project", response_model=Project)
async def update_project(project_data: ProjectUpdate):
    """Update project information"""
    try:
        # Get existing project
        existing_project = await db.project.find_one()
        if not existing_project:
            raise HTTPException(status_code=404, detail="Project not found")
        
        # Update fields
        update_data = {k: v for k, v in project_data.dict().items() if v is not None}
        update_data["updated_at"] = datetime.utcnow()
        
        await db.project.update_one(
            {"id": existing_project["id"]}, 
            {"$set": update_data}
        )
        
        updated_project = await db.project.find_one({"id": existing_project["id"]})
        return Project(**updated_project)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating project: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update project")

# Technology endpoints
@api_router.get("/technologies", response_model=List[Technology])
async def get_technologies():
    """Get all technologies"""
    try:
        technologies_cursor = db.technologies.find()
        technologies = await technologies_cursor.to_list(length=100)
        return [Technology(**tech) for tech in technologies]
    except Exception as e:
        logger.error(f"Error fetching technologies: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch technologies")

@api_router.post("/technologies", response_model=Technology)
async def create_technology(tech_data: TechnologyCreate):
    """Create a new technology"""
    try:
        technology = Technology(**tech_data.dict())
        await db.technologies.insert_one(technology.dict())
        return technology
    except Exception as e:
        logger.error(f"Error creating technology: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to create technology")

# System Status endpoints
@api_router.get("/status", response_model=SystemStatus)
async def get_system_status():
    """Get current system status"""
    try:
        status = await db.system_status.find_one()
        if not status:
            raise HTTPException(status_code=404, detail="System status not found")
        return SystemStatus(**status)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error fetching system status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch system status")

@api_router.post("/status", response_model=SystemStatus)
async def update_system_status(status_data: SystemStatusUpdate):
    """Update system status"""
    try:
        # Get existing status
        existing_status = await db.system_status.find_one()
        
        if existing_status:
            # Update existing
            update_data = {k: v for k, v in status_data.dict().items() if v is not None}
            update_data["last_updated"] = datetime.utcnow()
            
            await db.system_status.update_one(
                {"id": existing_status["id"]}, 
                {"$set": update_data}
            )
            
            updated_status = await db.system_status.find_one({"id": existing_status["id"]})
            return SystemStatus(**updated_status)
        else:
            # Create new
            new_status = SystemStatus(**status_data.dict())
            await db.system_status.insert_one(new_status.dict())
            return new_status
            
    except Exception as e:
        logger.error(f"Error updating system status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update system status")

# Include the router in the main app
app.include_router(api_router)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

# Startup event to seed initial data
@app.on_event("startup")
async def startup_event():
    """Seed initial data if collections are empty"""
    try:
        # Check if teams collection is empty
        teams_count = await db.teams.count_documents({})
        if teams_count == 0:
            logger.info("Seeding initial teams data...")
            await seed_teams_data()
        
        # Check if project collection is empty  
        project_count = await db.project.count_documents({})
        if project_count == 0:
            logger.info("Seeding initial project data...")
            await seed_project_data()
            
        # Check if technologies collection is empty
        tech_count = await db.technologies.count_documents({})
        if tech_count == 0:
            logger.info("Seeding initial technologies data...")
            await seed_technologies_data()
            
        # Check if system status collection is empty
        status_count = await db.system_status.count_documents({})
        if status_count == 0:
            logger.info("Seeding initial system status data...")
            await seed_system_status_data()
            
        logger.info("Database initialization complete")
        
    except Exception as e:
        logger.error(f"Error during startup: {str(e)}")

async def seed_teams_data():
    """Seed initial teams data"""
    teams_data = [
        {
            "name": "System Configuration Team",
            "description": "OS Setup & Access Point Configuration",
            "members": [
                {
                    "name": "Moksh Garg",
                    "initials": "MG",
                    "role": "Network Architect & Project Lead",
                    "skills": [
                        "Access Point Configurations",
                        "Project Management & Leadership", 
                        "Network Security Implementation",
                        "DHCP/DNS Setup & Management",
                        "Traffic Optimization & Monitoring"
                    ]
                },
                {
                    "name": "Rishav Sharma", 
                    "initials": "RS",
                    "role": "System Engineer & Infrastructure Specialist",
                    "skills": [
                        "Operating System & Server Setup",
                        "Python Scripting & Automation",
                        "System Architecture Design", 
                        "Network Configuration & Optimization",
                        "Hardware Integration & Testing"
                    ]
                }
            ]
        },
        {
            "name": "Content & Web Development Team",
            "description": "Website Development & Resource Curation",
            "members": [
                {
                    "name": "Navdeep Kaur",
                    "initials": "NK", 
                    "role": "Frontend Developer & UI/UX Specialist",
                    "skills": [
                        "Full-Stack Web Development",
                        "User Interface & Experience Design",
                        "Project Management & Coordination",
                        "Content Strategy & Implementation",
                        "Cross-Platform Development"
                    ]
                },
                {
                    "name": "Rahmatu Abdullahi Liman",
                    "initials": "RL",
                    "role": "Resource Curator & Quality Assurance Lead", 
                    "skills": [
                        "Search Engine Optimization (SEO)",
                        "Quality Assurance & Testing",
                        "Content Strategy & Management",
                        "Website Documentation & Guides",
                        "Digital Resource Organization"
                    ]
                },
                {
                    "name": "Simran Simran",
                    "initials": "SS",
                    "role": "Research Analyst & Content Strategist",
                    "skills": [
                        "Research & Data Analysis",
                        "Digital Resource Management", 
                        "Content Strategy Development",
                        "Market Research & User Studies",
                        "Information Architecture"
                    ]
                }
            ]
        },
        {
            "name": "Documentation & Project Management Team",
            "description": "Project Documentation, Planning & Coordination",
            "members": [
                {
                    "name": "Ryan Johnson",
                    "initials": "RJ",
                    "role": "Project Coordinator & Asset Manager",
                    "skills": [
                        "Asset Acquisition & Management",
                        "Project Design & Strategic Planning",
                        "Task Planning & Resource Allocation", 
                        "Version Control & Repository Management",
                        "Team Coordination & Communication"
                    ]
                },
                {
                    "name": "Destiny Cooper",
                    "initials": "DC", 
                    "role": "Documentation Lead & Ethics Specialist",
                    "skills": [
                        "Ethical & Legal Analysis",
                        "Comprehensive Documentation",
                        "Project Management & Oversight",
                        "Content Strategy & Guidelines",
                        "Compliance & Standards Management"
                    ]
                }
            ]
        }
    ]
    
    for team_data in teams_data:
        team = Team(**team_data)
        await db.teams.insert_one(team.dict())

async def seed_project_data():
    """Seed initial project data"""
    project_data = {
        "timeline": "4 Months (May - August 2025)",
        "institution": "Southern Alberta Institute of Technology (SAIT)",
        "team_size": "7 Members",
        "goal": "Revolutionary OS for Underserved Communities",
        "description": "VerseOS represents the culmination of months of research, development, and innovation. Our capstone project addresses one of the most pressing challenges of our time: the digital divide that separates connected and unconnected communities worldwide.",
        "achievements": [
            {"metric": "100%", "description": "Offline Autonomy"},
            {"metric": "100+", "description": "Concurrent Users"},
            {"metric": "24/7", "description": "System Uptime"}
        ]
    }
    
    project = Project(**project_data)
    await db.project.insert_one(project.dict())

async def seed_technologies_data():
    """Seed initial technologies data"""
    technologies_data = [
        {"name": "Raspberry Pi 4", "icon": "🍓", "category": "Hardware"},
        {"name": "Linux Kernel", "icon": "🐧", "category": "Operating System"}, 
        {"name": "Mesh Network", "icon": "📡", "category": "Networking"},
        {"name": "Python Core", "icon": "🐍", "category": "Programming"},
        {"name": "Local Storage", "icon": "💾", "category": "Storage"},
        {"name": "Web Services", "icon": "🌐", "category": "Services"}
    ]
    
    for tech_data in technologies_data:
        tech = Technology(**tech_data)
        await db.technologies.insert_one(tech.dict())

async def seed_system_status_data():
    """Seed initial system status data"""
    status_data = {
        "uptime": "24/7",
        "active_users": 100,
        "response_time": "50ms",
        "status": "online",
        "metrics": {
            "connected_communities": 100,
            "system_uptime": "24/7",
            "average_response_time": "50ms"
        }
    }
    
    status = SystemStatus(**status_data)
    await db.system_status.insert_one(status.dict())