const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const astroSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  favAstronaut: {
    type: String
  },
  favSpaceMovie: {
    type: String
  },
  question : {
      type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Astro = mongoose.model('Astro', astroSchema);
module.exports = Astro;