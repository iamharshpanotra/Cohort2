# JavaScript: `map`, `filter`, and Arrow Functions Explained

## 1. `map()`

### Purpose:

The `map()` method is used to **transform each element** of an array and return a **new array** of the same length.

### Syntax:

```js
const newArray = array.map(callback(currentValue, index, array))
```

### Example:

```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

---

## 2. `filter()`

### Purpose:

The `filter()` method is used to **filter out elements** from an array based on a condition. It returns a **new array** with only elements that pass the condition.

### Syntax:

```js
const filteredArray = array.filter(callback(currentValue, index, array))
```

### Example:

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

---

## 3. Arrow Functions (`=>`)

### Purpose:

Arrow functions are a **shorter syntax** for writing functions in JavaScript.

### Syntax:

```js
const functionName = (parameter1, parameter2, ...) => {
  // function body
}
```

### Examples:

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8
```

### When to Use:

* Short and simple functions
* Inline operations like `map()`, `filter()`, `reduce()`

### Notes:

* Arrow functions do **not** have their own `this` binding.
* Parentheses can be omitted for a single parameter:

```js
x => x * 2
```

---

## Combined Example:

```js
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Bob", age: 30 }
];

// Filter adults and get their names
const adultNames = people
  .filter(person => person.age >= 18)
  .map(person => person.name);

console.log(adultNames); // ["John", "Bob"]
```