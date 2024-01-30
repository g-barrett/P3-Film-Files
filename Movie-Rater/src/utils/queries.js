import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
query allProfiles {
    profiles {
        _id
        email
    }
}
`;

export const QUERY_SINGLE_PROFILE = gql`
query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
        _id
        email
    }
}
`;

export const QUERY_ME = gql`
query me {
    me {
        _id
        email
    }
}
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
    query single_movie($title: String, $year: Number) {
        single_movie(title: $title, year: $Number) {
            title
            year
            actors
            poster
            reviews
        }
    }
`;