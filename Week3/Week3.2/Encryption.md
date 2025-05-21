# 🔐 Encryption in JavaScript, Express, and Node.js

---

## 🧾 What is Encryption?

**Encryption** is the process of converting readable data (plaintext) into unreadable form (ciphertext) using a key, so that only authorized parties can read it by decrypting it with a key.

> 🔁 **Two-way** process:
> **Plaintext → Ciphertext (encrypt)**
> **Ciphertext → Plaintext (decrypt)**

---

## 🔍 Why Use Encryption?

* To **secure sensitive data** like:

  * Credit card info
  * API keys
  * Personal user data (emails, address)
* To **safely transmit data** over insecure networks (e.g., HTTP, public Wi-Fi)
* To comply with privacy laws (e.g., GDPR, HIPAA)

---

## 🔐 Symmetric vs Asymmetric Encryption

| Type           | Description                               | Example Use                         |
| -------------- | ----------------------------------------- | ----------------------------------- |
| **Symmetric**  | Same key is used to encrypt and decrypt   | Encrypting local files              |
| **Asymmetric** | Public key encrypts, private key decrypts | JWT signing, HTTPS, secure messages |

---

## 🧪 Encryption Using `crypto` Module

Node.js provides a built-in module called `crypto`.

### 🔧 Example (Symmetric Encryption using AES)

```js
const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);        // 🔐 32-byte key
const iv = crypto.randomBytes(16);         // 🔄 Initialization Vector

// 🔐 Encrypt
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return { encryptedData: encrypted, iv: iv.toString('hex') };
}

// 🔓 Decrypt
function decrypt(encryptedData, ivHex) {
    const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(ivHex, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

// 🚀 Example
const text = 'Hello World!';
const encrypted = encrypt(text);
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted.encryptedData, encrypted.iv);
console.log('Decrypted:', decrypted);
```

---

## 🔐 Real-World Use Cases

* **HTTPS**: Encrypts HTTP traffic using TLS (asymmetric + symmetric)
* **JWT with RSA**: Public-private key pairs for token signature verification
* **Encrypted Cookies or Sessions**: Keep sensitive data hidden from client view

---

## 🧱 Best Practices

* Never hard-code encryption keys—store in `.env` or secure vaults.
* Use secure algorithms (`aes-256-cbc`, `rsa`, `ed25519`)
* Keep IV (Initialization Vector) unique per encryption
* Use key derivation functions (e.g., PBKDF2, scrypt) for password-based keys

---

## ❗ Hashing vs Encryption

| Feature    | Hashing           | Encryption                     |
| ---------- | ----------------- | ------------------------------ |
| Direction  | One-way           | Two-way                        |
| Use-case   | Store passwords   | Secure transmission or storage |
| Output     | Fixed-length hash | Variable-length ciphertext     |
| Reversible | ❌ No              | ✅ Yes                          |

---

## ✅ Conclusion

Encryption is essential for protecting sensitive data during storage and transmission. Unlike hashing, it allows you to **reverse** data when needed—using the proper key. Use Node.js’s `crypto` module for secure, efficient encryption in your Express apps.