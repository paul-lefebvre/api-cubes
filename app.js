import { createRequire } from "module";
import { fileURLToPath } from 'url';
import path from 'path';
const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
require('dotenv').config();
import createError from 'http-errors';
import express from 'express';

import logger from 'morgan';
import routes from './src/api/routes/index.js';

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerJson = require('./swagger.json');
const app = express();

// SETUP APP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));


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
  customfavIcon: "/public/favicon.ico",
  customCss: '.swagger-ui .topbar { display: none }',
};
const SwaggerDoc = swaggerJsdoc(swaggerJson);

//IMPORT ROUTES API
routes(app);

// SWAGGER UI FOR DOC API
app.use(
  '/doc',
  swaggerUi.serve, 
  swaggerUi.setup(SwaggerDoc, swaggerOptions)
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

export default app;
