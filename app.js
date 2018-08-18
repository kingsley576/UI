const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexVersion1 = require('./routes/index');
const questionVersion1 = require('./routes/question');
const answer = require('./routes/answer');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handling CORS Errors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Method', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

// Routes for handling requests
app.use('/index/v1', indexVersion1);
app.use('/question/v1', questionVersion1);
app.use('/answer', answer);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
