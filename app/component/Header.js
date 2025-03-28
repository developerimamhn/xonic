import React from 'react';
import NavBar from './NavBar';
import HeroPage from './HeroPage';
import backgroundimageheader from './image/backgroundimageheader.svg';
import Image from 'next/image';


const Header = () => {
    return (
        <div className='relative sm:h-screen overflow-hidden'>
            <Image className="absolute left-0 top-[50px] sm:top-[84px] w-full z-[1]" src={backgroundimageheader} alt="Loading..." />
            <NavBar/>
            <HeroPage/>
        </div>
    );
};

export default Header;