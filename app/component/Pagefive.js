import React from 'react';
import Image from 'next/image';
import image1 from './image/pagefivefast.svg'

const listItems = [
    "Trading Platform",
    "Commission (per lot)",
    "Spreads from (pips)",
    "Leverage",
    "Micro Lot Trading (0.01)",
    "One Click Trading",
    "Swap-Free Account",
    "Expert Advisor Enabled",
    "Leverage",
    "24/5 technical and account support"
  ];

const Pagefive = () => {
    return (
        <div>
            <div className='py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[104px] container mx-auto '>
                <div data-layer="Trade Like a Pro with Xonic Capital text-center " className="TradeLikeAProWithXonicCapital text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[64px]">
                    <div class="fontthree text-center">Three types of accounts, catering to every trader,</div>
                    <div class="text-center">Whether you are a beginner or experienced.</div>
                </div>
                <div className='px-[24px] sm:px-[50px] md:px-[80px] lg:px-[120px] xl:px-[160px] 2xl:px-[193px]'>
                    <div className='grid gap-[20px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px] xl:gap-[20px] 2xl:gap-[24px] grid-cols-1 sm:grid-cols-3 items-center justify-center pt-[36px] sm:pt-[40px] md:pt-[48px] lg:pt-[64px] xl:pt-[96px] 2xl:pt-[120px]'>
                        <div className='overflow-hidden group stareings p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] relative'>
                            <Image className='w-full absolute top-0 left-0' src={image1} alt=""/>
                            <svg className='w-full absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 duration-300 -z-[1]' viewBox="0 0 370 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_1140_8425)">
                            <circle cx="248" cy="312.5" r="138.5" fill="white" fill-opacity="0.16"/>
                            </g>
                            <defs>
                            <filter id="filter0_f_1140_8425" x="-64.5" y="0" width="625" height="625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_1140_8425"/>
                            </filter>
                            </defs>
                            </svg>
                            <div className='flex items-center gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[13px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <path d="M4.61879 0.882812L24.2986 25.5311H18.5583L5.58748 9.2899V25.5311H1.10742V0.885736L4.61879 0.882812Z" fill="#3E7EF6"/>
                                </svg>
                                <h2 className='stateclassname text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Stater</h2>
                            </div>
                            <div  className="Frame61 inline-flex justify-start items-end gap-[4px] w-full">
                                <div className="Heading20 text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[34px]">$0</div>
                                <div className="MinDeposit text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">/ Min Deposit</div>
                            </div>
                            <h2 className='idealfornew text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Ideal for new and intermediate traders</h2>
                            <ul className='flex flex-col items-start justify-start pt-[15px] sm:pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[32px] 2xl:pt-[35px] gap-[16px]'>
                            {listItems.map((item, index) => (
                                <li key={index} className='flex items-center gap-[9px] sm:gap-[10px] md:gap-[11px] lg:gap-[12px] xl:gap-[13px] 2xl:gap-[14px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[17px]' viewBox="0 0 17 13" fill="none">
                                    <path d="M4.99614 12.6286C5.07588 12.714 5.17232 12.7822 5.27948 12.8289C5.38646 12.8756 5.50193 12.8996 5.61866 12.8996C5.73537 12.8996 5.85083 12.8756 5.95781 12.8289C6.06498 12.7822 6.16143 12.714 6.24117 12.6286L16.237 2.57381C16.3204 2.49054 16.3865 2.39161 16.4316 2.2827C16.5228 2.06241 16.5228 1.81494 16.4316 1.59465C16.3865 1.48575 16.3204 1.38682 16.237 1.30355L15.2942 0.355321C15.1281 0.191417 14.9046 0.0996094 14.6717 0.0996094C14.439 0.0996094 14.2155 0.191417 14.0492 0.355321L5.61866 8.83565L2.95074 6.16989C2.87101 6.0844 2.77457 6.01619 2.66739 5.96949C2.5604 5.92288 2.44494 5.89882 2.32823 5.89881C2.21152 5.89882 2.09606 5.92288 1.98906 5.96949C1.88189 6.01619 1.78545 6.0844 1.70572 6.16989L0.763051 7.11812C0.679624 7.20138 0.613468 7.30031 0.568384 7.40922C0.523225 7.5183 0.499989 7.6352 0.5 7.75325C0.5 7.87133 0.523253 7.98827 0.568395 8.09727C0.613482 8.20618 0.679637 8.30511 0.763061 8.38838L4.99614 12.6286Z" fill="white"/>
                                    </svg>
                                    <p className='tradinplasds text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className='statebutton py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] w-full px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]'>Open Account</button>
                        </div>
                        <div className='overflow-hidden group stareings p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] relative'>
                            <Image className='w-full absolute top-0 left-0' src={image1} alt=""/>
                            <svg className='w-full absolute bottom-0 left-0 opacity-100 duration-300 -z-[1]' viewBox="0 0 370 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_1140_8425)">
                            <circle cx="248" cy="312.5" r="138.5" fill="white" fill-opacity="0.16"/>
                            </g>
                            <defs>
                            <filter id="filter0_f_1140_8425" x="-64.5" y="0" width="625" height="625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_1140_8425"/>
                            </filter>
                            </defs>
                            </svg>
                            <div className='flex items-center justify-between gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[13px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px] w-full'>
                                <div className='flex items-center justify-start gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[13px]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                    <path d="M4.61879 0.882812L24.2986 25.5311H18.5583L5.58748 9.2899V25.5311H1.10742V0.885736L4.61879 0.882812Z" fill="#3E7EF6"/>
                                    </svg>
                                    <h2 className='stateclassname text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Professional</h2>
                                </div>
                                <span className='popularmost text-[10px] sm:text-[11px] md:text-[12px]'>Most Popular</span>         
                            </div>
                            <div  className="Frame61 inline-flex justify-start items-end gap-[4px] w-full">
                                <div className="Heading20 text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[34px]">$0</div>
                                <div className="MinDeposit text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]">/ Min Deposit</div>
                            </div>
                            <h2 className='idealfornew text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Tailored for experienced traders</h2>
                            <ul className='flex flex-col items-start justify-start pt-[15px] sm:pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[32px] 2xl:pt-[35px] gap-[16px]'>
                            {listItems.map((item, index) => (
                                <li key={index} className='flex items-center gap-[9px] sm:gap-[10px] md:gap-[11px] lg:gap-[12px] xl:gap-[13px] 2xl:gap-[13.5px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[17px]' viewBox="0 0 17 13" fill="none">
                                    <path d="M4.99614 12.6286C5.07588 12.714 5.17232 12.7822 5.27948 12.8289C5.38646 12.8756 5.50193 12.8996 5.61866 12.8996C5.73537 12.8996 5.85083 12.8756 5.95781 12.8289C6.06498 12.7822 6.16143 12.714 6.24117 12.6286L16.237 2.57381C16.3204 2.49054 16.3865 2.39161 16.4316 2.2827C16.5228 2.06241 16.5228 1.81494 16.4316 1.59465C16.3865 1.48575 16.3204 1.38682 16.237 1.30355L15.2942 0.355321C15.1281 0.191417 14.9046 0.0996094 14.6717 0.0996094C14.439 0.0996094 14.2155 0.191417 14.0492 0.355321L5.61866 8.83565L2.95074 6.16989C2.87101 6.0844 2.77457 6.01619 2.66739 5.96949C2.5604 5.92288 2.44494 5.89882 2.32823 5.89881C2.21152 5.89882 2.09606 5.92288 1.98906 5.96949C1.88189 6.01619 1.78545 6.0844 1.70572 6.16989L0.763051 7.11812C0.679624 7.20138 0.613468 7.30031 0.568384 7.40922C0.523225 7.5183 0.499989 7.6352 0.5 7.75325C0.5 7.87133 0.523253 7.98827 0.568395 8.09727C0.613482 8.20618 0.679637 8.30511 0.763061 8.38838L4.99614 12.6286Z" fill="white"/>
                                    </svg>
                                    <p className='tradinplasds text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className='statebutton py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] w-full px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px] !text-[#001] !bg-[#fff]'>Open Account</button>
                        </div>
                        <div className='overflow-hidden group stareings p-[14px] sm:p-[15px] md:p-[16px] lg:p-[20px] xl:p-[24px] 2xl:p-[32px] relative'>
                         <Image className='w-full absolute top-0 left-0' src={image1} alt=""/>
                            <svg className='w-full absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 duration-300 -z-[1]' viewBox="0 0 370 281" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_f_1140_8425)">
                            <circle cx="248" cy="312.5" r="138.5" fill="white" fill-opacity="0.16"/>
                            </g>
                            <defs>
                            <filter id="filter0_f_1140_8425" x="-64.5" y="0" width="625" height="625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="87" result="effect1_foregroundBlur_1140_8425"/>
                            </filter>
                            </defs>
                            </svg>
                            <div className='flex items-center gap-[8px] sm:gap-[9px] md:gap-[10px] lg:gap-[11px] xl:gap-[12px] 2xl:gap-[13px] pb-[14px] sm:pb-[15px] md:pb-[16px] lg:pb-[20px] xl:pb-[24px] 2xl:pb-[32px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                                <path d="M4.61879 0.882812L24.2986 25.5311H18.5583L5.58748 9.2899V25.5311H1.10742V0.885736L4.61879 0.882812Z" fill="#3E7EF6"/>
                                </svg>
                                <h2 className='stateclassname text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px]'>Enterprise</h2>
                            </div>
                            <div  className="Frame61 inline-flex justify-start items-end gap-[4px] w-full">
                                <div className="Heading20 text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[34px]">Custom</div>
                            </div>
                            <h2 className='idealfornew text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[11px] sm:pt-[12px] md:pt-[13px] lg:pt-[14px] xl:pt-[15px] 2xl:pt-[16px]'>Designed for institutional traders</h2>
                            <ul className='flex flex-col items-start justify-start pt-[15px] sm:pt-[16px] md:pt-[20px] lg:pt-[24px] xl:pt-[32px] 2xl:pt-[35px] gap-[16px]'>
                            {listItems.map((item, index) => (
                                <li key={index} className='flex items-center gap-[9px] sm:gap-[10px] md:gap-[11px] lg:gap-[12px] xl:gap-[13px] 2xl:gap-[14px]'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[17px]' viewBox="0 0 17 13" fill="none">
                                    <path d="M4.99614 12.6286C5.07588 12.714 5.17232 12.7822 5.27948 12.8289C5.38646 12.8756 5.50193 12.8996 5.61866 12.8996C5.73537 12.8996 5.85083 12.8756 5.95781 12.8289C6.06498 12.7822 6.16143 12.714 6.24117 12.6286L16.237 2.57381C16.3204 2.49054 16.3865 2.39161 16.4316 2.2827C16.5228 2.06241 16.5228 1.81494 16.4316 1.59465C16.3865 1.48575 16.3204 1.38682 16.237 1.30355L15.2942 0.355321C15.1281 0.191417 14.9046 0.0996094 14.6717 0.0996094C14.439 0.0996094 14.2155 0.191417 14.0492 0.355321L5.61866 8.83565L2.95074 6.16989C2.87101 6.0844 2.77457 6.01619 2.66739 5.96949C2.5604 5.92288 2.44494 5.89882 2.32823 5.89881C2.21152 5.89882 2.09606 5.92288 1.98906 5.96949C1.88189 6.01619 1.78545 6.0844 1.70572 6.16989L0.763051 7.11812C0.679624 7.20138 0.613468 7.30031 0.568384 7.40922C0.523225 7.5183 0.499989 7.6352 0.5 7.75325C0.5 7.87133 0.523253 7.98827 0.568395 8.09727C0.613482 8.20618 0.679637 8.30511 0.763061 8.38838L4.99614 12.6286Z" fill="white"/>
                                    </svg>
                                    <p className='tradinplasds text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>{item}</p>
                                    </li>
                                ))}
                            </ul>
                            <button className='statebutton py-[11px] sm:py-[12px] md:py-[13px] lg:py-[14px] xl:py-[15px] 2xl:py-[16px] w-full px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] mt-[14px] sm:mt-[15px] md:mt-[16px] lg:mt-[20px] xl:mt-[24px] 2xl:mt-[32px]'>Open Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagefive;