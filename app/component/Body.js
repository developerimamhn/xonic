import React from 'react';
import Pageone from './Pageone';
import Pagetwo from './Pagetwo';
import Pagethree from './Pagethree';
import Pagefore from './Pagefore';
import Pagefive from './Pagefive';
import Pagesix from './Pagesix';
import Pageseven from './Pageseven';
import Pageeight from './Pageeight';
import Footer from './Footer';


const Body = () => {
    return (
        <div className='relative'>
            <Pageone/>
            <Pagetwo/>
            <Pagethree/>
            <Pagefore/>
            <Pagefive/>
            <Pagesix/>
            <Pageseven/>
            <Pageeight/>
            <Footer/>
        </div>
    );
};

export default Body;