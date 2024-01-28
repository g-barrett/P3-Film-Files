import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password){
            token
            user {
                _id
                firstName
                lastName
            }
        }
    }
`;

export const ADD_REVIEW = gql`
    mutation addReview($movie: String!, $rating: Number!, $comment: String!) {
        addReview(movie: $movie, rating: $rating, comment: $comment) {
            _id
            movie
            rating
            comment
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
            }
        }
    }
`;

export const ADD_MOVIE = gql`
    mutation addMovie($title: String!, $year: Int!, $poster: String, $reviews: String) {
        addMovie(title: $title, year: $year, poster: $poster, reviews: $reviews) {
            _id
            title
            year
            poster
            reviews
        }
    }
`;

