```python
class Grade(Base):
    __tablename__ = "grades"
    id = Column(Integer, primary_key=True)
    student_id = Column(Integer, ForeignKey(
        "students.id"), nullable=False, index=True)
    subject_id = Column(Integer, ForeignKey(
        "subjects.id"), nullable=False, index=True)
    date = Column(Date, nullable=False)
    grade = Column(Integer, nullable=False)
    __table_args__ = (
        UniqueConstraint(
            'student_id',
            'subject_id',
            'date',
            name='grade_subject_student_date'
        ),
    )
    student = relationship("Student", back_populates="grades")
```