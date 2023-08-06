const express = require('express');
const router = express.Router();
const Model = require('../models/productModel');

router.post('/add', (req, res) =>{
    console.log(req.body);

    //saving a data to mongodb
    new Model(req.body).save()
    .then((result) => {
          res.json(result);
    })
    .catch((err) => {
          console.log(err);
          res.status(500).json(err);
  });

});


router.get('/getall', (req, res) =>{
    res.send('response from product getall');
});

router.get('/getbyid', (req, res) =>{
    res.send('response from product getbyid');
});

module.exports = router;