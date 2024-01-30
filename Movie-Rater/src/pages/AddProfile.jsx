import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import componenents if needed here
// add queries.js file in utils folder to correspond to this file
import { QUERY_SINGLE_PROFILE, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const AddProfile = () => {
    const { profileId } = useParams();

    const { loading, data } = useQuery(
        profileId ? QUERY_SINGLE_PROFILE: QUERY_ME,
        {
         variables: { profileId: profileId },   
        }
    );

    const profile = data?.me || data?.profile || {};

    // if logged in get movies page
    if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
        return <Navigate to="/movies" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!profile?.name) {
        return (
            <h4>
                Please log in to see movie page.
            </h4>
        );
    }
};

export default AddProfile;