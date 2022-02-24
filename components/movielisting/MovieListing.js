import React from 'react';
import { getAllMovies } from '../../redux/movies/movieSplice';
import { useSelector } from 'react-redux';
import MovieCard from '../moviecard';
import css from './css/MovieListing.module.css'


const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    console.log(movies);
    let renderMovie = ""
    renderMovie = movies.Response == "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className='error_movie'>{movies.Error}</div>
    )
    return (
        <div className={css.MovieList}>
            {renderMovie}
        </div>
    );
};

export default MovieListing;