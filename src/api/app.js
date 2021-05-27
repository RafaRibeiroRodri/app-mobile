const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

const rotaDados = require('./routes/routes');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.use('/', rotaDados);


module.exports = app;
