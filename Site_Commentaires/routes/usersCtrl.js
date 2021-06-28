var bcrypt = require('bcrypt');
var mysql = require('mysql');
const jwt = require('njwt');
const { response } = require('express');
var token = null;
const JWT_SIGN_SECRET = process.env.SECRET;
require('dotenv').config();

var connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE
});

connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ...");
    } else {
        console.log("Error connecting database ...");
    }
});

module.exports = {
    home: function(req, res) {
        res.sendFile(__dirname + '/html/home.html');
    },
    liste: function(req, res) {
        console.log('in');
    }
}