import React from 'react';
import slide1 from './image/slide1.png';
import slide2 from './image/slide2.png';
import slide3 from './image/slide3.png';
import slide4 from './image/slide4.png';
import slide5 from './image/slide5.png';
import slide6 from './image/slide1.png';
import slide7 from './image/slide7.png';
import smslide1 from './image/smslide1.png';
import smslide2 from './image/smslide2.png';
import smslide3 from './image/smslide3.png';
import smslide4 from './image/smslide4.png';
import Image from 'next/image';


const smimages = [
    { src: smslide1, caption: "Image 1" },
    { src: smslide2, caption: "Image 2" },
    { src: smslide3, caption: "Image 3" },
    { src: smslide4, caption: "Image 4" },
    { src: smslide1, caption: "Image 1" },
    { src: smslide2, caption: "Image 2" },
    { src: smslide3, caption: "Image 3" },
    { src: smslide4, caption: "Image 4" },
  ];

const images = [
    { src: slide1, caption: "Image 1" },
    { src: slide2, caption: "Image 2" },
    { src: slide3, caption: "Image 3" },
    { src: slide4, caption: "Image 4" },
    { src: slide5, caption: "Image 1" },
    { src: slide6, caption: "Image 2" },
    { src: slide7, caption: "Image 3" },
    { src: slide2, caption: "Image 2" },
    { src: slide3, caption: "Image 3" },
    { src: slide4, caption: "Image 4" },
    { src: slide5, caption: "Image 1" },
    { src: slide6, caption: "Image 2" },
    { src: slide7, caption: "Image 3" },
  ];



const Pageseven = () => {
    return (
        <div className='relative '>
            <div className='py-[45px] sm:py-[50px] md:py-[60px] lg:py-[80px] xl:py-[110px] 2xl:py-[140px]'>
            <span className='outlideopos block  text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Our partners</span>
            <h2 className='weworkdbest text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[32px] pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[100px]'>We work with the best partners</h2>
            <div className="scroll-container">
                <div className="scroll-content">
                    {[...images, ...images].map((image, index) => (
                    <div key={index} className="flex flex-wrap items-center w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px] 2xl:w-[357px]">
                        <Image src={image.src} alt={image.caption} />
                    </div>
                    ))}
                </div>
            </div>
            </div>
            <div className='container mx-auto pb-[80spx] sm:pb-[120px] md:pb-[148px] lg:pb-[164px] xl:pb-[180px] 2xl:pb-[208px] '>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[40px] relative'>
                    
                    <div>
                        <div data-layer="Trade Like a Pro with Xonic Capital" className="TradeLikeAProWithXonicCapital sm:px-0 px-[24px] text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]">
                            <div class="fontthree">Our Secure</div>
                            <div class="">Payment Methods</div>
                        </div>
                    </div>
                    <div>
                        <div className="scroll-container relative">
                        <div className='h-full absolute left-0 top-0 lenerone w-[30px] md:w-[50px] 2xl:w-[72px] z-[50]'></div>
                        <div className='h-full absolute right-0 top-0 lenertwo w-[50px] md:w-[80px] 2xl:w-[125px] z-[50]'></div>
                            <div className="scroll-content relative">
                                {[...smimages, ...smimages].map((image, index) => (
                                <div key={index} className="flex flex-wrap items-center w-[150px] sm:w-[130px] md:w-[140px] lg:w-[150px] xl:w-[180px] 2xl:w-[200px]">
                                    <Image src={image.src} alt={image.caption} />
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pageseven;