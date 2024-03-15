"use strict"

const express = require('express');
const router = express.Router();    
const UserController = require('../../controller/user.controller');
const asyncHandle = require('../../utils/asyncHandle');

router.get('/', asyncHandle(UserController.getAllUsers));
router.get('/:username', asyncHandle(UserController.getUserByName));

module.exports = router;