const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');

if (process.env.NODE_ENV != 'production') {
  require('dotenv').config();
}

const app = express();

const router = require('./routes/index');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.use(errorHandler);

module.exports = app;