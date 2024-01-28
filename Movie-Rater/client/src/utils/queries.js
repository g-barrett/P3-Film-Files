import { gql } from "@apollo/client";

export const QUERY_REVIEWS = gql`

`;

export const QUERY_USER = gql`

`;

export const QUERY_ME = gql`

`;

export const QUERY_MOVIE = gql`
    query movies {
        movies {
            _id
            title
            year
            imdbId
            actors
            poster
            reviews
        }
    }
`;

export const QUERY_SINGLE_MOVIE = gql`
    query single_movie($title: String, $year: Int) {
        single_movie(title: $title, year: $Int) {
            title
            year
            actors
            poster
            reviews
        }
    }
`;

