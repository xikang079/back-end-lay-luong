"use strict"

const express = require('express');
const router = express.Router();

router.use('/shopping', require('./shopping'));
router.use('/auth', require('./authentication'));
router.use('/product', require('./product'));
router.use('/register', require('./register'));
router.use('/login', require('./login'));
router.use('/user', require('./user'));


module.exports = router;