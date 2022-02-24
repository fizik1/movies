import Image from 'next/image';
import React from 'react';
import css from './css/MovieCard.module.css'

const MovieCard = (props) => {
    const { data } =props
    console.log(data.Poster);
    const src = data.Poster

    return (
        <div className={css.card_item}>
            <div className={css.card_inner}>
                <div className={css.card_top}>
                    <img src={src} alt={data.Title}/>
                </div>
                <div className={css.card_bottom}>
                    <div className={css.card_info}>
                        <h4>{ data.Title}</h4>
                        <p>{data.Year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;