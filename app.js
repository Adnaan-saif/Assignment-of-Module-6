const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');


const app = express( );

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(mongoSanitize());
app.use(helmet());
app.use(hpp());

module.exports = app;