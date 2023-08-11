- `deepcopy` will recursively create new copies for the new object
- `copy` will just create a new version for the highest level structure

```python
from copy import copy, deepcopy

data = [
	{
		name: "Max",
		number: "682-239-1122"
	},
	{
		name: "Caleb",
		number: "972-535-7523"
	},
]

new_data_I  = data.copy()
new_data_II = data.deepcopy()
```

`new_data_I` will 