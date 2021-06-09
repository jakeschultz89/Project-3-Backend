const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dragonSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  crew_capacity: {
    type: Number,
    required: true
  },
  first_flight: {
    type: String,
    default: null
  },
  flickr_images: {
    type: [
      String
    ]
  },
  wikipedia: {
    type: String
  },
  description: {
    type: String
  },
  userSchema: {
    type: Schema.Types.ObjectId,
    ref: 'User Schema'
  }
});

const Dragon = mongoose.model('Dragon', dragonSchema);
module.exports = Dragon;