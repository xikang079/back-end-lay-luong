const fs = require('node:fs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    var name = fs.readFileSync('product.txt');

    res.send({'message': JSON.parse(name)})
})


module.exports = router;