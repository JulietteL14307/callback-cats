const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next){
    models.products
    .findAll({})
    .then(product => res.json(product));
})

module.exports = router;