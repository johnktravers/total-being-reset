const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const videosRouter = require('./routes/api/v1/videos');
const app = express();

app.locals.title = 'Total Being Reset';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/v1/videos', videosRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'))
  })
}

module.exports = app;
