#### Dynamic Array: Accounting Method
- With each insertion, we **charge** 3 units (this is the amortized cost we assign, not what we pay). It’s like setting aside 3 units for every operation.
- The **actual cost** of the insertion is 1 unit, so we have 2 units left over. These 2 units are not physically stored anywhere, but we account for them as "credits" that we have saved up for future use.
- When we need to double the array, which happens when the array is full and we attempt to insert another element, the **actual cost** of this operation is substantial because it involves allocating a new array that's twice the size and copying all the elements over. This actual cost is `2n + 1` units, where `n` is the current number of elements.
- Each of the `n` elements in the array before doubling has 2 credits associated with it (because we've been saving 2 credits per insertion).
- So when we double the array, each of the `n` elements "pays" its 2 credits to contribute towards the cost of doubling. This gives us a total of `2n` credits to spend on the doubling process.
- Since the cost to double is `2n + 1`, we use up all `2n` credits from the elements, and the 3 units charged for the operation that triggered the doubling covers the additional `+1` and the insertion of the new element.

#### Stack: Accounting 
- For each push onto the stack, you "charge" an amortized cost of 2 credits. This is like saying each push operation has a cost of 2, even though the actual cost is less.
- Out of these 2 credits, 1 credit is "spent" on the actual operation of pushing, and the other 1 credit is stored or "kept" with the element on the stack as a prepayment for a future operation involving this element.
- When a pop operation occurs, if it's popping an element that was previously pushed, it uses the 1 credit that was stored with that element to cover the cost of the pop operation. This means that every element has its own pop operation already "paid for" by the credit that was saved when it was pushed.

#### Potential Method
![[Pasted image 20240109141924.png]]

#### For Dynamic Tables
Okay, let's imagine you have a magic bag that can change size!

1. **Doubling**: When you put toys in your magic bag and it gets completely full, it magically becomes bigger so that you can fit twice as many toys. This is like having a small bag, and then suddenly, it's a big bag!

2. **Halving**: If you take out lots of toys and the bag is only a little bit full, like only 1 toy when you could fit 4, it shrinks to become a smaller cozy bag that is just right for the toys you have. 

3. **Potential Function**: The magic bag has a special number that tells us how magical it is feeling. 

   - If your bag is at least half full (like you have 2 or 3 toys when you could fit 4), the magic number is "how many more toys you can fit before it's totally full" multiplied by 2, and then we take away how big the bag is.
   - If your bag is less than half full (like only 1 toy when you could fit 4), the magic number is half the size of the bag minus how many toys are in there.

This special magic number helps us to remember if the bag will grow or shrink soon. When the bag is just right or getting full, the number is bigger because it's got lots of magic stored up. When the bag is getting too empty, the number is smaller because it doesn't need to use magic to shrink. 

We keep track of this magic number because it helps us understand how the bag works over time, making sure the bag's magic is used in the best way possible!

---

>![[Pasted image 20240109142713.png]]

Alright, let's use simple terms to explain this slide:

1. **Doubling**: If you have a box of crayons and you fill it up, you get a new, bigger box that can hold twice as many crayons as the old box.

2. **Halving**: If you take out lots of crayons and you're left with only a few (like if you have a box that can hold 8 crayons but you only have 2 crayons left), you switch to a smaller box that's just the right size for the crayons you have.

3. **Potential Function**: This is like a magic number that tells us something about how full the crayon box is. It changes depending on how many crayons are in the box:
   - If the box is at least half full, the magic number is "twice the number of crayons you have" minus "how big the box is".
   - If the box is less than half full, the magic number is "half the size of the box" minus "how many crayons you have".

4. **Inserting Crayons**: Let's say your box can hold 16 crayons and you already have 12 crayons in it. The box is not completely full, but it's more than half full.

5. **Amortized Cost**: This is like saying, "How much effort does it take to put a new crayon in the box, on average?"
   - The actual effort to put one crayon in the box is 1 (because putting a crayon in the box is easy!).
   - But we also think about how full the box is getting and whether we'll need a new box soon. To do that, we use the magic number (the potential). Since the box is more than half full (with 12 out of 16 spaces filled), we calculate the magic number as "twice the number of crayons" (which is 24) minus "how big the box is" (which is 16). So, the magic number is 24 - 16 = 8.
   - Now, we take the magic number and divide it by the number of crayons we have (12), which gives us 8/12. This is like saying, "Each crayon is sharing a little bit of the effort it will take to move to a new box when this one gets full."
   - Adding the actual effort (1) to the shared effort (8/12), we get the total average effort, or amortized cost, which is 1 + 8/12 = 1 + 2/3. Since 2/3 is a little bit less than a whole, we round up to say the average effort is about 3.

So, the slide is telling us that even though right now it's easy to put a crayon in the box, we're also thinking ahead about when we'll need a new box, and that makes the average effort a little bit higher when we consider the future.


---

![[Pasted image 20240109143323.png]]

![[Pasted image 20240109143313.png]]

---
![[Pasted image 20240109143903.png]]

![[Pasted image 20240109143908.png]]

--- 

![[Pasted image 20240109185634.png]]
Dbefore = 2x8 - 16 = 0 
Dafter = 8/2 - 7 = 4 - 7 = -3 
amortized cost = 1 + (-3 - 0) = 2


---

