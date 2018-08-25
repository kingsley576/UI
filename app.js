const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const pg = require ('pg');

const questionVersion1 = require('./routes/question');
//const auth = require('./routes/user');

//set view engine
//app.set('view engine', ejs);
//app.set('views', __dirname + '/views');

//set public folder
//app.use(express.static(path.join(__dirname, 'public')));

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
//app.use('/auth/signup', auth);
//app.use('/auth/login', auth);
app.use('/api/v1/questions', questionVersion1);

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
