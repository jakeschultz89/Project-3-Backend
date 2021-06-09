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
  userSchema: {
    type: Schema.Types.ObjectId,
    ref: 'User Schema '
  }
});

const Astro = mongoose.model('Astro', astroSchema);
module.exports = Astro;