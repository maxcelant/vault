It's like trying to find out if you can pick some numbers (or blocks) to add up to a specific number. And if you can, which numbers (or blocks) should you pick?

- There are two choices we can make:
	- Include the current block to help make the desired sum
	- Exclude it and make the sum with earlier blocks
- **Recurrence (a formula)**:
	- **OPT(i, w)**: This is a way to remember the best choices made so far for a smaller list of blocks and a smaller target sum.
	- The formula basically says: To find the best way for a certain list and target sum, compare:
	    - The best way without the last block.
	    - The sum of the last block and the best way to get the remaining sum from the earlier blocks.
- If _Wn_ > **W**: then the last block is bigger than the sum you're trying to make, you can't use it.

---
#### Example
>![[Pasted image 20231029120440.png]]

- Columns: 0 to W
- Rows: the given set of numbers
- Cells: Either *True* or *False*

>![[Pasted image 20231029115622.png]]

- **Case 1: W < w_i:** If the current item's weight is greater than the current capacity...
	- We can't include it because it's too much, so we just get the number from the row above
- **Case 2: Otherwise:** Then we have two options
	- **Option A:** `OPT(i - 1, w)` We don't include the current number in the subset, so our number depends on whether a subset of the previous number can sum up to `w`.
	- **Option B:** `OPT(i - 1, w - nums[i])` We include the current number. Now we need to determine if there's a subset of the previous number that can sum up to `w - nums[i]`, which is the remaining sum after including the number.