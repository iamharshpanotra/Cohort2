const jwt = require("jsonwebtoken");


const value = {
    name: "Bhogle",
    accountNo: 267035
}

// jwt

// this token is being generated using this secret, so the token can only be verified using this secret. 
// sign function to be used to generate Token
const token = jwt.sign(value, "secret");
console.log(token);

// token here - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmhvZ2xlIiwiYWNjb3VudE5vIjoyNjcwMzUsImlhdCI6MTc1MDk2NjIwNH0.9TmwiAVcX7ueXwMLcQiadvNLQo84i3gYRfSckCZtPA4