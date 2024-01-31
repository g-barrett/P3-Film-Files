import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MOVIE } from '../utils/queries';
import React, { useState } from 'react';
import { ADD_MOVIE } from '../utils/mutations';

const Movie = () => {
    const [movie, setMovie] = useState({});
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    const [addMovie, { error }] = useMutation(ADD_MOVIE);

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

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const APIKEY = "45739ece"
    //     fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${title}&y=${year}`)
    //         .then((response) => response.json())
    //         .then((data) => setMovie(data))
    //         .catch((error) => console.log(error));
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const APIKEY = "45739ece";
        async function getMovieData() {
            let response = await fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&t=${title}&y=${year}`);
            const data = await response.json();
            setMovie(data);
            // addMovie({
            //     variables: {
            //         title: data.Title,
            //         year: data.Year,
            //         poster: data.Poster
            //     }
            // })
            console.log(data);
        };
        getMovieData();
        };
  
        return (
            <div className="movie">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder = "Enter Movie Title"
                        type="text"
                        value={title}
                        onChange={handleMovieChange}
                        title="Movie"
                    />
                    <input
                        placeholder = "Enter Movie Year"
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
                {Object.keys(movie).length > 0 && (
                <div>
                    <div>{movie.Title} - {movie.Year} - {movie.Actors}</div>
                    <div>Ratings: {movie.Ratings && movie.Ratings.map(rating => rating.Value).join(', ')}</div>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            )}
        </div>
        )
};

export default Movie;


