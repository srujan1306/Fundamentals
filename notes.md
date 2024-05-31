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

### Copy by reference

```
const t1=[1,2,3];
const t2=t1;
```

t1 and t2 will have same address.

### Spread Operator in copy by value

```
var q1=[100, 200];
var q3=[...q1];
console.log(q3);
```

### Example

```
var t1=[400, 500];
var t2=[90,80];
var t3=[...t1,...t2];
console.log(t3);
```

### OUTPUT

```
[ 400, 500, 90, 80 ]
```

# LOOPS

## For Loop | for more control

```
const marks = [80, 85, 90, 95];

for (let i = 0; i < marks.length; i++)
{
  console.log("Index: " + i + " Marks " + marks[i]);
}
```

## For in loop | Readable and simple | in->index

```
for (let idx in marks) {
  console.log("Index: " + idx + " Marks " + marks[idx]);
}
```

## For of Loop | Readable and Cleaner

```

for (let mark of marks) {
  console.log("Marks ", mark);
}
```

### Example 1 for for loop

```
const cart = [
  { name: "apple", price: 0.5, quantity: 4 },
  { name: "Banana", price: 0.25, quantity: 6 },
];
const newItems = [
  { name: "Cherry", price: 0.75, quantity: 5 },
  { name: "Date", price: 1, quantity: 3 },
];
const total = [...cart, ...newItems];
console.log(total);
let j;
let cost=0;
for(let x=0;x< total.length;x++)
{
    cost = cost + total[x].price * total[x].quantity;
}
console.log(cost);
```

### OUTPUT

```
[
  { name: 'apple', price: 0.5, quantity: 4 },
  { name: 'Banana', price: 0.25, quantity: 6 },
  { name: 'Cherry', price: 0.75, quantity: 5 },
  { name: 'Date', price: 1, quantity: 3 }
]
10.25
```

## Example 2

```
const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

// Output
// ['A Brief History of Time', 'Clean Code', 'Sapiens' ]


const res=[];
var j=0;
for(let i=0;i<books.length;i++)
{
    if(books[i].rating>4.5)
    {
        res[j++]=books[i].title;
        console.log(books[i].title);

    }
}
console.log(res);
```

### OUTPUT

```
A Brief History of Time
Sapiens
Clean Code
[ 'A Brief History of Time', 'Sapiens', 'Clean Code' ]
```

## Example 3: If employee's grades 80 or above promote them

```
const employees = [
  { id: 1, name: "Alice", grade: 78 },
  { id: 2, name: "Bob", grade: 85 },
  { id: 3, name: "Charlie", grade: 92 },
  { id: 4, name: "David", grade: 88 },
  { id: 5, name: "Eva", grade: 76 },
];

// This should output:
// [{ id: 2, status: 'Promoted' }, { id: 3, status: 'Promoted' }, { id: 4, status: 'Promoted' }]


var j=0;
const res=[];
for(let i=0;i<employees.length;i++)
{
    if(employees[i].grade>80)
    {
         res[j++]= {id: employees[i].id, status : 'promoted'};
        //res[j++]="{ id:"+employees[i].id+",status : 'Promoted'";
        console.log("id:"+employees[i].id, "status : 'Promoted'");
    }
}
console.log(res);
```

### OUTPUT

```
id:2 status : 'Promoted'
id:3 status : 'Promoted'
id:4 status : 'Promoted'
[
  { id: 2, status: 'promoted' },
  { id: 3, status: 'promoted' },
  { id: 4, status: 'promoted' }
]
```

## EXAMPLE 4 :Top 1 movie titles

```
const movies = [
  { title: "Inception", ratings: [5, 4, 5, 4, 5] },
  { title: "Interstellar", ratings: [5, 5, 4, 5, 4] },
  { title: "Dunkirk", ratings: [4, 4, 4, 3, 4] },
  { title: "The Dark Knight", ratings: [5, 5, 5, 5, 5] },
  { title: "Memento", ratings: [4, 5, 4, 5, 4] },
];
// Expected Output:  The Dark Knight
// Clue: functions

let sum=0;
var y=[];
let z=0;
let a=0;
for(let i=0;i<movies.length;i++){
    for(let j=0;j<movies[i].ratings.length;j++)
    {
        sum=sum+movies[i].ratings[j];
    }

    y[z++]=sum;
    movies[i].TR=sum;
    sum=0;
}
console.log(movies);
//console.log(movies);
//console.log(y);

```

### OUTPUT

```

```
