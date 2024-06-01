1. Testing for Exceptions with Pytest
```python
def test_func_raises_exception_when_zero():
	with pytest.raises(ZeroDivisionError):
		function(0)
```