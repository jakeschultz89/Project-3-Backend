// // Imports
// require('dotenv').config();
// const express = require('express');
// const router = express.Router();
// const passport = require('passport');

// // Models
// const { Starlink } = require('../models');

// // Controllers
// const index = async (req, res) => {
//     console.log('inside of /api/starlinks');
//     try {
//         const allStarlinks = await Starlink.find({});

//         res.json({ rockets: allRockets });
//     } catch (error) {
//         console.log('Error inside of /api/starlinks');
//         console.log(error);
//         return res.status(400).json({ message: 'Starlinks not found. Please try again.' });
//     }
// }

// const show = async (req, res) => {
//     const { name } = req.params;
//     try {
//         // look for starlink based on name
//         const starlink = await Starlink.findByName(name);
//         res.json({ starlink });
//     } catch (error) {
//         console.log('Error inside of /api/starlinks/:name');
//         console.log(error);
//         return res.status(400).json({ message: 'Starlink not found. Try again...' });
//     }
// }

// // GET api/starlinks/test (Public)
// router.get('/test', (req, res) => {
//     res.json({ msg: 'Starlinks endpoint OK!'});
// });

// // GET -> /api/starlinks/
// router.get('/', passport.authenticate('jwt', { session: false }), index); 
// // GET -> /api/starlinks/:name
// router.get('/:name', passport.authenticate('jwt', { session: false }), show);


// module.exports = router;