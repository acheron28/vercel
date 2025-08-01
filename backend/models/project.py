from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class Achievement(BaseModel):
    metric: str
    description: str

class Project(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str = "VerseOS"
    timeline: str
    institution: str
    team_size: str
    goal: str
    description: str
    achievements: List[Achievement]
    status: str = "in-progress"
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class ProjectCreate(BaseModel):
    timeline: str
    institution: str
    team_size: str
    goal: str
    description: str
    achievements: List[Achievement]
    status: Optional[str] = "in-progress"

class ProjectUpdate(BaseModel):
    timeline: Optional[str] = None
    institution: Optional[str] = None
    team_size: Optional[str] = None
    goal: Optional[str] = None
    description: Optional[str] = None
    achievements: Optional[List[Achievement]] = None
    status: Optional[str] = None