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
        return res.status(400).json({ message: 'Crews not found. Please try again.' });
    }
}

const show = async (req, res) => {
    const { id } = req.params;
    try {
        // look for crew based on name
        const crew = await Crew.findByName(name);
        res.json({ crew });
    } catch (error) {
        console.log('Error inside of /api/crews/:id');
        console.log(error);
        return res.status(400).json({ message: 'Crew not found. Try again...' });
    }
}

const create = async (req, res) => {
    const { name, agency, image, wikipedia } = req.body;

    try {
        const newCrew = await Crew.create({ name, agency, image, wikipedia });
        console.log('new crew created', newCrew);
        res.json({ crew: newCrew });
    } catch (error) {
       console.log('Error inside of POST of /api/crews');
       console.log(error);
       return res.status(400).json({ message: 'Crew was not created. Please try again...' }); 
    }
}

const update = async (req, res) => {
    console.log(req.body);
    try {
        const updatedCrew = await Crew.update({ name: req.body.name }, req.body); // updating the crew
        const crew = await Crew.findOne({ name: req.body.name });

        console.log(updatedCrew); // { n: 1, nModified: 0, ok: 1 }
        console.log(crew); // a crew object 

        res.redirect(`/api/crews/${crew.name}`);

    } catch (error) {
        console.log('Error inside of UPDATE route');
        console.log(error);
        return res.status(400).json({ message: 'Crew could not be updated. Please try again...' });
    }
}

const deleteCrew = async (req, res) => {
    const { name } = req.params;
    try {
        console.log(name);
        const result = await Crew.findByNameAndRemove(name);
        console.log(result);
        res.redirect('/api/crews');
    } catch (error) {
        console.log('inside of DELETE route');
        console.log(error);
        return res.status(400).json({ message: 'Crew was not deleted. Please try again...' });
    }
}

// GET api/crews/test (Public)
router.get('/test', (req, res) => {
    res.json({ msg: 'Crews endpoint OK!'});
});

// GET -> /api/crews/
router.get('/', passport.authenticate('jwt', { session: false }), index); 
// GET -> /api/crews/:id
router.get('/:id', passport.authenticate('jwt', { session: false }), show);
// POST -> /api/crews
router.post('/', passport.authenticate('jwt', { session: false }), create);
// PUT -> /api/crews
router.put('/', passport.authenticate('jwt', { session: false }), update);
// DELETE => /api/crews/:id
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteCrew);


module.exports = router;