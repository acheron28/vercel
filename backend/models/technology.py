from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class Technology(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    icon: str
    category: Optional[str] = None
    description: Optional[str] = None
    version: Optional[str] = None
    created_at: datetime = Field(default_factory=datetime.utcnow)

class TechnologyCreate(BaseModel):
    name: str
    icon: str
    category: Optional[str] = None
    description: Optional[str] = None
    version: Optional[str] = None