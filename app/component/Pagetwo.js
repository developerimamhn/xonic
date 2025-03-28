import React from 'react';
import Image from 'next/image';
import image1 from './image/investing.png';


const Pagetwo = () => {
    return (
        <div className='relative'> 
        <div className='w-full h-full absolute top-0 left-0 -z-[1] backgroundline'></div>
            <Image className='w-full absolute top-1/2  -translate-y-1/2 -z-[2]' src={image1} alt='loading...'/>
        <div className='container mx-auto pt-[46px] sm:pt-[50px] md:pt-[58px] lg:pt-[70px] xl:pt-[110px] 2xl:pt-[148px] px-[24px] sm:px-[50px] md:px-[80px] lg:px-[120px] xl:px-[160px] 2xl:px-[193px] pb-[50px] sm:pb-[60px] md:pb-[80px] lg:pb-[110px] xl:pb-[150px] 2xl:pb-[176px]'>
           
            <div className='pb-[32px] sm:pb-[36px] md:pb-[40px] lg:pb-[48px] xl:pb-[64px] 2xl:pb-[84px]'>
                <div data-layer="Trade Like a Pro with Xonic Capital " className="TradeLikeAProWithXonicCapital text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]">
                    <span class="fontthree">Why </span>
                    <span class="">Invest Xonic?</span>
                </div>
                <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                With a deep experience in trading, we provide fast execution, safe <br className='md:block hidden'/> counterparties with low spreads and commission.
                </p>
            </div>
            <div className='flex items-center justify-center flex-col'>
                <div className='flex items-start flex-col justify-start gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] xl:gap-[48px] 2xl:gap-[64px]'>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>01</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>Security of Funds</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                    We are regulated by reputable authorities, including the FSC of<br className='md:block hidden'/> mauritius and the regulatory body in ST. Vincent and Grenadines.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>02</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>Attractive Spreads</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Competitive and attractive spreads starting from 0.0 pips</p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>03</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>24/5 customer support</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                    Well-trained professionals team available 24/5, fluent in<br className='md:block hidden'/>multiple languages.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>04</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>Dedicated account manager</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                    Our team of Dedicated Account Managers is committed to<br className='md:block hidden'/> assisting clients in achieving a seamless trading journey.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>05</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>Dedicated account manager</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                    Our team of Dedicated Account Managers is committed to<br className='md:block hidden'/>assisting clients in achieving a seamless trading journey.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>06</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>High Leverage</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Leverage options as high as 1:400.</p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>07</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>Secure Transactions</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                    Fast and secure transaction processing with different<br className='md:block hidden'/>funding options.
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[32px]'>
                    <div className='flex items-center justify-center w-[24px] sm:w-[32px] md:w-[36px] lg:w-[40px] xl:w-[48px] 2xl:w-[64px] h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px] border-[1px] border-[#ffffff1f] numberingpositioning rounded-full text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>08</div>
                    <div className='flex flex-col items-left'>
                    <h3 className='numberingpositioning !text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] !leading-[100%]'>Diverse Financial Products</h3>
                    <p className='padingfoxing text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>
                    Explore a wide range of products across global markets,<br className='md:block hidden'/> spanning currencies, indices, CFDs, futures, oil, energy, <br className='md:block hidden'/> metals, and commodities.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Pagetwo;