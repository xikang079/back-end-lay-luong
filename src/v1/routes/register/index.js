"use strict"

const fs = require('node:fs');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post('/', async  (req, res, next)=>{
    const { username,password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {username,hashedPassword};
        
        fs.writeFile('user.txt', JSON.stringify(userData), (err)=> {
            if(err){
                return res.status(500).send({mess: 'Error save data',});
            }
            console.log("Register success!");
            res.send({mess: 'Register success', userData});
        });

    } catch (error) {
        console.log("Error register", error);
        res.status(500).send({mess: 'Error register', error});
    }
})

module.exports = router;

