// Imports
require("dotenv").config();
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Models
const { Astro } = require("../models");

// Controllers
const index = async (req, res) => {
  console.log("inside of /api/astros");
  try {
    const allAstros = await Astro.find({});

    res.json({ astros: allAstros });
  } catch (error) {
    console.log("Error inside of /api/astros");
    console.log(error);
    return res
      .status(400)
      .json({ message: "Astros not found. Please try again!!" });
  }
};

const show = async (req, res) => {
  
  const { id } = req.params;
  try {
    // look for astro based on name
    const astro = await Astro.findById(id);
    res.json({ astro });
  } catch (error) {
    console.log("Error inside of /api/astros/:id");
    console.log(error);
    return res.status(400).json({ message: "Astro not found. Try again..." });
  }
};

const create = async (req, res) => {
  const { name, age, favAstronaut, favSpaceMovie } = req.body;
  console.log('Here is a user', req.user);

  try {
    const newAstro = await Astro.create({
      name,
      age,
      favAstronaut,
      favSpaceMovie,
      user: req.user._id
    });
    console.log("new astro created", newAstro);
    res.json({ astro: newAstro });
  } catch (error) {
    console.log("Error inside of POST of /api/astros");
    console.log(error);
    return res
      .status(400)
      .json({ message: "Astro was not created. Please try again..." });
  }
};

const update = async (req, res) => {
    //     console.log(req.body);
    try {
      const updatedAstro = await Astro.findByIdAndUpdate(req.params.id, req.body);
      const astro = await Astro.findById(req.params.id);
      console.log(updatedAstro);
      console.log(astro);
      res.json({ astro: updatedAstro });
    //   res.redirect(`/api/astros/${req.params.id}`);
    } catch (error) {
      console.log("Error inside of UPDATE route");
      console.log(error);
      res.status(400).json({ message: "Astro could not be updated. Please try again..." });
    }
  };

const deleteAstro = async (req, res) => {
  const { id } = req.params;
  try {
    console.log(id);
    const result = await Astro.findByIdAndRemove(id);
    console.log(result);
    // res.redirect("/api/astros");
    res.json({message: `${id} was deleted.`})
  } catch (error) {
    console.log("inside of DELETE route");
    console.log(error);
    return res
      .status(400)
      .json({ message: "Astro was not deleted. Please try again..." });
  }
};

// GET api/astros/test (Public)
router.get("/test", (req, res) => {res.json({ msg: "Astros endpoint OK!" });
});

// GET -> /api/astros/
router.get("/", passport.authenticate("jwt", { session: false }), index);
// GET -> /api/astros/:name
router.get("/:id", passport.authenticate("jwt", { session: false }), show);

// POST -> /api/astros
router.post("/", passport.authenticate("jwt", { session: false }), create);

router.put("/:id", passport.authenticate("jwt", { session: false }), update);

router.delete("/:id",passport.authenticate("jwt", { session: false }),deleteAstro);

module.exports = router;