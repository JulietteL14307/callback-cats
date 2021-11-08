const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
var models = require('../models');
var authService = require()

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
            Password: authService.hashPassword(req.body.password)
        }
    })
    .spread(function(result, created) {
        if (created) {
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
                message: "Login failed."
            });
        } else {
            let passwordMatch = authService.comparePasswords(req.body.password, user.Password);
            if (passwordMatch) {
                let token = authService.signUser(user);
                res.cookie('jwt', token);
                res.redirect('home');
            } else {
                console.log('Incorrect username or password.');
                res.send('Incorrect username or password');
            }
        }
    });
});

router.get('/home', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token)
        .then(user => {
            if (user) {
               models.users
               .findAll({
                   where: { AdminId: user.AdminId }
               })
               .then(result => {
                   res.render('home', {
                       user: result[0]
                   })
               });     
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

module.exports = router;