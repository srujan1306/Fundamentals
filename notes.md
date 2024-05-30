### JS TOPICS 30-05-2024

1.  **scope** : Area where you can access a variable. Scope determines the accessibility of variables, objects, and functions from different parts of the code.

### Scope of var and let

```{
        var x1 = 10;
        let x2 = 20;
        }
      console.log(x1);
      console.log(x2);
```

### not defined (error) vs undefined(value)

` console.log(z1);`
Error will be occured.

```
var z2;
console.log(z2);
```

Undefined (value) will be displayed

```
function drivingTest(age)
{
  if (age > 18)
  {
    let msg = "eligible";
  }
  else
  {
    let msg = "not eligible";
  }
  console.log("you are" + msg);
}
drivingTest(20);
```

This code will display an error due to the scope of let.

```
function drivingTest(age)
{
    let msg;
    if (age > 18)
    {
     msg = "eligible";
    }
    else
    {
       msg = "not eligible";
    }
    console.log("you are " + msg);
  }
  drivingTest(20);
```

This code will give the output.

```
var x1=3;
var x2="5";
var x3=x1+x2;
var x4=x1-x2;
console.log(x1+x2);
console.log(x1-x2);
console.log(typeof x3);
console.log(typeof x4);
```

### output

```
35
-2
string
number
```

IMPLICIT TYPECAST = COERCION

```
var x=[1,2,5];
var x2="abc";
var x3 = x+x2;
console.log(x3);
```

for [1,2,5] _.toString()_ will be called and converted into a string.

### OUTPUT

```
1,2,5abc
```

### Another Exapmle

```
null + 5
OUTPUT : 5
```

### Which is faster ? == or ===

```
var g1=5;
var g2="5";
console.log(g1==g2);
console.log(g1===g2);
```

### OUTPUT

```
true
false
```

"===" is faster than "==" ,because == go for implicit typecasting whereas === won't go for typecasting.

## TYPES OF FUNCTIONS

1. **Normal Function**

```
function double(n)
{
    return n*5;
}
```

2. **Arrow Function**

```
const double = (n)=>
{
    return n*2;
}
double(5);
```

another way

```
const double = (n) => n*2;
double(5);
```

# 5 PILLARS OF CODE QUALITY

1. Readability
2. Maintainability
3. Extensibility
4. Testability
5. Performance
