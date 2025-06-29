const jwt = require('jsonwebtoken');

const jwtPassword = "secret";

function signJwt(username, password){
    jwt.sign({
        username
    }, jwtPassword)
}

function verifyJwt(token){

}

function decodeJwt(token){
    
}