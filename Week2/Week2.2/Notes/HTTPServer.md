An **HTTP server** is a **software application or hardware device** that serves content to clients (usually web browsers) over the **HTTP (Hypertext Transfer Protocol)**.

---

### 🧠 In Simple Terms:

An HTTP server **listens** for requests on a specific **port** (typically `80` for HTTP or `443` for HTTPS) and **responds** with data like HTML, JSON, images, or files.

---

### 📦 Components of an HTTP Server:

| Component            | Description                                                                 |
| -------------------- | --------------------------------------------------------------------------- |
| **Request Listener** | Listens for incoming HTTP requests (e.g., GET, POST).                       |
| **Router**           | Determines what to do based on the requested URL or method.                 |
| **Response Handler** | Sends back data (HTML page, JSON, etc.) with status codes (e.g., 200, 404). |
| **Port**             | A number like `3000` or `80` that identifies the channel to listen on.      |

---

### 📈 Common Use Cases:

* Serving websites (HTML/CSS/JS)
* Powering APIs (like REST or GraphQL)
* Handling user input (form submissions)
* Returning data in different formats (JSON, XML)

---

### 📡 How It Works – Step by Step:

1. **Client** (like a browser) sends an HTTP request (e.g., `GET /about.html`).
2. **HTTP server** receives it via a specified port.
3. The server processes the request and generates a response.
4. The server sends back an **HTTP response** (with status, headers, body).
5. The client renders or processes the response.

---

### 💡 Examples:

* **Apache** and **Nginx** – Traditional, powerful web servers.
* **Express.js** (in Node.js) – Lightweight, programmable HTTP server.
* **Bun** – Modern server runtime with built-in HTTP handling.

---

### 🔁 HTTP Request/Response Example:

```
GET /hello HTTP/1.1
Host: example.com

Response:
HTTP/1.1 200 OK
Content-Type: text/plain

Hello World!
```
# Creating a Simple HTTP Server

---

## 1. Using Node.js

### 🛠 Prerequisites
- Node.js installed (`https://nodejs.org`)
- Run using: `node server.js`

### 📄 server.js

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js Server!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
````

---

## 2. Using Bun

### 🛠 Prerequisites

* Bun installed (`https://bun.sh`)
* Run using: `bun server.ts`

### 📄 server.ts

```ts
// Bun HTTP Server
const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello from Bun Server!", {
      headers: { "Content-Type": "text/plain" },
    });
  },
});

console.log(`Bun server running at http://localhost:${server.port}`);
```

---

## 💡 Differences

| Feature     | Node.js                         | Bun                          |
| ----------- | ------------------------------- | ---------------------------- |
| Startup     | Slower                          | Very Fast                    |
| API Style   | Callback-based (`createServer`) | Modern `fetch`-style handler |
| File Format | `.js`                           | `.ts` / `.js` / `.jsx`       |
| Run Command | `node server.js`                | `bun server.ts`              |
| Performance | Good                            | Excellent                    |

---

## ✅ Summary

* Node.js is widely supported and stable for production.
* Bun is fast and modern, ideal for rapid prototyping and performance-sensitive apps.


HTTP Protocol: To connect frontend with backend. 

HTTP Server? 
Some code that follows the HTTP Protocol and is able to communicate with clients (browsers/mobile apps). 

Think of it to be similar to the call app in your phone which lets you communicate with your friends. 


Summary 
The client throwing some information at a server.
Server doing something with that information
Server responding back with the final result

Think of them as function, where
1. Arguments are something the client sends
2. Rather than calling a function using its name, the client uses a URL
3. Rather than the function body, the server does something with the request
4. Rather than the function returning a value, the server responds with some data. 