const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rocketSchema = new Schema({
  crewSchema: {
    type: Schema.Types.ObjectId,
    ref: 'Crew Schema '
  },
  name: {
    type: String
  },
  first_flight: {
    type: String
  },
  flickr_images: {
    type: String
  },
  country: {
    type: String
  },
  company: {
    type: String
  },
  wikpedia: {
    type: String
  },
  description: {
    type: String
  }
});

const Rocket = mongoose.model('Rocket', rocketSchema);
module.exports = Rocket;