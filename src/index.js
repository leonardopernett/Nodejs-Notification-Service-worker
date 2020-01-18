require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

//setting
app.set('port', process.env.PORT || 3000 )

//middlweare 
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//router
app.use(require('./routes/index.js'))

//static file
app.use(express.static(path.join(__dirname,'public')))

//listen
app.listen(app.get('port'), ()=>console.log('server on port 3000'));