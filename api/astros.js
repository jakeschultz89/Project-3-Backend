// Imports
require('dotenv').config();
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Models
const { Astro } = require('../models');

// Controllers
const index = async (req, res) => {
    console.log('inside of /api/astros');
    try {
        const allAstros = await Astro.find({});

        res.json({ astros: allAstros });
    } catch (error) {
        console.log('Error inside of /api/astros');
        console.log(error);
        return res.status(400).json({ message: 'Astros not found. Please try again!!' });
    }
}

const show = async (req, res) => {
    const { name } = req.params;
    try {
        // look for astro based on name
        const astro = await Astro.findByName(name);
        res.json({ astro });
    } catch (error) {
        console.log('Error inside of /api/astros/:name');
        console.log(error);
        return res.status(400).json({ message: 'Astro not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { name, age, favAstronaut, favSpaceMovie } = req.body;

    try {
        const newAstro = await Astro.create({ name, age, favAstronaut, favSpaceMovie });
        console.log('new astro created', newAstro);
        res.json({ astro: newAstro });
    } catch (error) {
       console.log('Error inside of POST of /api/astros');
       console.log(error);
       return res.status(400).json({ message: 'Astro was not created. Please try again...' }); 
    }
}

// GET api/astros/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Astros endpoint OK!'});
});

// GET -> /api/astros/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/astros/:name
router.get('/:name', passport.authenticate('jwt', { session: false }), show);
// POST -> /api/astros
router.post('/', passport.authenticate('jwt', { session: false }), create);

module.exports = router;