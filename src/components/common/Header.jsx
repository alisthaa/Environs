import React, { useState,useEffect } from 'react'
import { BiMenu } from 'react-icons/bi';
import { FaChevronDown, FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { RxDropdownMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import PagesDropdown from './PagesDropDown';

export default function Header() {
  const [isMenuOpen,setIsMenuOpen]= useState(false);

  const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFullWidth(true);
            } else {
                setIsFullWidth(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  return <>
<div className='flex justify-center'> 

  <nav className={`${isFullWidth ? 'transition-width duration-500 ease-in-out lg:w-full md:w-full w-full fixed top-0 z-50 m-auto md:m-auto md:fixed md:top-0 lg:m-auto lg:fixed lg:top-0  lg:z-50  md:z-50' : 'fixed top-0  z-50 m-auto md:m-auto md:max-w-[1291px] md:fixed md:top-0   md:z-50 lg:max-w-[1320px] lg:m-auto lg:fixed lg:top-0  lg:z-50'}  `}>

    <div className={`${isFullWidth ? " transition-width duration-500 ease-in-out hidden md:text-[16px] md:h-[36px] md:w-full lg:w-full md:flex  md:items-center bg-primary text-white md:px-[20px] md:gap-9 pr-0":"hidden md:text-[16px] md:h-[36px] md:max-w-[1291px] lg:max-w-[1320px] md:flex  md:items-center bg-primary text-white md:px-[20px] md:gap-9 pr-0"}  `}> 
    <div className='flex w-[832px] font-Roboto gap-3 pr-3'>
        <p className='flex items-center justify-center gap-2 '> <IoMdMail className='cursor-pointer hover:text-hover transition-all duration-300' /> <div className='cursor-pointer hover:text-hover transition-all duration-300'>Example@gmail.com</div></p>
        <p className='flex items-center justify-center gap-2 '> <IoIosCall  className='cursor-pointer hover:text-hover transition-all duration-300'/> <div className='cursor-pointer hover:text-hover transition-all duration-300' >+01234567890 </div></p>
    </div>
    <div className={` ${isFullWidth ? 'flex justify-end font-Roboto gap-7 w-[600px]':'flex justify-end font-Roboto gap-7  w-[404px]'} `}>
        <FaFacebookF className='cursor-pointer hover:text-hover transition-all duration-300'/>
        <FaTwitter className='cursor-pointer hover:text-hover transition-all duration-300' />
        <FaInstagram className='cursor-pointer hover:text-hover transition-all duration-300'/>
        <FaPinterest className='cursor-pointer hover:text-hover transition-all duration-300'/>
        <FaLinkedin className='cursor-pointer hover:text-hover transition-all duration-300'/>
    </div>
    </div>


    <div className={`${isFullWidth ? "transition-width duration-500 ease-in-out bg-hover m-auto h-auto w-full flex items-center md:h-[75.6px] md:w-full lg:w-full ":"bg-hover m-auto h-auto max-w-[430px] flex items-center md:h-[75.6px] md:max-w-[1291px] lg:max-w-[1320px] "} `}> 

    <div className='text-primary grid-cols-1  pl-4  font-Jost text-[34px] md:text-[48px] font-semibold  md:pl-[20px]'>
     

    <div className={`flex justify-between items-center ${isFullWidth? " gap-64":" gap-56"} `}> 
     Environs
    <BiMenu onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }} className='md:hidden lg:hidden'/>
    </div>

    <div className={` ${isMenuOpen? `transition-width duration-500 ease-in-out text-[#0000008c] text-base font-normal grid-cols-1 font-Roboto`:`hidden` } `}>
       <div className='py-4'>  <Link to='/' className='hover:text-primary transition-all duration-200'>Home</Link> </div>
       <div className='pb-4' > <Link to='about' className='hover:text-primary transition-all duration-200'>About</Link></div>
       <div className='pb-4'> <Link to='services' className='hover:text-primary transition-all duration-200'>Services</Link> </div>
       <div className='pb-4'> <Link to='causes' className='hover:text-primary transition-all duration-200'>Causes</Link> </div>
       <div className='pb-4'><Link to='/events' className='hover:text-primary transition-all duration-200'>Events</Link> </div>
       <div className='pb-4'> <PagesDropdown/>  </div>   
        <div className='pb-4'> <Link to='contact'className='hover:text-primary transition-all duration-200' >Contact</Link></div> 
        <div className='pb-4'> <button className='btn '>Donate Now</button></div>
   </div>
    
    
  </div>
    
  <div className={`hidden text-[#0000008c] md:m-auto md:flex md:gap-2 lg:gap-7 items-center font-Roboto  justify-end ${isFullWidth? "w-[1283px]":"w-[1102px]"} `}>
        <Link to='/' className='hover:text-primary transition-all duration-200'>Home</Link>
        <Link to='about' className='hover:text-primary transition-all duration-200'>About</Link>
        <Link to='services' className='hover:text-primary transition-all duration-200'>Services</Link>
        <Link to='causes' className='hover:text-primary transition-all duration-200'>Causes</Link>
        <Link to='/events' className='hover:text-primary transition-all duration-200'>Events</Link>
          <PagesDropdown/>    
        <Link to='contact'className='hover:text-primary transition-all duration-200' >Contact</Link>
        <button className='btn mr-4'>Donate Now</button>
     </div>

     </div>
  </nav>
  
  </div>
  </>
}
