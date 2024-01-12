Interfaces in Kotlin can contain abstract methods and method implementations:

```kotlin
interface Drivable {
    fun drive()
    fun honk() {
        println("Beep beep!")
    }
}

class Car : Drivable {
    override fun drive() {
        println("Car is driving...")
    }
}
```

