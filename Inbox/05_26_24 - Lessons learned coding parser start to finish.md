1. As we drill down on the left side (left recursion), the expressions/operations will have highest precedence. 
2. The parser goes down to its simplest elements (literals) and then goes back up, handling the case of which operation it is as it goes, whether that be a unary, mult, etc.
3. After a literal gets consumed, that means theres usually an operation next that will dictate if we go back down the rabbit hole or go upwards in the tree.
4. ON THE WAY DOWN, ITS LITERALS, ON THE WAY UP ITS OPERATIONS!

> ![[Pasted image 20240526130401.png]]

- `2` is being looked at on the way down to `literal`, then its consumed and we are looking at `*` as we go up. 
- When `*` is consumed, we were on `2` again as we go back down, this is consumed when we get to `literal` again. Moving on to `+`.
- `+` is consumed as we go up from `literal` to `add`. Which then moves to `3`.
- `3` is handled and we go all the way back up to the `mult` block which is the end.