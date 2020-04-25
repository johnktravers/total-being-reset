# Total Being Reset

## Description

Total Being Reset is a web application run by Dr. Christine O'Brien, the Director of Whole Health at the Cheyenne VA Medical Center. This application is a means of dispersing video education and small practices that, in combination, can provide a way to reset the mind, body, and spirit.

This application is deployed on Heroku [here](https://totalbeingreset.herokuapp.com). Feel free to create an account and explore the videos.

For instructions for setting up the Node.js and Express backend API and running tests, see [this README](server/README.md).

For instructions on navigating the React frontend of the application and running tests, see [this README](client/README.md) instead.

## Local Setup

- Clone down repo using `git clone git@github.com:johnktravers/total-being-reset.git`
- Navigate into the client directory using `cd total-being-reset/client`
- Run `npm install`
- Navigate into the server directory using `cd ../server`
- Run `npm install`
- Create development and test databases
```
psql
CREATE DATABASE total_being_reset_dev;
CREATE DATABASE total_being_reset_test;
\q
```
- Run migrations for development database using `knex migrate:latest`
- Run migrations for test database using `knex migrate:latest --env test`
- Run both servers locally by running `npm run dev`

### Environment Variables

The following environment variables are required in a `.env` file in the server directory.
- **YOUTUBE_API_KEY** set to your registered YouTube Developer API Key

## Focus Areas

- Creation of a fullstack application in a monorepo format
- Utilization of React and React Hooks

## Technologies and Frameworks Used

- Node.js
- Express
- React
- Knex
- PostgreSQL
- Jest
- Enzyme
