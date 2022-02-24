import React from 'react';
import Footer from '../footer';
import Header from '../header';

const Layout = ({ children }) => (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );

export default Layout;