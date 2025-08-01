from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime
import uuid

class TeamMember(BaseModel):
    name: str
    initials: str
    role: str
    skills: List[str]
    avatar: Optional[str] = None

class Team(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    members: List[TeamMember]
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class TeamCreate(BaseModel):
    name: str
    description: str
    members: List[TeamMember]

class TeamUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    members: Optional[List[TeamMember]] = None