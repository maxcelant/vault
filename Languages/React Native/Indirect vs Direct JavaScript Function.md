## What does `.bind()` do to a function?
- It takes a function and _pre-configures_ the arguments that function will get when it is called.

```js
const goals = [
  { id: 1, txt: 'Run a mile🏃'},
  { id: 2, txt: 'Eat healthy🥬'}
] 

const setActiveGoal = (id: number) => {
  return goals.find(goal => goal.id === id);
}

// Will pre-configure this fn
// to only work with `1` as input param
setActiveGoal.bind(null, 1, ...more params) 
```

- **Concept**: In JavaScript, functions can be executed directly (explicit call in code) or indirectly (triggered by an event like a button click).
- **Direct Execution**: Involved calling a function by its name followed by parentheses, e.g., `functionName()`. This executes the function immediately where it's called in the code.
- **Indirect Execution**: Often used in event handlers, where a function is executed in response to an event. This requires careful handling of the function's context (`this`).
- **Common Mistake**: A frequent error in event handlers is directly executing the function (e.g., `button.onclick = myFunction()`) instead of passing the function reference (e.g., `button.onclick = myFunction`).
- **`bind()` Method**: Useful for maintaining the correct context (`this`) in indirectly executed functions, especially when the function needs to refer to the object it belongs to.
