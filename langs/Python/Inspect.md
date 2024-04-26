- `inspect.signature(function_name)` allows you to get information about a particular function.

```python
@staticmethod
def __create_function(func: ModelCallable[T], description: str) -> SessionFunction:
	sig = inspect.signature(func)

	properties: dict[Any, Any] = {}
	for name, param in sig.parameters.items():
		properties[name] = {
			"type": "string",
			"description": param.annotation.__metadata__[0].description,
		}

	params = {
		"type": "object",
		"properties": properties,
		"required": [name for name, _ in sig.parameters.items()],
	}

	cf = ChatFunction(
		name=func.__name__, description=description, parameters=params
	)

	return SessionFunction(callable=func, model_function=cf)
```

