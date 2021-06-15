// Imports
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require('passport');
const PORT = process.env.PORT || 8080;

// API
const astros = require('./api/astros');
const crews = require('./api/crews')
const dragons = require('./api/dragons');
const rockets = require('./api/rockets');
const users = require('./api/users');

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Initialize Passport and use config file
app.use(passport.initialize());
require('./config/passport')(passport);

// Home route
app.get('/', (req, res) => {
    res.send("this is a test")
});
// Routes
app.use('/api/astros', astros);
app.use('/api/crews', crews);
app.use('/api/dragons', dragons);
app.use('/api/rockets', rockets);
app.use('/api/users', users);

app.get('/*', (req, res) => {
    res.status(404).json({ message: 'Data not found' });
});

// app.set("port", process.env.PORT || 8080);
app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`);
    console.log(`http://localhost:${app.get("port")}`)
});