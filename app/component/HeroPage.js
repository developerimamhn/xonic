import React from 'react';
import imagesrc from './image/imagefromleft.svg';
import Image from 'next/image';


const HeroPage = () => {
    return (
        <div className='relative'>
        <div className='flex items-start justify-start pt-[100px] sm:pt-[200px] md:pt-[250px] lg:pt-[300px] xl:pt-[350px] 2xl:pt-[410px] relative z-[2] pr-[24px] md:pr-[32px] lg:pr-[36px] xl:pr-[40px] 2xl:pr-[48px] mx-auto sm:pb-0 pb-[50px]'>
            <div data-layer="Frame 14" className="Frame14 ml-[24px] sm:ml-[180] md:ml-[230px] lg:ml-[280px] xl:ml-[330px] 2xl:ml-[380px] flex flex-row justify-start items-start gap-[50px] sm:gap-[100px] xl:gap-[122px]">
                <div  className='inline-flex flex-col gap-[]'>
                    <div data-layer="Frame 13" className="Frame13 self-stretch flex flex-col justify-start items-start gap-[16px]  sm:gap-[20px] xl:gap-[32px]">
                        <div data-layer="Trade Like a Pro with Xonic Capital " className="TradeLikeAProWithXonicCapital text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[84px]">
                            <div class="fontthree">Trade Like a Pro</div>
                            <span class="">with Xonic Capital</span>
                        </div>
                        <div data-layer="Invest today & Build a Secured Tomorrow" className="InvestTodayBuildASecuredTomorrow text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]">Invest today & Build a Secured Tomorrow</div>
                    </div>
                    <div data-layer="Frame 12" className="Frame12 size- inline-flex justify-start items-center gap-3 pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px]">
                        <div data-layer="Frame 9" className="Frame9 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] flex justify-center items-center gap-2 py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] cursor-pointer hover:scale-105 transition-all duration-300">

                        <div data-layer="Open an Account" className="OpenAnAccount  leading-normal ">Open an Account</div>
                        </div>

                        <div data-layer="Frame 10 " className="Frame10 flex justify-center items-center gap-2 px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] cursor-pointer hover:scale-105 transition-all duration-300">
                        <div data-layer="Learn More" className="LearnMore justify-center ">Learn More</div>
                        </div>
                    </div>
                </div>
                <Image className=" w-[40%] sm:relative absolute right-0 bottom-0" src={imagesrc} alt="Loading..." />
            </div>
        </div>
        </div>
    );
};

export default HeroPage;