1. If you want an exception to be raised from a function when certain input occurs, you can test that.
```python
import pytest

def test_average_raises_when_count_is_zero():
    with pytest.raises(InvalidCountException):
        average(12, 0)
```