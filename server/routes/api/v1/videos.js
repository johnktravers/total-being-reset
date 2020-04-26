const express = require('express');
const router = express.Router();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../../knexfile')[environment];
const database = require('knex')(configuration);

router.get('/', (request, response) => {
  database('videos').select()
    .then((videos) => {
      response.status(200).json(videos);
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

module.exports = router;
