### 1. **The Basics: `async` and `await`**

- An `async` function always returns a **Promise**.
- Inside an `async` function, you can use `await` to pause execution until a Promise is resolved or rejected.

#### Example:
```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

### 2. **How It Works**
- `fetchData()` is an async function.
- `await fetch(...)` pauses the function until the fetch completes.
- If there's an error, it’s caught in the `catch` block.

### 3. **Why Use Async/Await?**
Compared to chaining `.then()` with Promises, async/await:
- Makes code easier to read and write.
- Looks synchronous but behaves asynchronously.

#### Promise Example (equivalent to the one above):
```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 4. **Common Patterns**
- Running multiple async tasks:
```js
async function loadMultiple() {
  const [data1, data2] = await Promise.all([
    fetch('/api/one').then(res => res.json()),
    fetch('/api/two').then(res => res.json())
  ]);
}
```

- Waiting for tasks sequentially:
```js
async function runSequentially() {
  await taskOne();
  await taskTwo();
}
```