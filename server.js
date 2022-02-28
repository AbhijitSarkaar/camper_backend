const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./routes/bootcamps');
dotenv.config();

const app = express();
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(
    PORT,
    console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
