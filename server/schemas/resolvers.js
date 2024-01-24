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
                    $regex: name
                };
            }
            return await Review.find(params).populate('movie')
        },
        user: async (parent, {_id}) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'reviews',
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
        addMovie: async (parent, args, context) => {
            // FINISH AND UPDATE TYPEDEFS
        },
        updateMovie: async (parent, args, context) => {
            // FINISH AND UPDATE TYPEDEFS
        },
        addReview: async (parent, { movie, rating, comment }, context) => {
            if (context.user) {
                const review = await Review.create({ movie, rating, comment });
            
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { reviews: review._id } },
                    { new: true }
                );
            
                return review;
            }
            
            throw new AuthenticationError('You need to be logged in!');
        },
        updateUser: async (parent, args, context) => {
            if(context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            };
        }
        
    }
};

module.exports = resolvers;