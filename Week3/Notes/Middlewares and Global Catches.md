# Middlewares and Global Catches in JavaScript (Node.js + Express)

## 🔹 1. Middleware in Express.js

### ✅ What is Middleware?
Middleware functions in Express.js execute during the request-response cycle and have access to:
- `req` (Request object)
- `res` (Response object)
- `next()` function (used to pass control to the next middleware)

### ✅ Purpose of Middleware
- Logging
- Authentication & Authorization
- Parsing body data
- Validating inputs
- Error handling

### ✅ Basic Middleware Example

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass to the next middleware/handler
});
````

---

### 🔸 Types of Middleware

1. **Application-level Middleware** – Registered using `app.use()` or `app.get()` etc.
2. **Router-level Middleware** – Defined using `express.Router()`
3. **Error-handling Middleware** – Functions with 4 parameters: `(err, req, res, next)`
4. **Built-in Middleware** – E.g., `express.json()`, `express.urlencoded()`
5. **Third-party Middleware** – E.g., `cors`, `helmet`, `morgan`

---

### 🔸 Example: Logging and Auth Middleware

```js
// Logging middleware
app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.path}`);
  next();
});

// Authentication middleware
const authMiddleware = (req, res, next) => {
  if (req.headers.token === '12345') {
    next(); // Authorized
  } else {
    res.status(401).send('Unauthorized');
  }
};

app.get('/protected', authMiddleware, (req, res) => {
  res.send('Access granted!');
});
```

---

## 🔹 2. Global Error Handling (Global Catches)

### ✅ Why Global Error Handling?

To gracefully catch and handle:

* Runtime errors
* Route-specific exceptions
* Async/Promise errors

---

### 🔸 Global Error Handler Middleware

```js
// This should be placed at the end of all routes/middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: err.message
  });
});
```

---

### 🔸 Triggering an Error with `next(err)`

```js
app.get('/error', (req, res, next) => {
  const err = new Error('Custom error!');
  next(err); // Forward to the global error handler
});
```

---

### 🔸 Handling Async Errors

Express doesn't catch `async` errors unless they are manually caught or wrapped.

#### Async Handler Utility

```js
const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Example usage
app.get('/async-error', asyncHandler(async (req, res) => {
  throw new Error('Async failure!');
}));
```

---

## ✅ Summary

| Concept        | Description                                                                |
| -------------- | -------------------------------------------------------------------------- |
| Middleware     | Functions in request-response cycle. Use for logging, auth, parsing, etc.  |
| Global Catch   | Final error-handling middleware for catching and responding to app errors. |
| `next(err)`    | Used to pass an error to the global error handler.                         |
| `asyncHandler` | Helper to wrap async functions and catch errors.                           |
