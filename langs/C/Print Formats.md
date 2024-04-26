| Symbol | Type             |
| ------ | ---------------- |
| `%d`   | Integer          |
| `%f`   | Floating Point   |
| `%c`   | Character        |
| `%s`   | String           |
| `%x`   | Hexadecimal      |
| `%o`   | Octal            |
| `%u`   | Unsigned Integer |
| `%ld`  | Long Integer     |
| `%lf`  | Double           |


#### Octal Example
```c
#include <stdio.h>

int main() {
    int num = 65;  // Example integer value
    printf("Octal representation of %d is: %o\n", num, num);
    return 0;
}
```

#### Precision
```c
float pi = 3.14159265;
printf("%.2f\n", pi);  // Outputs: 3.14
```

#### Width Specifiers
```c
printf("%5d\n", 5);    // Outputs: "    5" (5 is right-aligned in a field of width 5)
```

#### Padding
```c
printf("%05d\n", 5);   // Outputs: "00005"
```

####