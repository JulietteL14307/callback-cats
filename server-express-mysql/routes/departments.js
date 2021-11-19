const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next){
    models.departments
    .findAll({})
    .then(department => res.json(department));
});

router.get('/grocery', function(req, res, next){
    models.departments
});

router.get('/electronics', function(req, res, next){
    models.departments
});

router.get('/clothing', function(req, res, next){
    models.departments
});

router.get('/home', function(req, res, next){
models.departments
});

router.get('/baby', function(req, res, next){
    models.departments
});

module.exports = router;