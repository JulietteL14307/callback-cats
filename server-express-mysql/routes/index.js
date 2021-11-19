const express = require('express');
const app = express();
const router = express.Router();
const cors = require("cors");
const { response } = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


module.exports = router;