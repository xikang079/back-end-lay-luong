"use strict"

const express = require('express');
const router = express.Router();    
const fs = require('node:fs');
const bcrypt = require('bcrypt');

router.put('/edit', async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = { username, hashedPassword };

        fs.writeFile('user.txt', JSON.stringify(userData), (err) => {
            if (err) {
                return res.status(500).send({ mess: 'Error save data', });
            }
            console.log("Edit success!");
            res.send({ mess: 'Edit success', userData });
        });

    } catch (error) {
        console.log("Error edit", error);
        res.status(500).send({ mess: 'Error edit', error });
    }
});

router.delete('/delete', async (req, res, next) => {
    fs.unlink('user.txt', (err) => {
        if (err) {
            return res.status(500).send({ mess: 'Error delete data', });
        }
        console.log("Delete success!");
        res.send({ mess: 'Delete success' });
    });
});

module.exports = router;