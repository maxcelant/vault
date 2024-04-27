Functions and lambdas are core aspects of Kotlin programming. Let's delve into these concepts:

### 4. Functions
#### Basic Functions
A function in Kotlin is declared using the `fun` keyword. Here's a simple example:

```kotlin
fun greet(name: String) {
    println("Hello, $name!")
}
```

You can call this function with `greet("Alice")`.

#### Function Parameters and Return Types
Functions can have parameters and return values:

```kotlin
fun add(a: Int, b: Int): Int {
    return a + b
}

val sum = add(5, 3)  // sum will be 8
```

#### Default and Named Arguments
Kotlin allows default values for function parameters and named arguments for more readable function calls:

```kotlin
fun greet(name: String, greeting: String = "Hello") {
    println("$greeting, $name!")
}

greet("Bob")  // Uses default greeting: "Hello, Bob!"
greet("Bob", greeting = "Welcome")  // Named argument: "Welcome, Bob!"
```

### Lambdas
Lambdas (or lambda expressions) are a concise way to represent a function that can be passed as an expression. They are particularly useful for higher-order functions, which are functions that take functions as parameters or return them.

#### Basic Lambda Syntax
Here’s the basic syntax of a lambda:

```kotlin
val multiply = { a: Int, b: Int -> a * b }
val result = multiply(4, 5)  // result is 20
```

#### Passing Lambdas to Functions
You can pass lambdas to functions. This is commonly used with collection functions like `map`, `filter`, etc.:

```kotlin
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }  // [2, 4, 6, 8, 10]
```

#### Higher-Order Functions
These are functions that take functions as parameters or return functions. They are a powerful concept in Kotlin, allowing for great flexibility and expressiveness.

Example of a higher-order function:

```kotlin
fun calculate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

val sumResult = calculate(2, 3) { x, y -> x + y }
val mulResult = calculate(2, 3, multiply)  // Using the previously defined lambda
```

### Exercise
1. **Write Basic Functions**:
   - Create a function that takes a string and prints it.
   - Write a function that takes two integers and returns their sum.

2. **Experiment with Lambdas**:
   - Define a lambda that takes two numbers and multiplies them.
   - Use this lambda in a list of numbers with the `map` function to multiply each number by a constant.

3. **Higher-Order Functions**:
   - Write a higher-order function and use it with different lambdas.

These exercises will help you grasp the concept of functions and lambdas in Kotlin, which are essential for many common programming tasks, especially when working with collections and asynchronous operations. If you have any specific scenarios in mind or need further examples, feel free to ask!