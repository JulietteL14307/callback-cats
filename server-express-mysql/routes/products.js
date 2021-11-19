const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next){
    models.products
    .findAll({})
    .then(product => res.json(product));
});


router.get('/admin', function(req, res, next){
    models.products
    .findAll({})
    .then(product => res.json(product));
});

router.get('/admin:id', function (req, res, next) {
    models.products
    .findByPk(parseInt(req.params.id))
    .then(productsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(productsFound));
    })
});

router.post('/admin', function(req, res, next) {
    models.products
    .findOrCreate({
        where: {
            title: req.body.title,
            description: req.body.description,
            quantity: req.body.quantity,
            department_id: req.body.department_id,
            inStock: req.body.inStock
        },
    })
    .spread(function(result, created) {
        if (created) {
            res.send('Product created!');
        } else {
            res.send('This product already exists');
        }
    });
  });

  router.put('/admin/:id', function(req, res, next) {
      let productId = parseInt(req.params.id);
      models.products
      .update({ 
            title: req.body.title,
            description: req.body.description,
            quantity: req.body.quantity,
            department_id: req.body.department_id,
            inStock: req.body.inStock
         },
         {where: { product_id: productId}, raw: true})
      .then(res.send("Product Updated"))
      .catch(err => {
          res.status(400);
          res.send("There was a problem updating the product.");
      });
  });

  router.delete('/admin/:id', function (req, res, next) {
      let productId = parseInt(req.params.id);
      models.products
      .destroy({
          where: { product_id: productId }
      })
      .then(res.send("Product Deleted"))
      .catch(err => {
          res.status(400);
          res.send("There was a problem deleting the product. Check the information input again.");
      });
  });

module.exports = router;