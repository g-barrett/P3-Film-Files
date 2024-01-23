const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,   
  },
  year: {
    type: Int,
  },
  imdbId: {
    type: String,
  },
  actors: {
    type: String,
  },
  poster: {
    type: String,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;