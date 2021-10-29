const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next){
    models.departments
    .findAll({})
    .then(department => res.json(department));
})

module.exports = router;