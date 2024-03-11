"use strict"

const express = require('express');
const router = express.Router();
const fs = require('node:fs');
const bcrypt = require('bcrypt');

router.post('/', async (req, res, next) => { 
    const { username, password } = req.body;

    fs.readFile('user.txt', async (err, data) => { 
        if (err) {
            return res.status(500).send({ mess: 'Error reading data' });
        }

        const userData = JSON.parse(data);

        if (username !== userData.username) {
            return res.status(400).send({ mess: 'Username not found' });
        }

        try {
            const match = await bcrypt.compare(password, userData.hashedPassword);
            if (match) {
                res.send({ message: "Login Successful!" });
            } else {
                res.status(400).send({ mess: 'Password does not match' });
            }
        } catch (error) {
            return res.status(500).send({ mess: 'Error comparing password' });
        }
    });
});

module.exports = router;
