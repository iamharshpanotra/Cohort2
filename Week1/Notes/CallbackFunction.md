---

### 🔁 What is a Callback Function?

A **callback function** is a **function passed as an argument** to another function.  
It is **called (executed)** after the first function finishes its task.

---

### ✅ Basic Example:

```js
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Harsh", sayBye);
```

#### Output:
```
Hello, Harsh
Goodbye!
```

- `greet` accepts a name and a callback function.
- After saying hello, it runs `callback()` — which calls `sayBye`.

---

### 🔁 Why Use Callbacks?

- To **run code after something finishes**.
- For **asynchronous tasks**, like:
  - Fetching data
  - Reading files
  - Waiting for a timer
  - User interactions

---

### ⏱ Example with `setTimeout` (asynchronous):

```js
console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");
```

#### Output:
```
Start
End
This runs after 2 seconds
```

Even though `setTimeout` is written in the middle, the message runs **later** — because it's **asynchronous**, and the function inside it is a **callback**.

---

### 🎯 Callback Example with Array:

```js
let numbers = [1, 2, 3, 4];

numbers.forEach(function(num) {
    console.log("Number:", num);
});
```

Here, the function inside `.forEach()` is a **callback** that runs for every element.

---

### ⚠️ Callback Hell (What not to do 😅):

```js
doStep1(function(result1) {
    doStep2(result1, function(result2) {
        doStep3(result2, function(result3) {
            console.log("Final result:", result3);
        });
    });
});
```

This nested structure becomes **hard to read and maintain** — called **callback hell**.  
This is why we often use **Promises** and **async/await** in modern JS instead (want me to explain those too? 😉).

---
