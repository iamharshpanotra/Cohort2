# 🔐 Authentication in JavaScript, Express, and Node.js

Authentication is the process of verifying the identity of a user or service. In a Node.js + Express application, authentication is critical for securing resources and controlling access to different parts of an application.

---

## 📚 Key Concepts

| Term               | Description                                                         |
| ------------------ | ------------------------------------------------------------------- |
| **Authentication** | Verifying who the user is (e.g., via email & password).             |
| **Authorization**  | Verifying what the user has access to (e.g., admin vs user routes). |
| **Session**        | Stored data on server or client used to maintain login state.       |
| **Token**          | A piece of data (like JWT) used to verify identity across requests. |

---

## 🔧 Common Authentication Methods in Node.js

### 1. **Session-Based Authentication**

* Stores user session on the server (often with cookies on client).
* Uses libraries like `express-session`.

### 2. **Token-Based Authentication (JWT)**

* Stores signed token on the client (usually in localStorage or cookies).
* Sends token on every request for validation.

---

## 🛠️ Implementing Authentication in Express.js

### ✅ Setup Example with JWT

**Step 1: Install dependencies**

```bash
npm install express jsonwebtoken bcryptjs body-parser
```

**Step 2: Sample code (index.js)**

```js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = []; // Simulates a user DB

const SECRET_KEY = 'your_jwt_secret'; // Keep it in .env in real projects

// Register Route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.send('User registered!');
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Protected Route
app.get('/protected', (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        res.send(`Hello ${user.username}, you're authenticated!`);
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 🧪 Testing Endpoints

* **POST /register**: Create a user.
* **POST /login**: Get a JWT token.
* **GET /protected**: Pass `Authorization: Bearer <token>` in headers to access.

---

## 🧱 Best Practices

* Store JWT secret in `.env`.
* Use HTTPS in production.
* Validate inputs to avoid injection attacks.
* Use middleware to handle auth logic.

---

## 🧩 Useful Libraries

| Library           | Purpose                      |
| ----------------- | ---------------------------- |
| `jsonwebtoken`    | Sign/verify JWTs             |
| `bcryptjs`        | Hash/verify passwords        |
| `express-session` | For session-based auth       |
| `passport.js`     | Pluggable authentication lib |

---

## 🔚 Conclusion

Authentication in Node.js with Express is flexible and can be session-based or token-based. JWT-based authentication is popular for modern RESTful APIs. Always secure sensitive data, validate inputs, and follow best practices for safe and scalable authentication.