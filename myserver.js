const express = require('express');
const bodyParser = require('body-parser');
let app = express();
const mongoose = require('mongoose');

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let db = require('./models');


app.get('/', (req, res) => {
  res.json({ message: "Hello World" });
});

let routes = require('./config/routes');
app.use(routes);

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});