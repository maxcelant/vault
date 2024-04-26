1. Can be used to dynamically make a new class
```python
# Dynamically create a new class (a new type)
Person = type('Person', (), {'age': 30, 'job': 'Engineer'})

# Create an instance of the new class
bob = Person()

# Access attributes
print(bob.age)  # 30
print(bob.job)  # Engineer
```