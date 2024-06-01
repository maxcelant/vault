You can turn this:
```python
my_dict = {}
for outer_var in outer_itr:
	for inner_var in inner_itr:
		key = inner_var["key"]
		value = inner_var["value"]
		my_dict[key] = value
```
Into this:
```python
{
	inner_var["key"]: inner_var["value"]
	for outer_var in outer_itr 
	for inner_var in inner_itr
}
```

