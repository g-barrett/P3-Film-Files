import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addUser($email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
        token
        user {
            _id
            email
        }
    }
}`;

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
    mutation addReview($movie: String!, $rating: Int!, $comment: String!) {
        addReview(movie: $movie, rating: $rating, comment: $comment) {
            _id
            movie
            rating
            comment
        }
    }
`;

// export const LOGIN = gql`
//     mutation login($email: String!, $password: String!) {
//         login(email: $email, password: $password) {
//             token
//             user {
//                 _id
//             }
//         }
//     }
// `;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;



export const ADD_MOVIE = gql`
    mutation addMovie($title: String!, $year: String!, $poster: String) {
        addMovie(title: $title, year: $year, poster: $poster) {
            _id
            title
            year
            poster
        }
    }
`;

