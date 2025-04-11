### 🔧 What is a function?

A **function** is a block of code that performs a specific task. It can take **inputs (called parameters)** and optionally **return** a value.

---

### ✅ Basic Syntax

```js
function functionName(parameters) {
    // code to execute
    return result; // optional
}
```

---

### 💡 Example:

```js
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Harsh"); // Output: Hello, Harsh!
```

- `function greet(name)` → defines a function called `greet` that takes a parameter `name`.
- `console.log(...)` → prints a greeting.
- `greet("Harsh")` → calls the function and passes `"Harsh"` as the argument.

---

### 🧮 Function that returns a value:

```js
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8
```

- `return a + b` → returns the result of adding `a` and `b`.
- `sum` stores that result.

---

### 🧠 Types of Functions in JavaScript:

1. **Named Function**
   ```js
   function sayHello() {
       console.log("Hello!");
   }
   ```

2. **Function Expression**
   ```js
   const sayHello = function() {
       console.log("Hello!");
   };
   ```

3. **Arrow Function (ES6+)**
   ```js
   const sayHello = () => {
       console.log("Hello!");
   };
   ```

4. **Immediately Invoked Function Expression (IIFE)**
   ```js
   (function() {
       console.log("This runs immediately!");
   })();
   ```

---

### 🎯 Why Use Functions?

- **Reusability**: Write once, use multiple times.
- **Modularity**: Organize code into small tasks.
- **Maintainability**: Easier to fix or update.
- **Scope control**: Variables inside functions are local (not global).

---