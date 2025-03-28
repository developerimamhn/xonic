import React from 'react';
import Image from 'next/image';
import image1 from './image/mobiledap.png';

const Pagethree = () => {
    return (
        <div className='!bg-[#fff]'>
            <div className='container mx-auto'>
            <div className='pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[148px] container mx-auto pl-[24px] sm:pl-[50px] md:pl-[80px] lg:pl-[120px] xl:pl-[160px] 2xl:pl-[193px]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[13px] items-start justify-between'>
                    <div className='col-span-1'>
                        <h2 className='explab text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]'>Xonic Learning Lab</h2>
                        <p className='xonic text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px]'>At Xonic Learning Lab, our mission is to empower you with the knowledge and tools necessary to overcome trading challenges.</p>
                        <p className='xonic text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[13px] sm:pt-[14px] md:pt-[15px] lg:pt-[16px] xl:pt-[20px]'>Gain access to our advanced learning platform and <br className='md:block hidden'/> trade with confidence in the market.</p>
                        <div className='flex items-center gap-[11px] sm:gap-[12px] md:gap-[13px] lg:gap-[14px] xl:gap-[15px] 2xl:gap-[16px] pt-[20px] sm:pt-[24px] md:pt-[32px] lg:pt-[36px] xl:pt-[40px] cursor-pointer'>Go to Learning Lab
                            <svg className='w-[13px] sm:w-[14px] md:w-[15px] lg:w-[16px] xl:w-[20px] 2xl:w-[24px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 11.0008L21.2 2.80078" stroke="#070510" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M21.9992 6.8V2H17.1992" stroke="#070510" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#070510" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </div>
                    </div>
                    <div className='col-span-1'>
                    <Image className='w-full' src={image1} alt='loading...'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pagethree;