### FEATURES OF JAVASCRIPT

- let & const
- ``Template literal
- ...spread operator
- ...Rest operator
- Destructuring
- class
- Arrow function=>
- promise

### 'Object' METHOD

```js
let salaries = {
  cpo: 700,
  srujan: 500,
  rahul: 600,
};
console.log(Object.keys(salaries));
console.log(Object.values(salaries));
```

### OUTPUT

```
['cpo', 'srujan', 'rahul']
[700, 500, 600]
```

### Template Literal

```js
function fullname(firstname, lastname) {
  return `Welcome ${firstname} ${lastname}`;
}
console.log(fullname("srujann", "pothu"));
```

Using ${ \_\_\_\_ } is known as Substitution or Interpolation

### OUTPUT

```
Welcome srujann pothu
```

### AARRAY DESTRUCTURING

```js
const [, t1, t2, t3 = 80] = [100, 200, null];
console.log(t1, t2, t3);
```

### OUTPUT

```
200 null 80
```

### EXAMPLE

```js
let x = "cool";
if (x) {
  console.log("HEY!!!");
} else {
  console.log("NOPE");
}
```

### OUTPUT

```
HEY!!!
```

### EXAMPLE

```js
let x = 0;
if (x) {
  console.log("HEY!!!");
} else {
  console.log("NOPE");
}
```

### OUTPUT

```
NOPE
```

### REST OPERATOR

```js
var [t1, t2, ...t3] = [10, 20, 30, 40, 50, 60, 70];
console.log(t3);
```

### OUTPUT

```
[30, 40, 50, 60, 70]
```
