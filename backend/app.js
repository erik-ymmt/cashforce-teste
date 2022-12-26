const express = require('express');
const cors = require('cors');
// const router = require('./routers');

const app = express();

app.use(cors());
app.use(express.json());
// app.use('/home', router.home);

module.exports = app;
