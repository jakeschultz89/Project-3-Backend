const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rocketSchema = new Schema({
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
  wikipedia: {
    type: String
  },
  description: {
    type: String
  }
});

const Rocket = mongoose.model('Rocket', rocketSchema);
module.exports = Rocket;