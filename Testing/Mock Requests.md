1. If your endpoint calls another endpoint, we can mock that data
```python
@pytest.fixture
def non_mocked_hosts() -> list:
    return ["test.host"]

async def test_movies_by_rating(httpx_mock):
    # setup
    httpx_mock.add_response(
        method="GET",
        url="http://localhost:3040/api/movies",
        json=[
            {
                "id": 50,
                "title": "Not Included",
                "year": 2001,
                "rating": "R"
            },
            {
                "id": 100,
                "title": "Some Movie",
                "year": 2001,
                "rating": "pg-13"
            },
            {
                "id": 200,
                "title": "Some Other Movie",
                "year": 2001,
                "rating": "PG-13"
            }
        ],
        status_code=400,
    )

    # execution
    async with AsyncClient(app=app, base_url="http://test.host") as ac:
        response = await ac.get("/movies/PG-13")

    # assertion
    assert response.status_code == 200
    assert response.json() == [
        {
            "id": 100,
            "title": "Some Movie"
        },
        {
            "id": 200,
            "title": "Some Other Movie"
        }
    ]
```
- In this case, `movies/PG-13` is our endpoint and it calls the fake one (`http://localhost:3040/api/movies`)
- `add_response` adds a fake endpoint to the fake internet, it says "when someone calls 'X' return this hard-coded JSON."
- To get around losing internet from your API, we need to add this part and also put it as the base url
```python
@pytest.fixture
def non_mocked_hosts() -> list:
    return ["test.host"]

...

    async with AsyncClient(app=app, base_url="http://test.host") as ac:
        response = await ac.get("/movies/PG-13")

```