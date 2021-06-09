// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const { Dragon } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/dragons');
    try {
        const allDragons = await Dragon.find({});

        res.json({ dragons: allDragons });
    } catch (error) {
        console.log('Error inside of /api/dragons');
        console.log(error);
        return res.status(400).json({ message: 'Dragons not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for dragon based on name
        const dragon = await Dragon.findByName(name);
        res.json({ dragon });
    } catch (error) {
        console.log('Error inside of /api/dragons/:id');
        console.log(error);
        return res.status(400).json({ message: 'Dragon not found. Try again...' });
    }
}

// GET api/dragons/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Dragons endpoint OK!'});
});

// GET -> /api/dragons/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/dragons/:name
router.get('/:name', passport.authenticate('jwt', { session: false }), show);


module.exports = router;