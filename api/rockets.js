// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const { Rocket } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/rockets');
    try {
        const allRockets = await Rocket.find({});

        res.json({ rockets: allRockets });
    } catch (error) {
        console.log('Error inside of /api/rockets');
        console.log(error);
        return res.status(400).json({ message: 'Rockets not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { name } = req.params;
    try {
        // look for rocket based on name
        const rocket = await Rocket.findByName(name);
        res.json({ rocket });
    } catch (error) {
        console.log('Error inside of /api/rockets/:name');
        console.log(error);
        return res.status(400).json({ message: 'Rocket not found. Try again...' });
    }
}

// GET api/rockets/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Rockets endpoint OK!'});
});

// GET -> /api/rockets/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/rockets/:name
router.get('/:name', passport.authenticate('jwt', { session: false }), show);


module.exports = router;