**Common Matchers**
- `toBe` is like doing `===`, while `toEqual` is like doing `==`.
- `expect(x).not.toBe(y)` is for checking inequalities.



**Arrays or Iterables**


**Objects**
```javascript
test('the car has wheels', () => {
  const car = { wheels: 4, engine: true };
  expect(car).toMatchObject({ wheels: 4 });
});
```

**Types**
```javascript
test('object has property of instance', () => {
  expect({ a: 1 }).toEqual(expect.objectContaining({ a: expect.any(Number) }));
});
```

