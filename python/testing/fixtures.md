
1. Use them to get rid of boiler plate


![[Pasted image 20230706150056.png]]

2. This one will clear the test database every time you run it, to not have **test pollution**
```python
@pytest.fixture(autouse=True)
async def clear_data():
    db = SessionLocal()
    try:
        db.execute(text("delete from users;"))
        db.commit()
    finally:
        db.close()
```