const { Schema, mongoose } = require('mongoose');

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,   
  },
  year: {
    type: String,
    required: true,
  },
  imdbId: {
    type: String,
  },
  actors: {
    type: String,
  },
  poster: {
    type: String,
    required: true,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;