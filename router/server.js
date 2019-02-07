const express = require('express');
require('dotenv').config();

const app = express();

app.use('/bots', require('./routes/bots.js'))

app.listen(process.env.PORT,' () => console.log('listening on PORT $'))