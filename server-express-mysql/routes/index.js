const express = require('express');
const router = express.Router();

router.get('/index', function(req, res, next){
    res.send("INDEX");
})

module.exports = router;