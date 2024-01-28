import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addProfile($email: String!, $password: String!) {
    addProfile(email: $email, password: $password) {
        token
        profile {
            _id
            email
        }
    }
}`