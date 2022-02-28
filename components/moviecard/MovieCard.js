import Image from 'next/image';
import { Router, useRouter } from 'next/router';
import React from 'react';
import css from './css/MovieCard.module.css'

const MovieCard = (props) => {
    const router = useRouter()
    const { data } =props

    const handlerChoose =()=>{
        const movie_id = data.id
        localStorage.setItem('id', movie_id)
        router.push('/movie')
    }
    const myLoader=({src,  width, quality})=>{
        return `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
      }
    

    return (
        <div className={css.card_item} onClick={handlerChoose}>
            <div className={css.card_inner}>
                <div className={css.card_top}>
                    <Image loader={myLoader} src="my.png" alt={data.title} width={180} height={270}/>
                </div>
                <div className={css.card_bottom}>
                    <div className={css.card_info}>
                        <h4>{ data.original_title}</h4>
                        <p>{data.release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;