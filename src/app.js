const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/task');

const app = express();
dotenv.config();

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/actonic'
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
