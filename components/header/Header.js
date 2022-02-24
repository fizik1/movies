import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import css from "./css/Header.module.css"

const Header = () => {
    return (
        <div className={css.Header}>
           <Link href="/"><div className={css.logo}>Movie App</div></Link>
           <div className={css.user_image}>
               <Image src="/images/user.png" width={100} height={100} alt="user"/>
           </div>
        </div>
    );
};

export default Header;