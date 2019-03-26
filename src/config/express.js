const express = require('express');
const cors = require('cors');
const routes = require('../api/routes');
const path = require('path');

const error = require('../api/middlewares/error');

/** 
 * Express instance
 * @public
*/
const app = express();

// serving images in uploads folder
app.use('/static', express.static('uploads'));
app.use('/tmp', express.static('templates'));

// parse body params and attach them to req.body
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors());

// mount api v1 routes
app.use('/v1',routes);

// error handler, send stacktrace only during development
app.use(error.handler);

app.use(error.notFound);

module.exports = app;