Control structures are fundamental in any programming language, including Kotlin, as they allow you to control the flow of execution. Let's explore the main control structures in Kotlin:

### 1. Conditional Statements

#### If-Else Statement
Kotlin's `if-else` works similarly to other languages. It can be used as a statement or an expression.

- **As a Statement:**
  ```kotlin
  val number = 10
  if (number % 2 == 0) {
      println("$number is even")
  } else {
      println("$number is odd")
  }
  ```

- **As an Expression:**
  ```kotlin
  val result = if (number % 2 == 0) "even" else "odd"
  println("$number is $result")
  ```

#### When Expression
`when` in Kotlin is a more powerful and flexible version of the switch-case statement found in other languages.

- **Basic Usage:**
  ```kotlin
  val day = 3
  val dayName = when (day) {
      1 -> "Monday"
      2 -> "Tuesday"
      3 -> "Wednesday"
      else -> "Unknown"
  }
  println("Day $day is $dayName")
  ```

- **Checking Multiple Values:**
  ```kotlin
  when (number) {
      0, 1 -> println("Number is 0 or 1")
      else -> println("Number is neither 0 nor 1")
  }
  ```

### 2. Loops

#### For Loop
The `for` loop in Kotlin is used to iterate through ranges, arrays, collections, or anything that provides an iterator.

- **Iterating Through a Range:**
  ```kotlin
  for (i in 1..5) {
      println(i)
  }
  ```

- **Iterating Through an Array or List:**
  ```kotlin
  val numbers = arrayOf(1, 2, 3, 4, 5)
  for (num in numbers) {
      println(num)
  }
  ```

#### While and Do-While Loops
These loops work similarly to their counterparts in other languages.

- **While Loop:**
  ```kotlin
  var count = 5
  while (count > 0) {
      println(count)
      count--
  }
  ```

- **Do-While Loop:**
  ```kotlin
  do {
      println(count)
      count--
  } while (count > 0)
  ```

### 3. Ranges
Ranges in Kotlin are a unique and efficient way to represent a sequence of values.

- **Using Ranges:**
  ```kotlin
  for (i in 1..10) println(i)  // Prints 1 through 10
  ```

- **DownTo, Until, Step:**
  ```kotlin
  for (i in 10 downTo 1) println(i)  // 10 down to 1
  for (i in 1 until 10) println(i)  // 1 to 9 (10 is excluded)
  for (i in 1..10 step 2) println(i)  // 1, 3, 5, 7, 9
  ```

### Exercise

1. **Experiment with Conditional Statements**:
   - Create a variable and use an `if-else` statement to check some condition.
   - Use a `when` expression to handle multiple conditions or values.

2. **Play with Loops**:
   - Write a `for` loop to iterate over a range or collection.
   - Use `while` and `do-while` loops to repeat actions until a condition is met.

3. **Explore Ranges**:
   - Create different ranges and iterate over them with `for` loops.
   - Try using `downTo`, `until`, and `step` in your ranges.

Control structures are key to directing the flow of your programs. Experimenting with these will help you understand how to control the logic and flow in your Kotlin applications. Feel free to try out these examples and modify them to see how they work. Do you have any specific scenarios or examples you would like to explore?