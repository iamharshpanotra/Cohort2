# 🔐 Hashing in JavaScript, Express, and Node.js

---

## 🧾 What is Hashing?

**Hashing** is the process of converting data (like a password) into a fixed-size string of characters using a mathematical algorithm.
Unlike encryption, **hashing is one-way**—you can’t reverse a hash to get the original input.

> ✅ Ideal for storing passwords securely in databases.

---

## 🔍 Why Hash Passwords?

Storing plain-text passwords is a huge security risk. If your database is compromised:

* Plain-text passwords = exposed users
* Hashed passwords = attackers can’t directly use them

**Hashing ensures**:

* User passwords are protected
* Even the developer/admin can’t see the original passwords

---

## 🔐 Hashing with `bcryptjs`

### 🔧 Step-by-Step Example

```bash
npm install bcryptjs
```

### 🧪 Sample Code

```js
const bcrypt = require('bcryptjs');

const password = 'mySecret123';

// 🔐 Hashing a password
bcrypt.hash(password, 10, (err, hash) => {
    console.log('Hashed password:', hash);

    // ✅ Verifying a password
    bcrypt.compare('mySecret123', hash, (err, result) => {
        if (result) {
            console.log('Password matched!');
        } else {
            console.log('Invalid password');
        }
    });
});
```

---

## 🔁 `bcrypt.hash()` vs `bcrypt.compare()`

| Function           | Purpose                                |
| ------------------ | -------------------------------------- |
| `bcrypt.hash()`    | Converts password into a hashed string |
| `bcrypt.compare()` | Verifies if a password matches a hash  |

> The number `10` in `hash(password, 10)` is the **salt rounds**, which controls the hashing complexity. More rounds = slower = more secure.

---

## ⚠️ Hashing ≠ Encryption

| Feature   | Hashing           | Encryption                      |
| --------- | ----------------- | ------------------------------- |
| Direction | One-way           | Two-way                         |
| Use-case  | Passwords         | Sensitive data (e.g., messages) |
| Output    | Fixed-length hash | Encrypted readable data         |

---

## ✅ Best Practices

* Always hash passwords **before storing them** in the database.
* Use a strong algorithm like `bcrypt`, `argon2`, or `scrypt`.
* Never log or expose hashed passwords in the frontend.
* Avoid creating your own hash function—use trusted libraries.

---

## 📌 Conclusion

Hashing is a critical part of securing user authentication. It makes stored passwords unreadable and unusable even if an attacker gains access to your database. In Node.js, the `bcryptjs` library is a widely-used and secure way to implement hashing.
