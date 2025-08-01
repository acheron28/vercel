from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
import uuid

class SystemMetrics(BaseModel):
    connected_communities: int
    system_uptime: str
    average_response_time: str

class SystemStatus(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    uptime: str
    active_users: int
    response_time: str
    status: str = "online"  # online, offline, maintenance
    last_updated: datetime = Field(default_factory=datetime.utcnow)
    metrics: SystemMetrics

class SystemStatusCreate(BaseModel):
    uptime: str
    active_users: int
    response_time: str
    status: Optional[str] = "online"
    metrics: SystemMetrics

class SystemStatusUpdate(BaseModel):
    uptime: Optional[str] = None
    active_users: Optional[int] = None
    response_time: Optional[str] = None
    status: Optional[str] = None
    metrics: Optional[SystemMetrics] = None