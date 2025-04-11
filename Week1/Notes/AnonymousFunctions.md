### 🔍 What is an **anonymous function**?

An **anonymous function** is simply a function **without a name**.

Instead of this:

```js
function sayHi() {
    console.log("Hi");
}
```

You write:

```js
const sayHi = function() {
    console.log("Hi");
};
```

✅ It's still assigned to a variable  
✅ It still works like a regular function  
❌ But it doesn't have a name after `function`

---

### 🧠 Why use anonymous functions?

They're useful when:
- You don’t need to reuse the function elsewhere
- You’re passing the function as an argument (like a callback)
- You want short, one-time behavior

---

### 📌 Common places you'll see them:

#### 1. **As a callback**
```js
setTimeout(function() {
    console.log("Waited 2 seconds");
}, 2000);
```

You're passing a function to `setTimeout` — no need to name it.

---

#### 2. **Array methods**
```js
let nums = [1, 2, 3];

nums.forEach(function(num) {
    console.log(num);
});
```

Again, short, one-use function — perfect time for anonymous.

---

### ⚡ Bonus: Arrow Functions = anonymous too

ES6 introduced arrow functions. These are anonymous by default and shorter to write:

```js
const add = (a, b) => a + b;
```

You can use them in the same places:

```js
nums.map(num => num * 2); // returns [2, 4, 6]
```

---

### 🔚 Summary

| Named Function | Anonymous Function |
|----------------|--------------------|
| `function add(a, b) { return a + b; }` | `const add = function(a, b) { return a + b; }` |
| Has a name | No name after `function` |
| Can be reused easily | Great for short, one-off use |
