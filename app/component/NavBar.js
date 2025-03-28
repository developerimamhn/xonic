"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from './image/logo.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    const handleClickOutside = (event) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


// baranimaction
    const handleScroll = (e, sectionId) => {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - 50,
            behavior: "smooth",
          });
          setToggle(false);
        }
      };

      useEffect(() => {
          const handleScroll = () => {
              if (window.scrollY > 50) {
                  setScrolled(true);
              } else {
                  setScrolled(false);
              }
          };
          window.addEventListener("scroll", handleScroll);
          return () => {
              window.removeEventListener("scroll", handleScroll);
          };
      }, []);


    return (
        <div className={` header ${scrolled ? "scrolled" : " "}  w-full headerbackgronsdvg`}>
            <header className='px-[24px] md:px-[32px] lg:px-[36px] xl:px-[40px] 2xl:px-[48px] mx-auto flex justify-between items-center py-[12px] sm:py-[14px] lg:py-[16px] relative  sm:overflow-hidden bg-[#070510]'>
                <div className='lg:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                <Link href='/*' className='cursor-pointer flex items-center Froggo-Logo h-[20px] lg:h-[24px] 2xl:h-[28px]'>
                <Image className='w-full h-[16px] lg:h-[20px] 2xl:h-[23.15px' src={logo} alt=''/></Link> 
                <div clssName="navbar-items-mainbackground">
                <nav ref={menuRef} className={`navbar-items-main absolute sm:top-0 top-[100%] sm:left-0 sm:relative duration-1000 z-[999] sm:opacity-100 flex justify-between items-start sm:items-center gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px] md:p-[12px] xl:p-[16px] sm:bg-transparent bg-[#16151f] sm:flex-row flex-col p-[20px] sm:p-[0] w-full
                    ${toggle ? 'left-[0]' :'left-[100%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Markets" onClick={(e) => handleScroll(e, "Markets")}>
                    Markets
                    <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[19px]' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7705 7.08594L10.6088 12.2476C9.99922 12.8572 9.00172 12.8572 8.39214 12.2476L3.23047 7.08594" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Accounts" onClick={(e) => handleScroll(e, "Accounts")}>
                    Accounts
                    <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[19px]' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7705 7.08594L10.6088 12.2476C9.99922 12.8572 9.00172 12.8572 8.39214 12.2476L3.23047 7.08594" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Platforms" onClick={(e) => handleScroll(e, "Platforms")}>
                    Platforms
                    <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[19px]' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7705 7.08594L10.6088 12.2476C9.99922 12.8572 9.00172 12.8572 8.39214 12.2476L3.23047 7.08594" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                    
                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#LearningLab" onClick={(e) => handleScroll(e, "LearningLab")}>
                    Learning Lab
                    <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[19px]' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7705 7.08594L10.6088 12.2476C9.99922 12.8572 9.00172 12.8572 8.39214 12.2476L3.23047 7.08594" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar flex items-center gap-[6px] lg:gap-[8px]" href="#Partnership" onClick={(e) => handleScroll(e, "Partnership")}>
                    Partnership
                    <svg className='w-[12px] sm:w-[13px] md:w-[14px] lg:w-[15px] xl:w-[16px] 2xl:w-[19px]' viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.7705 7.08594L10.6088 12.2476C9.99922 12.8572 9.00172 12.8572 8.39214 12.2476L3.23047 7.08594" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>

                    <a className="cursor-pointer Link-manu-bar" href="#About" onClick={(e) => handleScroll(e, "About")}>
                    About
                    </a>
                    <a className="cursor-pointer Link-manu-bar" href="#Contact" onClick={(e) => handleScroll(e, "Contact")}>
                    Contact
                    </a>
                </nav>
                </div>
                
                <ul className='flex justify-between items-center gap-[14px] md:gap-[16px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[24px]'>
                    <label>
                    <div className="custom-select-wrapper cursor-pointer">
                        <select className='Link-manu-bar px-[11px] sm:px-[12px] md:px-[13px] lg:px-[14px] xl:px-[15px] 2xl:px-[16px] h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[48px]  gap-[6px] xl:gap-[8px]' name="selectedFruit " id="fruit-selector">
                            <option value="apple">EN</option>
                            <option value="banana">BN</option>
                            <option value="orange">AR</option>
                        </select>
                        <svg className="custom-arrow" xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="none">
                        <path d="M12 3L7.47222 7.59317C6.9375 8.13561 6.0625 8.13561 5.52778 7.59317L1 3" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </div>
                    </label>
                    <div className='flex justify-center  items-center gap-[8px] xl:gap-[12px]'>
                        <button className='cursor-pointer loginareas flex items-center text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[48px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] hover:scale-105 transition-all duration-300'>Login</button>

                        <button className='cursor-pointer esistareas flex items-center text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] h-[24px] md:h-[32px] lg:h-[36px] xl:h-[40px] 2xl:h-[48px] px-[13px] sm:px-[14px] md:px-[15px] lg:px-[16px] xl:px-[20px] 2xl:px-[24px] hover:scale-105 transition-all duration-300'>Register</button>
                    </div>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;