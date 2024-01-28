import { ADD_REVIEW } from "../utils/mutations";
import { QUERY_SINGLE_MOVIE } from "../utils/queries";
import { useQuery, useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Review = () => {
    let { title, year } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_MOVIE, {
        variables: { title: title, year: year },
    });

    const singleMovie = data?.single_movie || [];

    const [formData, setFormData] = useState({
        movie: ' ',
        rating: ' ',
        comment: ' ',
    });

    let navigate = useNavigate();
    
    const [ , { error }] = useMutation(ADD_REVIEW);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      };

    const handleFormSubmit = async ( event ) => {
        event.preventDefault();

        try {
            const { data } = await addReview({
                variables: { ...formData},
            });
            navigate(`/movie/${data.addReview._id}`)
        } catch (err) {
            console.error(err);
        }

        setFormData({
            movie: ' ',
            rating: ' ',
            comment: ' ',
        });
    };

    return (
        <div>
            <div>
                <h1> Leave A Review!</h1>
            </div>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="movie"
                        onChange={handleInputChange} 
                        title="Movie">
                    </input>
                    <input
                        type="text"
                        name="rating"
                        onChange={{handleInputChange}}
                        title="Rating">
                    </input>
                    <input
                        type="text"
                        name="comment"
                        onChange={{handleInputChange}}
                        title="Comment">
                    </input>
                    <button
                        className = "btn btn-block btn-info"
                        style = {{ cursor: 'pointer '}}
                        type = 'submit'>
                        Submit
                    </button>
                </form>
            </div>
        )}
        {error && <div> Something went wrong...</div>}
        </div>
    );
};

export default Review;