const fs = require('node:fs');
const express = require('express');
const router = express.Router();

router.get('/', async  (req, res, next)=>{
    // res.send({name : req.query.name, id : req.query.id});
    const { id,name } = req.query;

    console.log(req.query);

    fs.writeFile('product.txt', JSON.stringify(req.query), (err)=> {
        if(err){
            console.log(err);
        }
        console.log("success fs");
    });

    res.send({mess: 'success',
    metaData: {id, name},
    })
})

router.post('/', (req, res, next)=>{
    console.log(req.body);

    res.send({
        mess: 'success',
        metaData: req.body,
    })
})






module.exports = router;