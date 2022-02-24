import React from 'react';
import css from './css/Footer.module.css'

const Footer = () => {
    return (
        <div className={css.Footer}>
           <div>Movie App</div>
           <div>@2022, Movie, Inc. or its affiliates</div>
        </div>
    );
};

export default Footer;