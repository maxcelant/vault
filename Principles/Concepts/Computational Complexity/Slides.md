![[Pasted image 20240115165457.png]]

- If we can take any problem in NP and reduce it to the NP-hard problem, then the NP-hard problem is at least as hard as any problem in NP.
- If we somehow manage to find a polynomial-time solution to an NP-hard problem, then we can solve every problem in NP efficiently, because every NP problem can be transformed into this NP-hard problem (which we can now solve efficiently).
- If we solve one NP-hard problem efficiently, it does not mean we have solved all NP-hard problems. However, it does imply that all problems in NP (which could be reduced to the NP-hard problem we solved) can now be solved efficiently.
---

![[Pasted image 20240115170445.png]]

- If we find an efficient algorithm **A** to solve **L** (puzzle A)
- Then we can use reduction algorithm (**A'**) to reduce **L'** (puzzle B) to turn puzzle B to puzzle A.

---

![[Pasted image 20240115171046.png]]

- Basically says that CircuitSAT is NP-hard and if NP != P, then CircuitSAT is not Polynomial aka cannot be solved quickly.

---

![[Pasted image 20240115171444.png]]

- Yes SAT is NP-hard because it's tough to crack but easy to verify.

---

![[Pasted image 20240115171644.png]]

- Shows us that using reduction, we can turn the SAT problem into CircuitSAT problem.
- Does this via reduction that takes polynomial time to do.
- If we can solve SAT now, that means we could solve CircuitSAT.

---

![[Pasted image 20240115172107.png]]

- You are given a graph, which is a collection of points and lines connecting some of them.
- You need to figure out the size (the number of points) of the largest group you can make where none of the points are directly connected.

---

![[Pasted image 20240115172448.png]]

- After you transform the 3SAT problem, you get a new puzzle (a graph for the MaxIndSet problem). The graph is a bunch of dots connected by lines.
- Now, you want to find the largest group of dots where none of the dots in the group are connected by a line (that's the "independent set").
- The number �k is a special number related to the original 3SAT problem, and you're trying to see if there's an independent set in the graph that's at least as big as this number �k.

**Results of Reduction:**

- If you can find a big enough independent set in the graph (at least as big as �k), then that means the answer to the original formula problem (3SAT) is "Yes, it's possible to make it all true."

---
![[Pasted image 20240115172803.png]]

- The Maximum Independent Set and the Maximum Clique are related through the concept of a graph complement. The complement of a graph is a graph with the same vertices, but with edges exactly where the original graph did not have edges. In a graph complement, the independent set of the original graph becomes a clique and vice versa.