1. Replace a real function with a 'mock' one 
```python
def fib(n):
    if n == 0 or n == 1:
        return 1
    
    return fib(n-1) + fib(n-2)

def format_fib(n):
    ans = fib(n)

    return f"<fibonacci>{ans}</fibonacci>"
```

```python
from unittest.mock import patch
from app.fib import format_fib

@patch('app.fib.fib', autospec=True)
def test_fib_format(fib_mock):
    fib_mock.return_value = 89

    result = format_fib(10)

    assert result == "<fibonacci>89</fibonacci>"
```

2. If your function is called multiple times, you can have the results differ for each
```python
from unittest.mock import patch
from app.fib import format_fib

@patch('app.fib.fib', autospec=True)
def test_fib_format(fib_mock):

    fib_mock.side_effect = [
        89,
        54
    ]

    result1 = format_fib(10)
    result2 = format_fib(5)

    assert result1 == "<fibonacci>89</fibonacci>"
    assert result2 == "<fibonacci>54</fibonacci>"
```