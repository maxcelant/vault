1. Starting the app
```python
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

2. Make simple HTTP requests to test your server
```http
GET http://localhost:8000/random-fact
Accept: application/json
```

3. Query Params
```python
@app.get("/add-ten")
def add_ten(number: int):
	return number + 10
```

4. Automated Docs
```
https://website:port/docs
```

5. Posting Lists
```python
@app.post("/take/{n}")
async def reverse(n: int, reverse: bool, letters: list[str]):
	letters = letters[:n]
	if reverse:
		return letters[::-1]
	return letters
```

```http
POST http://localhost:8000/take/4?reverse=true

[
	"a",
	"b",
	"c",
	"d",
	"e"
]
```


8. 