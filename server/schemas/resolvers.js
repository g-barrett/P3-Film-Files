const { User, Movie, Review } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        movies: async () => {
            return await Movie.find();
        },
        reviews: async (parent, { movie, name }) => {
            const params = {};
            if (movie) {
                params.movie = movie;
            }
            if (name) {
                params.name = {
                //UPDATE
                };
            }
            return await Review.find(params).populate('movie')
        },
        user: async (parent, {_id}) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    //ADD PATH
                    path: '',
                    populate: 'review'
                });

                return user;
            }
        },

        // ANY OTHER QUERIES?
        // UPDATE TYPEDEFS WITH ALL QUERIES

    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
        
            return { token, user };
            },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
        
            if (!user) {
                throw AuthenticationError;
            }
        
            const correctPw = await user.isCorrectPassword(password);
        
            if (!correctPw) {
                throw AuthenticationError;
            }
        
            const token = signToken(user);
        
            return { token, user };
            },
        updateMovie: async () => {
            // ADD CODE AND UPDATE TYPEDEFS
        },
        updateUser: async () => {
            // ADD CODE AND UPDATE TYPEDEFS
        }
        
    }
};

module.exports = resolvers;