const express = require('express');
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const videosRouter = require('./routes/api/v1/videos');
const app = express();

app.locals.title = 'Total Being Reset';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/videos', videosRouter);

module.exports = app;
