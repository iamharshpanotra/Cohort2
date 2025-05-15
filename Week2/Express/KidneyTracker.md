# Express.js API Explained - Kidney Tracker

## Introduction to Express.js

**Express.js** is a minimal and flexible Node.js web application framework that provides robust features for web and mobile applications. It allows you to:

* Handle HTTP requests (GET, POST, PUT, DELETE)
* Route URLs to appropriate functions
* Manage middleware for parsing requests, authentication, etc.

## Libraries Used

```js
const express = require("express");
```

This line imports the Express.js module so that we can use it to build our server.

## Application Setup

```js
const app = express();
```

This creates an Express application instance which we will use to define routes and middleware.

```js
app.use(express.json());
```

This middleware tells the application to parse incoming requests with JSON payloads. It makes `req.body` available in POST/PUT requests.

## Constant Data

```js
const users = [
  {
    name: "Modi",
    age: 74,
    kidneys: [{ healthy: false }]
  },
  {
    name: "Arun",
    age: 67,
    kidneys: [{ healthy: false }]
  }
];
```

Here, `users` is a constant array representing two user objects. Each user has an array of `kidneys` with a `healthy` boolean.

## Route Handlers

### GET Request

```js
app.get("/", function (req, res) {
```

* Triggered when a GET request is sent to the root path (`/`)
* Reads kidneys from the first user (`users[0]`)
* Counts total kidneys, healthy kidneys, and unhealthy kidneys
* Responds with a JSON object

### POST Request

```js
app.post("/", function (req, res) {
```

* Triggered on a POST request to the root path
* Reads the `isHealthy` value from the request body
* Adds a new kidney to the first user's list
* Responds with a success message

### PUT Request

```js
app.put("/", function (req, res) {
```

* Sets all kidneys of the first user to `healthy = true`
* Responds with an empty object `{}`

### DELETE Request

```js
app.delete("/", function(req, res){
```

* Checks if there are any unhealthy kidneys
* If yes, it filters and keeps only healthy ones
* If none, responds with status 411 and a message

### Helper Function

```js
function isThereAnyUnhealthyKidney(){
```

* Returns `true` if at least one kidney is unhealthy
* Used inside DELETE route logic

## Server Listening

```js
app.listen(3000);
```

This starts the server on port **3000**.

## Request-Response Flow

### Example: GET Request via Browser/Postman

1. You open Postman or your browser and send a GET request to `http://localhost:3000/`
2. The Express server receives the request and calls the function registered with `app.get()`
3. It calculates kidney statistics and sends a JSON response

### Example: POST Request

1. You send a POST request to `/` with body `{ "isHealthy": true }`
2. The middleware `express.json()` parses the body
3. The kidney is added to the array
4. Response `{ "msg": "Done!" }` is returned

## Constant vs. Dynamic

| Element             | Constant | Dynamic                          |
| ------------------- | -------- | -------------------------------- |
| Express Library     | ✅        |                                  |
| Application (`app`) | ✅        |                                  |
| Middleware          | ✅        |                                  |
| Routes              | ✅        |                                  |
| `users` Data        |          | ✅ (changes on POST, PUT, DELETE) |
| Request Body        |          | ✅                                |
| Response            |          | ✅                                |

## Summary

This Express.js app allows you to monitor and manage the health of kidneys for a user through various RESTful routes using HTTP methods:

* `GET` to retrieve data
* `POST` to add data
* `PUT` to update data
* `DELETE` to remove unhealthy data

You can test all these with **Postman** or browser (for GET only).

