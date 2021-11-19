const express = require('express');
const router = express.Router();
const models = require('../models');
var passport = require('passport');
const auth = require("../services/auth");

router.get('/', function(req, res, next){
    models.users
    .findAll({})
    .then(user => res.json(user));
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});

router.post('/signup', function(req, res, next) {
    models.users
    .findOrCreate({
        where: {
            Username: req.body.username
        },
        defaults: {
            Password: auth.hashPassword(req.body.password)
        }
    })
    .spread(function(result, created) {
        if (created) {
            res.send('User created!');
            res.redirect('/users/login');
        } else {
            res.send('This user already exists');
        }
    });
});

router.get('/login', function(req, res, next) {
    res.render('login');
  });

  router.post('/login', function (req, res, next) {
    models.users.findOne({
      where: {
        Username: req.body.username
      }
    }).then(user => {
      if (!user) {
        console.log('User not found')
        return res.status(401).json({
          message: "Login Failed"
        });
      } else {
        let passwordMatch = auth.comparePasswords(req.body.password, user.Password);
        if (passwordMatch) {
          let token = auth.signUser(user);
          res.cookie('jwt', token);
          res.send(true);
         // res.redirect('/profile/:id');
        } else {
          console.log('Wrong password');
          res.send('Wrong password');
        }
      }
    });
  });

router.get('/dash', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
        auth.verifyUser(token)
        .then(user => {
            if (user) {
               res.send('Hello user!');     
            } else {
                res.status(401);
                res.send('Invalid authentication');
            }
        });
    } else {
        res.status(410);
        res.send("Must be logged in.");
    }
});

router.get('/logout', function (req, res, next) {
    res.cookie('jwt', "", { expires: new Date(0) });
    res.send('Successfully logged out.');
});

router.get('/admin', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
        auth.verifyUser(token).then(user => {
            if (user.Admin) {
                models.products.findAll()
                .then(productsFound => res.render( { products: productsFound }));
            } else {
                res.send('Unauthorized');
            }
        });
    }
});

module.exports = router;