const express = require('express');
const database = require('./Database/database');
const bodyParser = require('body-parser'); 
const cookieparser = require('cookie-parser');
const ejs = require('ejs');
const session = require('express-session')
 require('dotenv').config();
const cors = require('cors');
const app = express();
app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.options('*',cors());
app.use(express.json());
app.use('/public',express.static('public'));
app.use(session({ 
  secret: 'dsff',
  saveUninitialized:true,
  resaveL:false,
  cookie:{secure:false}
}));

// routers
const landing = require('./Routes/landing');
const consultation  = require('./Routes/consultation');
const doctors = require('./Routes/selecteddoctor');
const login = require('./Routes/login')
const signup = require('./Routes/signup')
//Home page rendering
app.use('/landing',landing);
//Consultation page rendering
app.use('/consultation',consultation);
//Doctors info page rendering
app.use('/doctors',doctors)
//login page rendering
app.use('/login',login)
//signup page rendering
app.use('/signup',signup)
app.listen(3300, async() => {
    console.log(`listening on http://localhost:${3300}`);
});
