**Numbers**
- `toBeGreaterThan` or `toBeGreaterThanOrEqual`.
- `toBeLessThan` or `toBeLessThanOrEqual`.
- You can also check floating point equality with `toBeCloseTo`.

**Strings**
- You can check strings against regular expressions using `toMatch(string|regxp)`

```javascript
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```
