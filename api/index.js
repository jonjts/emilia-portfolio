const express = require("express");
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors');

//const app = express(express.static(`${baseDir}`));
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors())
//app.use(express.static(`${baseDir}`));


app.get('/', async (req, res) => {
  res.send(`it's ok`)
});

module.exports = app