
import React, { useState } from 'react';
import Banner from '../components/home/Banner'
import about from '../assets/images/about-1.jpg'
import service1 from '../assets/images/service-1.jpg'
import service2 from '../assets/images/service-2.jpg'
import service3 from '../assets/images/service-3.jpg'
import service4 from '../assets/images/service-4.jpg'
import donation1 from '../assets/images/donation-1.jpg'
import donation3 from '../assets/images/donation-3.jpg'
import volunteersbg from '../assets/images/volunteers-bg.jpg'
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Services from './Services';
import Donations from './Donations';
import Causes from './Causes';
import Events from './Events';
export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
const [activeButton, setActiveButton] = useState(1);
const [buttonContent, setButtonContent] = useState({
  1: " 1",
  2: " 2",
  3: " 3"
});
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    
  return <>
  <Banner/>

  {/* about us begins */}
  <div className='py-10 px-3'> 
<div className='container my-12 h-[315px] md:h-[585px] md:flex '>
 <div className='h-[100%]'> <img src={about} className='p-6 w-full h-full'/> </div> 
 <div className='px-6 md:w-[1000px] pt-6' > 
   <p className='text-primary font-Jost mb-2 text-xl font-semibold'>ABOUT US </p>
   <h1 className='text-[40px] font-Jost mb-6 font-semibold'>Our main goal is to protect environment </h1>
   <p className='mb-6 text-xl font-Roboto text-[#757575]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
   <div className='p-6 font-Roboto bg-secondary'> 
    <div className='flex flex-wrap gap-4 mb-4 text-base'>

    <button  onClick={() => handleButtonClick(1)} 
    className={`px-10 py-2 transition-all duration-300 ${activeButton === 1 ? 'text-white bg-primary':'bg-white text-black'} `} >About</button>
    <button onClick={() => handleButtonClick(2)} className={`px-10 py-2 transition-all duration-300 ${activeButton === 2 ? 'text-white bg-primary':'bg-white text-black'} `}>Mission</button>
    <button onClick={() => handleButtonClick(3)} className={`px-10 py-2 transition-all duration-300 ${activeButton === 3 ? 'text-white bg-primary':'bg-white text-black'} `}>Vision</button>

     </div>
     {activeButton && (
                    <p className='text-xl mb-4'>LOREM IPSUM{buttonContent[activeButton]}</p>
                )}
     
     <p className='text-base mb-6 text-[#757575]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
     <button onClick={scrollToTop} className='btn border border-primary'>Read More</button>
   </div> 
   </div>
</div>
</div>

{/* about us ends */}


{/* services begins */}

<Services/>
{/* services ends */}


{/* donation begins */}
<Donations/>
{/* donation ends */}

{/* achievments begins */}

<div className='relative '> 
<img src={volunteersbg} className='brightness-50 h-screen '/>
<div className='py-10 px-3 absolute top-0 left-0 right-0'> 
<div className='absolute py-10 px-3 container top-0 left-0 right-0'>
<div className='mx-auto py-10 px-3 text-center md:w-[800px]'>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>ACHIEVEMENTS</p>
  <p className='text-base font-Roboto text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
</div>
<div className='my-6 mx-3 flex flex-wrap justify-center gap-6'> 
     <div className='border border-white w-[298px] h-[306px]'>
      <div className='p-12 mx-auto text-center'> 
      <p className='text-white flex justify-center'><FaThumbsUp className='h-[64px] w-[64px]'/></p>
      <p className='my-6 text-2xl md:text-[28px] text-white font-Jost font-semibold'>Beavers Saved</p>
      <p className=' border-[3px] border-white border-dotted  text-2xl md:text-3xl font-Roboto py-3 px-2 font-bold text-primary'>3600 +</p>
      </div>
     </div>
     <div className='border border-white w-[298px] h-[306px]'>
      <div className='p-12 mx-auto text-center'> 
      <p className='text-white flex justify-center'><FaFileInvoiceDollar className='h-[64px] w-[64px]'/></p>
      <p className='my-6 text-2xl md:text-[28px] text-white font-Jost font-semibold'>Fund Collected</p>
      <p className=' border-[3px] border-white border-dotted  text-2xl md:text-3xl font-Roboto py-3 px-2 font-bold text-primary'>513 $</p>
      </div>
     </div>
     <div className='border border-white w-[298px] h-[306px]'>
      <div className='p-12 mx-auto text-center'> 
      <p className='text-white flex justify-center'><IoPerson className='h-[64px] w-[64px]'/></p>
      <p className='my-6 text-2xl md:text-[28px] text-white font-Jost font-semibold'>Volunteer</p>
      <p className=' border-[3px] border-white border-dotted text-2xl md:text-3xl font-Roboto py-3 px-2 font-bold text-primary'>713 +</p>
      </div>
     </div>
     <div className='border border-white w-[298px] h-[306px]'>
      <div className='p-12 mx-auto text-center'> 
      <p className='text-white flex justify-center'><FaHeart className='h-[64px] w-[64px]'/></p>
      <p className='my-6 text-2xl md:text-[28px] text-white font-Jost font-semibold'>Days of Help</p>
      <p className=' border-[3px] border-white border-dotted text-2xl md:text-3xl font-Roboto py-3 px-2 font-bold text-primary'>487 +</p>
      </div>
     </div>
<div >

</div>
    
</div>
<div className='mx-auto text-center'> 
<button onClick={scrollToTop} className='btn' >Join With Us</button>
</div>
</div>
</div>
</div>


{/* achievements ends */}

{/* causes starts */}
<Causes/>
{/* causes ends */}
{/* evnets */}
<Events/>
{/* events end */}
  </>
}
