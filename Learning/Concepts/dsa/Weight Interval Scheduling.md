Deciding which blocks to choose.
1. Sort the blocks by the time they finish
2. There's a rule to find out which blocks fit together ( `p()` ). It tells you which blocks can be stacked before the current block.
3. There are two _cases_:
	1. We use the last block and then add the best blocks before it
	2. We don't use the last block and just focus on the other blocks.

#### Understanding `p(n)`
- `p(n)` basically tells us that `n` blocks are not conflicting with the block we are looking at.

>![[Pasted image 20231029094021.png]]

#### Computing
- **Including current job:** compute the value for the current `j` we include `v_j`, then, to avoid overlap, jump back to the last job it's compatible with `j-` (that's where the `p(j)` function comes in). After jumping back, we add the optimal solution from that point, hence `OPT(p(j))`.
- **Excluding current job:** If we exclude we simply move on to the next job without taking `v_j`. Means that right now optimal is `OPT(j-1)`.

#### Example
Suppose we have the following jobs:

| Job \( j \) | Start | Finish | Value \( v_j \) |
|------------|-------|--------|-----------------|
| 1          | 1     | 3      | 5               |
| 2          | 2     | 5      | 6               |
| 3          | 4     | 6      | 5               |
| 4          | 6     | 7      | 4               |

First, we need the \( p(j) \) function, which tells us the last job that is compatible with \( j \):
- \( p(1) = 0 \) because there's no job before job 1.
- \( p(2) = 0 \) because job 1 overlaps with job 2.
- \( p(3) = 1 \) because job 1 is the last job that finishes before job 3 starts.
- \( p(4) = 2 \) because job 2 is the last job that finishes before job 4 starts.

Now, let's compute \( OPT(j) \) for each job using our formula:

**For job 1:**
- Include: \( v_1 + OPT(p(1)) = 5 + 0 = 5 \)
- Exclude: \( OPT(0) = 0 \)
- \( OPT(1) = \max(5, 0) = 5 \)

**For job 2:**
- Include: \( v_2 + OPT(p(2)) = 6 + 0 = 6 \)
- Exclude: \( OPT(1) = 5 \)
- \( OPT(2) = \max(6, 5) = 6 \)

**For job 3:**
- Include: \( v_3 + OPT(p(3)) = 5 + 5 = 10 \)
- Exclude: \( OPT(2) = 6 \)
- \( OPT(3) = \max(10, 6) = 10 \)

**For job 4:**
- Include: \( v_4 + OPT(p(4)) = 4 + 6 = 10 \)
- Exclude: \( OPT(3) = 10 \)
- \( OPT(4) = \max(10, 10) = 10 \)

The maximum value we can achieve is 10 by selecting jobs 1 and 3, or by selecting job 2 and job 4. Either way, we get a total value of 10!

>![[Pasted image 20231029100109.png]]

#### Code Example

```python
from dataclasses import dataclass

@dataclass
class Job:
    start: int
    end: int
    value: int


jobs = [Job(start=1, end=3, value=5), Job(start=2, end=5, value=6),
        Job(start=4, end=6, value=5), Job(start=6, end=7, value=4)]


def scheduler(jobs: list[Job]):
    sorted(jobs, key=lambda j: j.end)

    p = [0] * len(jobs)
    for i in range(len(jobs)):
        for j in range(i-1, -1, -1):
            if jobs[j].end <= jobs[i].start:
                p[i] = j + 1
                break

    OPT = [0] * (len(jobs) + 1)

    for j in range(1, len(jobs) + 1):
        OPT[j] = max(jobs[j-1].value + OPT[p[j-1]], OPT(j-1))


scheduler(jobs)
```