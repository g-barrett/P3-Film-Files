const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    reviews: [Review]
  }

  type Movie {
    _id: ID
    title: String
    year: Int
    imdbId: String
    actors: String
    poster: String
    reviews: [Review]
  }

  type Review {
    _id: ID
    user: [User]
    movie: [Movie]
    rating: Number
    comment: String
    date: Date
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    movies: [Movie]
    single_movie (title: String, year: Int): Movie
    reviews (movie: String, user: String): [Review]
    user (_id: String): [User]

  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    updateMovie(movieId: ID!, review: String!): Movie 
    addMovie(title: String!, year: Int, imdbId: String, actors: String, poster: String, reviews: [Review]): Movie
    addReview(movie: String!, rating: Number!, comment: String!): Review
  }
`;

module.exports = typeDefs;