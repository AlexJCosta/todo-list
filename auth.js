const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;

const users = [{ 
    _id: 1, 
    username: "adm", 
    password: "$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW",
    email: "contato@luiztools.com.br"
}];

module.exports = function(passport){
   //configuraremos o passport aqui
}