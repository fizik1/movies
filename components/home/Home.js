import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieApi from '../../pages/api/MovieApi';
import { APIKey } from '../../pages/api/MovieApiKey'
import { addMovies } from '../../redux/movies/movieSplice';
import MovieListing from '../movielisting/MovieListing';
import css from './css/Home.module.css'
import { BiArrowBack } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

const Home = () => {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    let movietext = "Harry"
    useEffect(()=>{
        const fetchMovies= async (e)=>{
            const respons = await MovieApi.get(`/3/list/${count}?api_key=${APIKey}&language=en-US`)
            .catch((err)=>{
            })
            dispatch(addMovies(respons))
            // console.log(respons);
        }
        

        fetchMovies(movietext)


    
    
    })
    const handlerInp =(e)=>{
        movietext = e.target.value

    }

    const handlerSearch =()=>{
        const fetchMovies= async (e)=>{
            const respons = await MovieApi.get(`/3/search/movie?api_key=${APIKey}&language=en-US&query=${movietext}&page=1&include_adult=false`)
            .catch((err)=>{
            })
            dispatch(addMovies(respons))
            console.log(respons);
        }
        

        fetchMovies(movietext)
    }

    const handlerPlus = ()=>{
        setCount(count+1)
        const fetchMovies= async (e)=>{
            const respons = await MovieApi.get(`/3/list/${count}?api_key=${APIKey}&language=en-US`)
            .catch((err)=>{
            })
            dispatch(addMovies(respons))
        }
        // console.log(count);

        fetchMovies(movietext)

    }
    const handlerMinus = ()=>{
        if(count>1){
            setCount(count-1)
            const fetchMovies= async (e)=>{
                const respons = await MovieApi.get(`/3/list/${count}?api_key=${APIKey}&language=en-US`)
                .catch((err)=>{
                })
                dispatch(addMovies(respons))
            }
            
    
            fetchMovies(movietext)
    
        }
    }

    

    return (
        <div>
            <div className={css.search}>
                <input type='text' placeholder='Film nomini Ingliz tilida kiriting' onChange={(e)=>handlerInp(e)}/>
                <button onClick={handlerSearch}>Search</button>
            </div>
            <MovieListing/>
            <div className={css.navigate}>
                <button onClick={handlerMinus}><BiArrowBack/></button>
                <div style={{color:"#fff"}}>{count}</div>
                <button onClick={handlerPlus}><BiRightArrowAlt/></button>
            </div>
        </div>
    );
};

export default Home;