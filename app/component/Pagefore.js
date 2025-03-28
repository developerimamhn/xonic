import React from 'react';
import image1 from './image/mapingpage.png';
import Image from 'next/image';

const Pagefore = () => {
    return (
        <div>
            <div className='container mx-auto pt-[32px] sm:pt-[36px] md:pt-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[100px] pbs-[45px] sm:pb-[50px] md:pb-[70px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[158px]'>
                <div data-layer="Trade Like a Pro with Xonic Capital " className="TradeLikeAProWithXonicCapital text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] text-center">
                Market coverage &amp; Regulations
                </div>
                <p className='padingfoxing text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] w-[75%] mx-auto text-center pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px]'>
                At KAMA Capital, we prioritize regulatory compliance, ensuring transparency and client protection. Our operations are authorized and regulated by reputable authorities, including the FSC of Mauritius and the regulatory body in ST. Vincent and Grenadines. We also have a registered representative office in Dubai, UAE, regulated by the Dubai Economic Department. Rest assured, we maintain the highest standards of professionalism and integrity to safeguard our clients&apos; investments.
                </p>
                <Image className='pt-[45px] sm:pt-[50px] md:pt-[70px] lg:pt-[90px] xl:pt-[120px] 2xl:pt-[152px]' src={image1} alt="Loading..."/>
            </div>
        </div>
    );
};

export default Pagefore;