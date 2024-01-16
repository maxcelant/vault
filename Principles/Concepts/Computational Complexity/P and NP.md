>![[Pasted image 20240115130508.png]]

## P (_Polynomial Time_)
- Problems in P can be both solved and verified in polynomial time. Polynomial time here means that the amount of time it takes to solve or verify a solution to the problem grows at a rate that is a polynomial function of the size of the input. This is generally considered "efficient" in computational terms.

```ad-example
Imagine you're given a jigsaw puzzle. If the puzzle can be solved (all pieces fitting together correctly) in a time that grows reasonably with the number of pieces, it's akin to a problem in P. Not only can you put it together efficiently, but you can also quickly confirm it's correct by looking at the completed picture.
```

## NP (_Nondeterministic Polynomial Time_)
- Problems in NP are those for which a solution, if given, can be verified in polynomial time, but finding that solution might not be efficient. The term "nondeterministic" suggests that if we could "magically" or "nondeterministically" guess a solution, we could verify its correctness efficiently.

```ad-example
Think about solving a complex maze. Verifying a given solution (a path through the maze) is quick: you just trace the path. However, finding that path in the first place might involve a lot of trial and error, potentially trying out many different routes, which could take a lot longer. This process of trial and error reflects the "nondeterministic" aspect, where the correct path, if somehow guessed, can be verified quickly, but finding it is not guaranteed to be efficient.
```

```ad-note
## What makes a problem NP?

A problem is in NP if, given a solution (or a "certificate"), it can be verified in polynomial time. Essentially, this means if someone hands you a solution, you can check that it's correct quickly (where 'quickly' typically means the time it takes is a polynomial function of the size of the input).

Problems in NP are decision problems, which means they have yes or no answers. These problems are such that solutions exist (though they might be hard to find), and once found, their correctness can be checked quickly.
```



