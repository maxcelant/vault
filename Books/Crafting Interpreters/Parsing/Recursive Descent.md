One of my parsing techniques. Considered a "top-down parser" because it starts from the outermost grammar (`expression`) and goes down to the nested subexpressions.

```ad-tldr
The descent is described as “recursive” because when a grammar rule refers to itself -- directly or indirectly--that translates to a recursive function call.
```

**Rule Translation**

| Grammar     | Code                              |
| ----------- | --------------------------------- |
| Terminal    | Code to match and consume a token |
| Nonterminal | Call to that rule's function      |
| "\|"        | `if` or `switch` statement        |
| * or +      | `while` or `for` loop             |
| "?"         | `if` statement                    |