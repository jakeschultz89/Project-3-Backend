var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Rocket Schema = new Schema({
  Crew Schema: {
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