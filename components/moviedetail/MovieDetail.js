import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../redux/movies/movieSplice';
import css from './css/MovieDetail.module.css'

const MovieDetail = () => {
    const { data } = useSelector(getAllMovies)
    const id = localStorage.getItem("id")
    let item= ''
    if (data.items){
        item = data.items.filter(card => card.id == id)
    }
    if (data.results){
        item = data.results.filter(card => card.id == id)
    }

    const myLoader=({src})=>{
        return `https://image.tmdb.org/t/p/w500/${item[0].poster_path}`;
      }
    return (
        <div className={css.movie}>
            <div className={css.image}>
                <Image loader={myLoader} src={`https://image.tmdb.org/t/p/w500/${item[0].poster_path}`} alt='' layout='intrinsic' width={250} height={375} />
            </div>
            <div className={css.texts}>
                <div className={css.div}>
                    <div className={css.title}>NOMI</div>
                    <div className={css.title_text}>{item[0].title}</div>
                </div>
                <div className={css.div}>
                    <div className={css.about}>MALUMOT</div>
                    <div className={css.about_text}>{item[0].overview}</div>
                </div>
                <div className={css.div}>
                    <div className={css.title}>SANASI</div>
                    <div className={css.title_text}>{item[0].release_date}</div>
                </div>
                <div className={css.div}>
                    <div className={css.title}>TIL</div>
                    <div className={css.title_text}>{item[0].original_language}</div>
                </div>
                <div className={css.div}>
                    <div className={css.title}>BAHOSI</div>
                    <div className={css.title_text}>{item[0].vote_average}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;