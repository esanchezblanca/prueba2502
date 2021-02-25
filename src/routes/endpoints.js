'use strict'
const router = require('express').Router();

const { History } = require('../db');

router.post('/checkSum', async (req, res)=>{


        const param1 = parseInt(req.body.param1);
        const param2 = parseInt(req.body.param2);
    console.log(param1);
    console.log(param2)


        if((typeof param1 == 'number') && (typeof param2 == 'number')){
            const sum = param1+param2
            await History.create({value: sum});
            res.json({message: 'El resultado es:'+ (sum) });
         }else{
            res.json({message: 'No se ha podido sumar '});
         }
        
});

router.get('/getHistories',async(req,res)=>{
        const history = await History.findAll();
        res.json(history);
    });


module.exports = router;
