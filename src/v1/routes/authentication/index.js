"use strict"

const express = require('express');
const AuthController = require('../../controller/auth.controller');
const asyncHandle = require('../../utils/asyncHandle');
const router = express.Router();

// router.get('/', (req, res, next) => {
//     res.send({'messsage': "Authentication API is working!"})
// });

router.post('/register', asyncHandle(AuthController.register));
router.post('/login', asyncHandle(AuthController.login));


module.exports = router;