1. Formatting JSON
```python
import json

url = f'https://api.github.com/users/{username}/received_events'
response = httpx.get(url)

data = response.json()
formatted_data = json.dumps(data, indent=4)
print(formatted_data)
```