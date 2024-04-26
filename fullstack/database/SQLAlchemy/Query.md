1. Using method chaining
```python
@app.get("/student-average-grades")
async def student_average_grades_with_orm(db: SessionLocal = Depends(get_db)):
    query = db.query(
        Student.id,
        Student.first_name,
        Student.last_name,
        func.round(func.avg(Grade.grade), 2).label('average')
    ).\
        join(Grade.student).\
        group_by(Student.id, Student.first_name, Student.last_name).\
        having(func.count(Grade.id) > 2)

    body = []
    for row in query.all():
        body.append({
            "id": row.id,
            "first_name": row.first_name,
            "last_name": row.last_name,
            "average": row.average,
        })

    return body
```

2. Without method chaining

```python
@app.get("/student-average-grades")
async def student_average_grades_with_orm(db: SessionLocal = Depends(get_db)):
    query = db.query(
        Student.id,
        Student.first_name,
        Student.last_name,
        func.round(func.avg(Grade.grade), 2).label('average')
    )
    query = query.join(Grade.student)
    query = query.group_by(Student.id, Student.first_name, Student.last_name)
    query = query.having(func.count(Grade.id) > 2)
    
    body = []
    for row in query.all():
        body.append({
            "id": row.id,
            "first_name": row.first_name,
            "last_name": row.last_name,
            "average": row.average,
        })

    return body
```

3. Using raw SQL (Should only be used under special circumstances)
```python
@app.get("/students-average-grades-raw")
async def example(db: SessionLocal = Depends(get_db)):
    result = db.execute(
        text("""
            SELECT
                s.id,
                s.first_name,
                s.last_name,
                ROUND(AVG(g.grade), 2) AS average
            FROM students s
            INNER JOIN grades g
                ON s.id = g.student_id
            GROUP BY s.id, s.first_name, s.last_name
            HAVING COUNT(g.id) > 2
        """))
    db.commit()

    body = []
    for row in result.all():
        print(row.id, row.first_name, row.last_name, row.average)
        body.append({
            "id": row.id,
            "first_name": row.first_name,
            "last_name": row.last_name,
            "average": row.average
        })

    return body
```