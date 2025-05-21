# 🔐 JSON Web Tokens (JWT) in JavaScript, Express, and Node.js

---

## 📄 What is a JWT?

**JWT (JSON Web Token)** is an open standard (RFC 7519) for securely transmitting information between parties as a **JSON object**. It's compact, URL-safe, and can be **digitally signed**.

> 🔑 Commonly used for **authentication** and **authorization** in web applications.

---

## 🧱 Structure of a JWT

A JWT consists of **three parts**, separated by dots (`.`):

```
xxxxx.yyyyy.zzzzz
```

| Part      | Name     | Purpose                                |
| --------- | -------- | -------------------------------------- |
| Header    | Metadata | Specifies the algorithm and token type |
| Payload   | Claims   | Data being sent (e.g., user ID)        |
| Signature | Security | Verifies token integrity               |

Example (decoded):

```json
Header:
{
  "alg": "HS256",
  "typ": "JWT"
}

Payload:
{
  "userId": "123",
  "role": "admin"
}

Signature:
HMACSHA256(base64url(header) + "." + base64url(payload), secret)
```

---

## 🔐 Why Use JWT?

* Stateless authentication (no need to store sessions on the server)
* Scalable (ideal for microservices, APIs)
* Works across domains
* Signed tokens ensure data integrity

---

## 🔧 Installing JWT in Node.js

```bash
npm install jsonwebtoken
```

---

## 🧪 JWT Example with Express

### `auth.js` - Authentication Setup

```js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const SECRET_KEY = 'your_jwt_secret';

// 🔑 Login and get a token
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Dummy validation
    if (username === 'admin' && password === '123') {
        const payload = { username };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// 🔐 Middleware to protect routes
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// ✅ Protected route
app.get('/dashboard', authenticateToken, (req, res) => {
    res.send(`Welcome, ${req.user.username}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## 📌 Token Format

When using JWT in headers:

```http
Authorization: Bearer <token>
```

---

## 🔁 Token Lifecycle

1. **Client logs in**
2. Server **validates credentials**
3. Server **signs and sends JWT**
4. Client stores token (usually in **localStorage** or **cookie**)
5. Client sends token in header on each request
6. Server **verifies token** using secret
7. Server processes request if valid

---

## 🚨 Security Tips

* Use strong secrets (`SECRET_KEY`) and store them in `.env` files
* Set short token expiration (`expiresIn`)
* Use HTTPS to prevent token interception
* For extra security, use **refresh tokens** and **blacklisting**

---

## ✅ Use Cases

| Use Case                | JWT Role                      |
| ----------------------- | ----------------------------- |
| Web authentication      | Login/logout sessions         |
| API protection          | Authenticated access          |
| Role-based access       | Include user roles in payload |
| Stateless microservices | No session storage needed     |

---

## 🧱 Alternatives

| Method             | Description                  |
| ------------------ | ---------------------------- |
| Sessions + Cookies | Stores session on server     |
| OAuth2             | Token-based but more complex |
| Passport.js        | Supports multiple strategies |

---

## 🧩 Summary

✅ JWT is a secure, compact, and stateless way to implement authentication in Node.js and Express.
It consists of a signed JSON object that can be verified, making it ideal for scalable and modern applications.
