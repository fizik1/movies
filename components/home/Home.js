import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MovieApi from '../../pages/api/MovieApi';
import { APIKey, MovieAPIKey } from '../../pages/api/MovieApiKey'
import { addMovies } from '../../redux/movies/movieSplice';
import MovieListing from '../movielisting/MovieListing';
import css from './css/Home.module.css'

const Home = () => {
    const dispatch = useDispatch()
    let movietext = "Harry"
    console.log('salom');
        const fetchMovies= async (e)=>{
            const respons = await MovieApi.get(`?apikey=${APIKey}&s=${e}&type=movie`)
            .catch((err)=>{
                console.log("error : ", err);
            })
            dispatch(addMovies(respons.data))
            console.log("respons is :", respons);
        }
        

        fetchMovies(movietext)
    
    const handlerInp =(e)=>{
        // console.log(e.target.value)
        movietext = e.target.value
        console.log(movietext);
    }
    return (
        <div>
            <div className={css.search}>
                <input type='text' placeholder='Film nomini Ingliz tilida kiriting' onChange={(e)=>handlerInp(e)}/>
                <button onClick={()=>fetchMovies(movietext)}>Search</button>
            </div>
            <MovieListing/>
        </div>
    );
};

export default Home;