require('dotenv').config();

var createError = require('http-errors');
var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var app = express();

// SETUP APP
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// IMPORT ASSETS
app.use('/dist', express.static('./dist'));
app.use('/public', express.static(__dirname + '/public'));

// OPTIONS
const vueOptions = {
    root: 'dist',
    dotfiles: 'deny',
    headers: {
        'dina-timestamp': Date.now(),
        'my-xxx-header': true
    }
};

var swaggerOptions = {
  customSiteTitle: "CUBES",
  customfavIcon: "public/favicon.ico",
  customCss: '.swagger-ui .topbar { display: none }',
};

// ROUTES API
app.get('/api', (req, res) => {
  res.json({message: 'Welcome to Server'});
});

// SWAGGER UI FOR DOC API
app.use(
  '/doc',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument, swaggerOptions)
);

// USE INDEX.HTML OF PUBLIC FOLDER TO USE VUE BUNDLE
app.get('/', (req, resp) => {
  resp.sendFile('index.html', vueOptions, (err) => {
    if (!err) {
      console.log('Welcome on BACK OFFICE');
    }else {
      console.log('Failed to serve VUE');
    }
  })
});




// CATCH 404 ERRORS
app.use(function(req, res, next) {
  next(createError(404));
});

// OTHERS ERRORS HANDLER
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
