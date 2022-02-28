import React from 'react';
import { getAllMovies } from '../../redux/movies/movieSplice';
import { useSelector } from 'react-redux';
import MovieCard from '../moviecard';
import css from './css/MovieListing.module.css'


const MovieListing = () => {
    const movies = useSelector(getAllMovies)
    
    const renderMovie = ()=>{
        if(movies.data){
            if(movies.data.items){
                return movies.data.items.map((movie, index) => (
                    <MovieCard key={index} data={movie} />
                ))
            }
            if(movies.data.results){
                return movies.data.results.map((movie, index) => (
                    <MovieCard key={index} data={movie} />
                ))
            }
        }else (<div className='error_movie'></div>)
    }

    return (
        <div className={css.MovieList}>
            {renderMovie()}
        </div>
    );
};

export default MovieListing;