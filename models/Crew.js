const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crewSchema = new Schema({
  name: {
    type: String
  },
  agency: {
    type: String
  },
  image: {
    type: String
  },
  wikipedia: {
    type: String
  },
  userSchema: {
    type: Schema.Types.ObjectId,
    ref: 'User Schema '
  }
});

const Crew = mongoose.model('Crew', crewSchema);
module.exports = Crew;