const express = require('express');
const router = express.Router();
const models = require('../models');
var authService = require()

router.get('/', function(req, res, next){
    models.users
    .findAll({})
    .then(user => res.json(user));
})

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

router.get('/logout', function (req, res, next) {
    res.cookie('jwt', "", { expires: new Date(0) });
    res.send('Successfully logged out.');
});

router.get('/admin', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token).then(user => {
            if (user.Admin) {
                models.products.findAll()
                .then(productsFound => res.render( { products: productsFound }));
            } else {
                res.send('Unauthorized');
            }
        });
    }
});

router.get('/admin/editProduct/:id', function(req, res, next) {
    let product_id = parseInt(req.params.id);
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token).then(user => {
            if (user.Admin) {
                models.products
                .findOne({ where: { product_id: product_id }, raw: true })
                .then(user => res.render('editProduct', { product: product }));
            } else {
                res.send('Unauthorized');
            }
        });
    }
});

router.delete('/admin/editProduct/:id', function(req, res, next) {
    if (req.user && req.user.Admin) {
      let product_id = parseInt(req.params.id);
      models.products
      .update({ Deleted: true }, { where: {product_id: product_id}})
      .then(result => res.redirect('/users/admin'))
      } else {
        res.send("You are unauthorized");
      }
  });

module.exports = router;