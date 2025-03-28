'use client'


import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import logo from "./image/logo.png";

const Footer = () => {
    useEffect(() => {
        const handleScroll = () => {
          const features = document.querySelectorAll('.feature');
          const windowHeight = window.innerHeight;
    
          features.forEach((feature) => {
            const featurePosition = feature.getBoundingClientRect().top;
    
            if (featurePosition < windowHeight - 100) {
              feature.classList.add('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    
    const [isTranslated, setIsTranslated] = useState(false);
    
    
    const handleClick = () => {
    setIsTranslated(true);
    
    setTimeout(() => {
      setIsTranslated(false);
    }, 200); 
    };
    return (
        <div className='!bg-[#070510]'>
            <div className='bg-[#0A0806]  pt-[30px] sm:pt-[40px] md:pt-[50px] lg:pt-[70px] xl:pt-[90px] 2xl:pt-[120px]'>
                <div className='grid grid-cols-12 gap-[30px] pb-[20px] md:pb-[30px] xl:pb-[40px] pt-[16px] md:pt-[25px] xl:pt-[32px] px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px]'>
                    <div className='col-span-5 sm:col-span-3 feature'>
                        <Image className='rounded-[6px] lg:rounded-[8px] w-[60px] md:w-[80px] xl:w-[129px]' src={logo} alt=""/>
                        <p className='lastpadding text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] mt-[16px] md:mt-[25px] xl:mt-[30px]'>Clarity gives you the blocks and <br className='md:block hidden'/> components you need to create a <br className='md:block hidden'/> truly professional website.</p>
                        <div className='flex items-center gap-[14px] lg:gap-[20px] mt-[16px] md:mt-[20px] xl:mt-[24px]'>
                         <svg className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[28px] cursor-pointer group' viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14.3906" r="13.5" stroke="#D4D4D8"/>
                            <path d="M20.2071 11.3757C19.7881 11.5619 19.3458 11.6783 18.8802 11.7481C19.3458 11.4688 19.7183 11.0265 19.8812 10.4911C19.4389 10.7471 18.9501 10.9334 18.4146 11.0498C17.9956 10.6075 17.3904 10.3281 16.7386 10.3281C15.4815 10.3281 14.4572 11.3524 14.4572 12.6095C14.4572 12.7957 14.4805 12.9587 14.5271 13.1216C12.6415 13.0285 10.9421 12.1206 9.80141 10.7239C9.61518 11.0731 9.49878 11.4455 9.49878 11.8645C9.49878 12.656 9.89453 13.3544 10.5231 13.7734C10.1506 13.7501 9.80141 13.657 9.4755 13.4941V13.5173C9.4755 14.6347 10.267 15.5659 11.3145 15.7754C11.1283 15.822 10.9188 15.8453 10.7093 15.8453C10.5696 15.8453 10.4067 15.822 10.267 15.7987C10.5696 16.7066 11.4077 17.3817 12.4087 17.3817C11.6172 17.9869 10.6395 18.3594 9.56862 18.3594C9.38239 18.3594 9.19616 18.3594 9.0332 18.3361C10.0575 18.9879 11.2447 19.3604 12.5483 19.3604C16.7618 19.3604 19.0665 15.8685 19.0665 12.8423C19.0665 12.7491 19.0665 12.6327 19.0665 12.5396C19.5088 12.237 19.9045 11.8413 20.2071 11.3757Z" fill="#C7C9D1"/>
                            </svg>

                            <svg className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[28px] cursor-pointer group' viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14.3906" r="14" fill="white"/>
                            <path d="M12.7087 20.6944V15.1409H10.8398V12.9766H12.7087V11.3804C12.7087 9.52814 13.84 8.51953 15.4924 8.51953C16.2839 8.51953 16.9642 8.57846 17.1624 8.6048V10.5406L16.0164 10.5411C15.1178 10.5411 14.9438 10.9681 14.9438 11.5947V12.9766H17.087L16.8079 15.1409H14.9438V20.6944H12.7087Z" fill="#070510"/>
                            </svg>

                            <svg className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[28px] cursor-pointer group' viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14.3906" r="13.5" stroke="#D4D4D8"/>
                            <path d="M14.0008 8.83783C15.8095 8.83783 16.0237 8.84461 16.7382 8.87719C17.1678 8.88244 17.5933 8.96133 17.9962 9.11041C18.2884 9.2231 18.5538 9.39573 18.7753 9.61719C18.9967 9.83864 19.1694 10.104 19.282 10.3962C19.4311 10.7992 19.51 11.2247 19.5153 11.6543C19.5475 12.3688 19.5546 12.583 19.5546 14.3917C19.5546 16.2004 19.5479 16.4146 19.5153 17.1291C19.51 17.5587 19.4311 17.9842 19.282 18.3872C19.1694 18.6794 18.9967 18.9448 18.7753 19.1662C18.5538 19.3877 18.2884 19.5603 17.9962 19.673C17.5933 19.8221 17.1678 19.901 16.7382 19.9062C16.024 19.9385 15.8098 19.9456 14.0008 19.9456C12.1917 19.9456 11.9775 19.9388 11.2633 19.9062C10.8337 19.901 10.4082 19.8221 10.0053 19.673C9.71307 19.5603 9.44769 19.3877 9.22624 19.1662C9.00479 18.9448 8.83216 18.6794 8.71947 18.3872C8.57038 17.9842 8.4915 17.5587 8.48624 17.1291C8.45398 16.4146 8.44689 16.2004 8.44689 14.3917C8.44689 12.583 8.45366 12.3688 8.48624 11.6543C8.4915 11.2247 8.57038 10.7992 8.71947 10.3962C8.83216 10.104 9.00479 9.83864 9.22624 9.61719C9.44769 9.39573 9.71307 9.2231 10.0053 9.11041C10.4082 8.96133 10.8337 8.88244 11.2633 8.87719C11.9779 8.84493 12.192 8.83783 14.0008 8.83783ZM14.0008 7.61719C12.162 7.61719 11.9304 7.62493 11.2079 7.65783C10.6456 7.66902 10.0893 7.77547 9.56269 7.97267C9.11092 8.14289 8.70172 8.40963 8.36366 8.75428C8.01869 9.09247 7.75172 9.5019 7.5814 9.95396C7.3842 10.4806 7.27775 11.0369 7.26656 11.5991C7.2343 12.3211 7.22656 12.5527 7.22656 14.3914C7.22656 16.2301 7.2343 16.4617 7.26721 17.1843C7.27839 17.7465 7.38485 18.3028 7.58205 18.8294C7.75218 19.2815 8.01892 19.6909 8.36366 20.0291C8.70191 20.3739 9.11133 20.6406 9.56334 20.8107C10.09 21.0079 10.6463 21.1144 11.2085 21.1256C11.9311 21.1578 12.1617 21.1662 14.0014 21.1662C15.8411 21.1662 16.0717 21.1585 16.7943 21.1256C17.3565 21.1144 17.9128 21.0079 18.4395 20.8107C18.8893 20.6364 19.2978 20.37 19.6389 20.0287C19.98 19.6875 20.246 19.2788 20.4201 18.8288C20.6173 18.3022 20.7238 17.7459 20.735 17.1836C20.7672 16.4617 20.775 16.2301 20.775 14.3914C20.775 12.5527 20.7672 12.3211 20.7343 11.5985C20.7231 11.0362 20.6167 10.48 20.4195 9.95332C20.2493 9.50131 19.9826 9.09189 19.6379 8.75364C19.2996 8.4089 18.8902 8.14216 18.4382 7.97203C17.9115 7.77483 17.3553 7.66837 16.793 7.65719C16.0711 7.62493 15.8395 7.61719 14.0008 7.61719Z" fill="#C7C9D1"/>
                            <path d="M14.0021 10.9141C13.3141 10.9141 12.6416 11.1181 12.0695 11.5003C11.4974 11.8826 11.0515 12.4259 10.7882 13.0615C10.5249 13.6972 10.4561 14.3966 10.5903 15.0714C10.7245 15.7462 11.0558 16.3661 11.5423 16.8526C12.0288 17.3391 12.6487 17.6704 13.3235 17.8046C13.9983 17.9389 14.6977 17.87 15.3334 17.6067C15.969 17.3434 16.5123 16.8975 16.8946 16.3254C17.2768 15.7534 17.4809 15.0808 17.4809 14.3928C17.4809 13.4702 17.1144 12.5853 16.462 11.933C15.8096 11.2806 14.9248 10.9141 14.0021 10.9141ZM14.0021 16.6508C13.5555 16.6508 13.119 16.5184 12.7476 16.2703C12.3763 16.0222 12.0869 15.6695 11.916 15.2569C11.7451 14.8443 11.7003 14.3903 11.7875 13.9522C11.8746 13.5142 12.0897 13.1119 12.4055 12.7961C12.7213 12.4803 13.1236 12.2652 13.5616 12.1781C13.9996 12.091 14.4537 12.1357 14.8663 12.3066C15.2789 12.4775 15.6315 12.7669 15.8797 13.1383C16.1278 13.5096 16.2602 13.9462 16.2602 14.3928C16.2602 14.9916 16.0223 15.566 15.5988 15.9895C15.1754 16.4129 14.601 16.6508 14.0021 16.6508Z" fill="#C7C9D1"/>
                            <path d="M17.6176 11.5867C18.0665 11.5867 18.4305 11.2228 18.4305 10.7738C18.4305 10.3249 18.0665 9.96094 17.6176 9.96094C17.1686 9.96094 16.8047 10.3249 16.8047 10.7738C16.8047 11.2228 17.1686 11.5867 17.6176 11.5867Z" fill="#C7C9D1"/>
                            </svg>

                            <svg className='w-[14px] sm:w-[15px] md:w-[16px] lg:w-[20px] xl:w-[24px] 2xl:w-[28px] cursor-pointer group' viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14" cy="14.3906" r="13.5" stroke="#D4D4D8"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6068 7.61719C11.0159 7.61719 8.12695 10.5061 8.12695 14.0971C8.12695 16.959 9.98992 19.389 12.5549 20.253C12.8789 20.307 12.9869 20.118 12.9869 19.929C12.9869 19.767 12.9869 19.362 12.9869 18.822C11.1779 19.227 10.7999 17.958 10.7999 17.958C10.5029 17.202 10.0709 17.013 10.0709 17.013C9.47693 16.608 10.1249 16.608 10.1249 16.608C10.7729 16.662 11.1239 17.283 11.1239 17.283C11.6909 18.282 12.6359 17.985 13.0139 17.823C13.0679 17.391 13.2299 17.121 13.4189 16.959C11.9879 16.797 10.4759 16.23 10.4759 13.7461C10.4759 13.0441 10.7189 12.4501 11.1509 12.0181C11.0969 11.8561 10.8539 11.2081 11.2049 10.2901C11.2049 10.2901 11.7449 10.1281 12.9869 10.9651C13.4999 10.8301 14.0669 10.7491 14.6068 10.7491C15.1468 10.7491 15.7138 10.8301 16.2268 10.9651C17.4688 10.1281 18.0088 10.2901 18.0088 10.2901C18.3598 11.1811 18.1438 11.8291 18.0628 12.0181C18.4678 12.4771 18.7378 13.0441 18.7378 13.7461C18.7378 16.23 17.2258 16.77 15.7678 16.932C16.0108 17.121 16.1998 17.526 16.1998 18.12C16.1998 18.984 16.1998 19.686 16.1998 19.902C16.1998 20.064 16.3078 20.28 16.6588 20.226C19.2238 19.389 21.0867 16.959 21.0867 14.0971C21.0867 10.5061 18.1978 7.61719 14.6068 7.61719Z" fill="#C7C9D1"/>
                            </svg>
                        </div>
                    </div>
                    <div className='col-span-7 sm:col-span-9 flex items-start justify-between gap-[30px] gap:gap-[40px] md:gap-[50px] lg:gap-[60px] xl:gap-[80px] 2xl:gap-[100px] flex-wrap'>
                    <div className='col-span-2 '>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]  feature mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]'>Instruments</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Forex</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Metals</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Commodities</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300 feature '>Indices</li>
                            <li className='meedicalkitslist cursor-pointer feature hover:text-[#cacaca] duraction-300'>Stocks</li>
                        </ul>
                    </div>
                    
                    <div className='col-span-2 '>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]  feature  mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]'>Tools</li>
                            <li className='meedicalkitslist cursor-pointer hover:translate-[10px] duraction-300  feature'>Metatrader 5</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Signal</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Centre </li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300 '>Tool </li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  '>Economic </li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  '>Calendar </li>
                        </ul>
                    </div>
                    <div className='col-span-2 '>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]  feature  mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]'>Quick Links</li>
                            <li className='meedicalkitslist cursor-pointer hover:translate-[10px] duraction-300  feature'>Academy</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>FAQs</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Blog</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300 '>Calculators</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300 '>Sky trade manager</li>
                        </ul>
                    </div>
                    <div className='col-span-2 '>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]  feature  mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]'>Accounts</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>About us</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Partners</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Media kit</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300  feature'>Merchandise</li>
                            <li className='meedicalkitslist cursor-pointer hover:text-[#cacaca] duraction-300 '>Symbols specifications</li>
                        </ul>
                    </div>
                    <div className='col-span-2 '>
                        <ul classsName='flex flex-col feature'>
                            <li className='compais  text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]  feature  mb-[13px] sm:mb-[14px] md:mb-[15px] lg:mb-[16px] xl:mb-[20px] 2xl:mb-[24px]'>More ways to reach us</li>
                            <li className='meedicalkitslist  feature hover:text-[#cacaca] duraction-300'>Contact Us,<br/>call +1 (844) 620-2340<br/><br/>
                            Registered Office <br/>
                            Suite 001, Ebene Junction Rue <br/> de la Democratic, Ebene, <br/> Republic of Mauritius.</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className='flex justify-between items-center pb-[20px] md:pb-[30px] xl:pb-[40px] pt-[16px] md:pt-[25px] xl:pt-[32px] border-t-[1px] border-[#232221] px-[24px] sm:px-[35px] md:px-[50px] lg:px-[70px] xl:px-[90px] 2xl:px-[120px]'>
                    <div className='flex items-center gap-[12px] md:gap-[16px] xl:gap-[20px]'>
                        <p className='privacypolicy text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>Xonic Capital LLC © 2025</p>
                    </div>
                    <div className='flex items-center gap-[8px] md:gap-[12px] xl:gap-[16px]'>
                        <p className='privacypolicy text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]'>Sitemap</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;