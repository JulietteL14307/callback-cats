var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var models = require("./models");
var passport = require('passport');
var cors = require("cors");
var session = require('express-session');

var indexRouter = require("./routes/index");
var departmentsRouter = require("./routes/departments");
var productsRouter = require("./routes/products");
var usersRouter = require("./routes/users");

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(session({ secret: 'perilous journey' }));
app.use(passport.initialize());  
app.use(passport.session());

app.use("/", indexRouter);
app.use("/departments", departmentsRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

models.sequelize.sync().then(function() {
  console.log("DB Sync'd up");
});

module.exports = app;
