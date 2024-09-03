"use strict"

const express = require('express');
const router = express.Router();

router.use('/auths', require('./auths'));
router.use('/crabTypes', require('./crabTypes'));



module.exports = router;