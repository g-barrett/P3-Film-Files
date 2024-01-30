import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MOVIE } from '../utils/queries';
import React, { useState } from 'react'; // Import React and useState
import { process } from 'dotenv';

const Movie = () => {
    const [movie, setMovie] = useState([]);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const handleMovieChange = (event) => {
        setTitle(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const APIKEY = process.env.REACT_APP_API_KEY; // Access environment variable directly
    //     try {
    //         const response = await fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}&y=${year}`);
    //         const data = await response.json();
    //         setMovie(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        const APIKEY = process.env.REACT_APP_API_KEY;
        console.log('API Key:', APIKEY);
        fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}&y=${year}`)
            .then((response) => response.json())
            .then((data) => setMovie(data))
            .catch((error) => console.log(error));
    }

    return (
        <div className="movie">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={handleMovieChange}
                    title="Movie"
                />
                <input
                    type="text"
                    value={year}
                    onChange={handleYearChange}
                    title="Year"
                />
                <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                >
                    Submit
                </button>
            </form>
            {movie.length > 0 && (
                <ul>
                    {movie.map((results, index) => (
                        <li key={index}>{results.title} - {results.year} - {results.Ratings} - {results.Poster}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Movie;