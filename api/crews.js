// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const { Crew } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/crews');
    try {
        const allCrews = await Crew.find({});

        res.json({ crews: allCrews });
    } catch (error) {
        console.log('Error inside of /api/crews');
        console.log(error);
        return res.status(400).json({ message: 'Crews not found. Please try again!!' });
    }
}

const show = async (req, res) => {
    const { name } = req.params;
    try {
        // look for crew based on name
        const crew = await Crew.findByName(name);
        res.json({ crew });
    } catch (error) {
        console.log('Error inside of /api/crews/:name');
        console.log(error);
        return res.status(400).json({ message: 'Crew not found. Try again...' });
    }
}

// GET api/crews/test (Public)
router.get('/test', (req, res) => {res.json({ msg: 'Crews endpoint OK!'});
});
// GET -> /api/crews/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/crews/:name
router.get('/:name', passport.authenticate('jwt', { session: false }), show);

module.exports = router;