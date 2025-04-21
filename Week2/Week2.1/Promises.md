### 🔮 What is a Promise?

A **Promise** is an object in JavaScript that represents the eventual **completion** (or **failure**) of an asynchronous operation and its resulting **value**.

Think of it like a **"promise" to return something later** — maybe now the data isn’t ready, but it will be.

---

### ✨ Why Use Promises?

In the past, JavaScript handled async code using **callbacks**, which led to messy, nested code — aka **"callback hell."** Promises clean this up and make code easier to read and manage.

---

### 🧱 Basic Structure

```js
let promise = new Promise(function(resolve, reject) {
  // Do something (async)
  if (success) {
    resolve(result); // fulfilled
  } else {
    reject(error);   // rejected
  }
});
```

---

### ✅ Consuming Promises

You typically use `.then()`, `.catch()`, and `.finally()`:

```js
doSomething()
  .then(result => {
    console.log('Success:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Done!');
  });
```

---

### 🛠️ Example

```js
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data received!");
      } else {
        reject("Something went wrong.");
      }
    }, 1000);
  });
}

fetchData()
  .then(data => console.log(data))     // "Data received!"
  .catch(err => console.error(err))   // if error
  .finally(() => console.log("Done"));
```

---

### 🧠 Promise States

A Promise has 3 possible states:
1. **Pending** – Initial state, not yet fulfilled or rejected
2. **Fulfilled** – The operation completed successfully
3. **Rejected** – The operation failed

---

### 🧪 Tip: Promises Are Chainable

```js
fetchUser()
  .then(user => fetchPosts(user.id))
  .then(posts => showPosts(posts))
  .catch(err => console.error(err));
```

This is way cleaner than nesting callbacks!