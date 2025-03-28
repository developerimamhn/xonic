import React from 'react';
import Image from 'next/image';
import image1 from './image/egitgooter.png';

const Pageeight = () => {
    return (
        <div className='relative bg-[#fff] overflow-hidden'>
            <Image className='w-full h-full absolute left-0 top-0 z-[0]' src={image1} alt='' />
            <div className='container mx-auto flex items-center justify-center flex-col py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[90px] relative z-[1]'>
                <h2 className='text-center golobalmarketes text-[20px] sm:text-[24px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[50px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px]'>Access to Global market with just <br className='md:block hidden'/> a single clickForex, Commodities, <br className='md:block hidden'/>Stocks & Indices.</h2>
                <div className='flex items-center getstart px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[55px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[70px] cursor-pointer gap-[9px] hover:scale-105 transition-all duration-300'><span>Start Now</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className='mt-[2px]' width="10" height="15" viewBox="0 0 10 15" fill="none">
                    <path d="M2.11523 1.73047L7.88447 7.4997L2.11523 13.2689" stroke="white" stroke-width="2.30769" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Pageeight;