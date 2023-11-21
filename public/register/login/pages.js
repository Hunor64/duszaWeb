const express = require('express');
const User = require('../core/user');
const router = express.Router();

//create an object from the class user in the file core/user.js
const user = new User();