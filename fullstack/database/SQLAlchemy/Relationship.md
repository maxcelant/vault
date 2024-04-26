
```python
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    messages = relationship("Message", back_populates="user")

class Message(Base):
    __tablename__ = "messages"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    content = Column(String, nullable=False)
    user = relationship("User", back_populates="messages")
```

1. `ForeignKey`: This is a concept from relational databases. A foreign key is a field (or collection of fields) in one table, that uniquely identifies a row of another table. In simpler terms, it's like an address that points to a specific record in another table. So, in the context of SQLAlchemy, when we declare a `ForeignKey`, we are creating this pointer or link from one record in a table to a record in another table.
    
2. `relationship`: This is a concept from SQLAlchemy's ORM (Object Relational Mapping) layer. A `relationship` doesn't change anything in the database itself, but it creates a linkage in the Python code between two mapped classes, often reflecting the foreign key relationship in the database. This allows us to access related records in an object-oriented way. For example, if we have a `User` and `Message` model and we've set up a relationship from `User` to `Message`, we can easily get all messages from a user like this: `my_user.messages`.