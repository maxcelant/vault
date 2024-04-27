- Put `.pytest_cache` to the `.gitignore`
- `python3 -m pytest` <- always do it like this
- Functions need to start with `test`
- 

##### Examples
1. test + func name + what it should do
```python
def test_should_ride_returns_false_when_too_exciting():
	# Setup
	rider = {"name": "Jeff", "safety": 5, "excitement": 8}
    ride = {"name": "Superman", "excitement": 9, "safety": 5}
	
	# Execution
	actual = should_ride(ride, rider)
	
	# Assertion
	assert actual == False
```

2. Be careful if you're working with objects! Since the `==` wont work unless you store it in a variable
```python
def test_riders_returns_riders_who_should_ride():
	rider1 = Rider("Max", 5, 6)
	rider2 = Rider("Jeff", 3, 10)
	potential_riders = [rider1, rider2]
	actual = find_riders(ride, potential_riders)
	assert actual == rider1
```

3. Creates a fake copy of a function for the test which can be altered. Also cleans up after itself.
```python
from

@patch("patch_testing.functions.fibonacci")
def test_fib_formatting(fake_fibonacci, autospec=True):
	fake_fibonacci.return_value = 832_040

	number = 10_000

	output = format_fibonacci(number, "xml")

	assert output == "<fib>832,040</fib>"
```
`autospec=True` tells `patch` to blowup if the function is called with the wrong number of params.

