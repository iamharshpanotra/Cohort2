### 🌐 What is HTTP Protocol?

**HTTP (HyperText Transfer Protocol)** is a **communication protocol** used for **transferring data** between a **client** (usually a web browser) and a **server** over the internet.

---

### 🧠 In Simple Words:

> HTTP is like the **language** that web browsers and servers use to talk to each other.

---

### 📦 Key Concepts

| Term         | Meaning                                                         |
| ------------ | --------------------------------------------------------------- |
| **Protocol** | A set of rules that define how data is exchanged                |
| **Client**   | The user-side software (e.g., Chrome, Firefox, mobile apps)     |
| **Server**   | The machine that stores and delivers content (e.g., HTML, JSON) |
| **Request**  | Sent by the client asking for data                              |
| **Response** | Sent by the server with the requested data or status info       |

---

### 🔁 How HTTP Works (Step by Step)

1. The **client** sends an HTTP **request** (like “GET /home”).
2. The **server** receives the request.
3. The server processes the request and sends an HTTP **response**.
4. The client reads the response and displays the result.

---

### 🔤 Example of HTTP Request/Response

#### Request:

```
GET /about HTTP/1.1
Host: example.com
```

#### Response:

```
HTTP/1.1 200 OK
Content-Type: text/html

<html><body>About Page</body></html>
```

---

### 📚 Common HTTP Methods

| Method | Purpose              |
| ------ | -------------------- |
| GET    | Retrieve data        |
| POST   | Send data to server  |
| PUT    | Update existing data |
| DELETE | Remove data          |

---

### 📡 Versions of HTTP

| Version       | Year | Features                                     |
| ------------- | ---- | -------------------------------------------- |
| HTTP/1.0      | 1996 | Simple, no persistent connection             |
| HTTP/1.1      | 1997 | Persistent connections, chunked transfer     |
| HTTP/2        | 2015 | Faster, supports multiplexing, binary format |
| HTTP/3 (QUIC) | 2022 | Even faster, uses UDP instead of TCP         |

---

### ✅ Summary

* **HTTP** is the backbone of the **web**.
* It defines **how browsers and servers communicate**.
* It works using a **request-response** model.
* It powers everything from websites to APIs and apps.




# 📘 Key Components of HTTP Protocol

The **HTTP protocol** uses several parts to send and receive data between a **client** (like a web browser) and a **server**.

---

## 1. 📡 Protocol

### What is it?
- A **set of rules** that define how data is transferred.
- In this case: **HTTP** (or **HTTPS** for secure communication).

### Examples:
- `http://` — Unsecured protocol
- `https://` — Secured using SSL/TLS encryption

---

## 2. 🌍 Address (URL)

### What is it?
- The **location** of the resource you want to access.

### Structure:
```

protocol://domain\:port/path?query#fragment

```

### Example:
```

[https://www.example.com:443/products?id=15](https://www.example.com:443/products?id=15)

```

### Components:
| Part            | Description                           |
|-----------------|---------------------------------------|
| `https`         | Protocol                              |
| `www.example.com`| Domain (address)                     |
| `:443`          | Port (optional, 443 is default for HTTPS) |
| `/products`     | Path (route)                          |
| `?id=15`        | Query string                          |

---

## 3. 🛣 Route (Path)

### What is it?
- The **specific endpoint** or **resource** being requested on the server.

### Example:
- `/home`
- `/api/users/1`

> In `https://example.com/api/users/1`, the route is `/api/users/1`.

---

## 4. 📬 Headers

### What is it?
- Metadata sent **with the request or response**.
- Used to give **extra information** about the communication.

### Common Request Headers:
| Header             | Meaning                                      |
|--------------------|----------------------------------------------|
| `Host`             | Domain being requested                       |
| `User-Agent`       | Browser or client info                       |
| `Content-Type`     | Type of data being sent (e.g., `application/json`) |
| `Authorization`    | Authentication credentials                   |

### Common Response Headers:
| Header             | Meaning                                      |
|--------------------|----------------------------------------------|
| `Content-Type`     | Type of data returned (HTML, JSON, etc.)    |
| `Set-Cookie`       | Sends cookies to be stored on client        |
| `Cache-Control`    | Instructions on how to cache the response   |

---

## 5. 📩 Method

### What is it?
- Specifies the **type of action** the client wants the server to perform.

### Common HTTP Methods:
| Method | Purpose                     | Example Use Case               |
|--------|-----------------------------|-------------------------------|
| GET    | Fetch data                  | Get a list of products        |
| POST   | Submit data                 | Submit a form or create a user|
| PUT    | Update data                 | Update a user profile         |
| DELETE | Remove data                 | Delete a user account         |
| PATCH  | Partially update data       | Update just one field         |

---

## ✅ Summary

| Component | Role in HTTP Request/Response                     |
|-----------|---------------------------------------------------|
| **Protocol** | Defines the communication standard (HTTP/HTTPS) |
| **Address**  | Full URL where the request is sent              |
| **Route**    | The specific path to a resource on the server   |
| **Headers**  | Extra information about request/response        |
| **Method**   | Defines the type of operation (GET, POST, etc.) |


URL Breakdown:
For https://blog.example.com:443/products/item1?id=123#description:

Scheme: https
Subdomain: blog
Domain: example
TLD: .com
Port: 443 (explicitly stated, though typically implied for HTTPS)
Path: /products/item1
Query String: ?id=123
Fragment: #description




Things HTTP Server Side needs

Response(Headers)
Response(Body)
Status Codes


At Client

https://chat.openai.com/backend-api/conversation

 -> Protocol -> https://
 -> URL -> chat.openai.com
-> Route -> backend-api/conversation 


Things that happen in browser after request is fired
1. Browser parses the URL
2. Does a DNS LookUp (converts google.com to an IP)
3. Establishes a connection to the IP (does handshake...)

What is DNS(Domain Name Server) resolution? 
URLs are just like contacts in your phone
In the end, they map to an IP
If you ever buy a URL of your own, you will need to point it to the IP of your server. 


Common methods you can send to your backend Server
1. GET 
2. POST
3. PUT 
4. DELETE


Common status codes the backedn responds with
1. 200 - Everything is OK
2. 404 - Page/route not found
3. 403 - Authentication Issues
4. 500 - Internal Server Error