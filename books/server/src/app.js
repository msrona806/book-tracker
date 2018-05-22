//******DEPENDENCIES******
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//build an express server, basic web app
const app = express();
//enables morgan, a log generator
app.use(morgan('combined'));
//parses any json requests sent in 
app.use(bodyParser.json());
//cors is used to allow any client to access app. Allows server to be hosted on a different domain.
app.use(cors());

// ENDPOINT
app.get('/status', (req, res) => {
  res.send({
    message: "hello world"
  });
});
//starts express server
app.listen(process.env.PORT || 8081);