import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_MOVIE } from '../utils/mutations';
import { React, useState} from 'react';

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [title, setTitle] = useState([]);
    const [year, setYear] = useState([]);

    const [ , { error }] = useMutation(ADD_MOVIE);

    const handleMovieChange = (event) => {
        setTitle(event.target.value.replace(/\s/g, '+'));
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        APIKEY = process.env.REACT_APP_API_KEY;
        fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}&y=${year}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .then((data) => addMovie({
                variables: {
                    title: data.Title,
                    year: data.year,
                    poster: data.Poster,
                }
            }))
            .catch((error) => console.log(error));
    };


    return (
        <div className = "movie">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={handleMovieChange} 
                    title="Movie">
                </input>
                <input
                    type="text"
                    value={year}
                    onChange={{handleYearChange}}
                    title="Year">
                </input>
                <button
                    className = "btn btn-block btn-info"
                    style = {{ cursor: 'pointer '}}
                    type = 'submit'>
                    Submit
                </button>
            </form>
            {movie.length > 0 && (
            <ul>
                {movie.map((results) => (
                    <div>
                        <li key={results.id}>{results.title} - {results.year} - {results.Ratings} - {results.Poster}</li>
                        <Link to='/'>Review</Link>
                    </div>
                ))}
            </ul>
            )}
        </div>
    );
};

export default Movie;