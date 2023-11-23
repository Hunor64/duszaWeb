const path = require('path');
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 80;
/*
MIÉRT NEM MEGY????
ÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁÁ
const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'users',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});*/

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/login', function (request, response) {
  response.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/landing.html'));
});

app.get('/register', function (request, response) {
  response.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/game', function (request, response) {
  response.sendFile(path.join(__dirname + '/game.html'));
});

app.get('/tanar', function (request, response) {
  response.sendFile(path.join(__dirname + '/tanarPanel.html'));
});

app.get('/editusers', function (request, response) {
  response.sendFile(path.join(__dirname + '/userEdit.html'));
});

app.get('/pdf', function (request, response) {
  response.sendFile(path.join(__dirname + '/Dusza-WEB'));
});

app.get('/info', function (request, response) {
  response.sendFile(path.join(__dirname + '/jatekInfo.html'));
});

app.get('/zsuri', function (request, response) {
  response.sendFile(path.join(__dirname + '/zsuri.html'));
});

app.get('/logo.JPG', function (request, response) {
  response.sendFile(path.join(__dirname + '/logo.JPG'));
});

app.get('/szokirakos1.jpg', function (request, response) {
  response.sendFile(path.join(__dirname + '/szokirakos1.jpg'));
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
