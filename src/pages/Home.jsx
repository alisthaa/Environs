
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

<div className='bg-hover px-3 py-12'>
  <div className='px-3 py-12'>  
  <div className='container '> 
  <div className='mx-auto text-center'> 
  <p className=' text-primary text-xl font-Jost font-semibold mb-2'>WHAT WE DO</p>
  <p className=' text-[30px] md:text-[40px] font-Jost font-semibold '>What we do to protect environment</p>
  </div>
  
  
 <div className='flex flex-wrap justify-center mt-6 mx-3'>

  <div className='relative flex flex-col px-3 mt-6 '>
    <img src={service1} className='  w-[306px] h-[367px]  brightness-75 hover:brightness-50 transition duration-300'/>
    <p className='group absolute bottom-36 mx-auto text-2xl font-Jost font-semibold  text-white p-2 hover:text-primary cursor cursor-pointer'>Raising money to help</p>
    <p className='w-[306px] h-[96px] my-6 text-[#757575] text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  </div>

  <div className='relative flex flex-col px-3 mt-6'>
    <img src={service2} className='w-[306px] h-[367px] brightness-75 hover:brightness-50 transition duration-300'/>
    <p className='absolute bottom-36 mx-auto text-2xl font-Jost font-semibold text-white p-2 hover:text-primary cursor-pointer'>Close work with services</p>
    <p className='w-[306px] h-[96px] my-6 text-[#757575] text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  </div>

  <div className='relative flex flex-col px-3 mt-6'>
    <img src={service3} className='w-[306px] h-[367px] brightness-75 hover:brightness-50 transition duration-300'/>
    <p className='absolute bottom-36 mx-auto text-2xl font-Jost font-semibold text-white p-2 hover:text-primary cursor-pointer'>Pro Guided tours only</p>
    <p className='w-[306px] h-[96px] my-6 text-[#757575] text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  </div>
  
  <div className='relative flex flex-col px-3 mt-6'>
    <img src={service4} className='w-[306px] h-[367px] brightness-75 hover:brightness-50 transition duration-300'/>
    <p className='absolute bottom-36 mx-auto text-2xl font-Jost font-semibold text-white p-2 hover:text-primary cursor-pointer'>Protecting animal area</p>
    <p className='w-[306px] h-[96px] my-6 text-[#757575] text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  </div>

<button onClick={scrollToTop} className='btn mt-4'>Read More</button>

  </div>
     
  </div>
  </div>
</div>
{/* services ends */}


{/* donation begins */}
<div className='py-12 px-3'>
  <div className='py-12 px-3' >
<div className='container '>
<div className='pb-5 mx-auto text-center'> 
<p className='font-Jost text-xl text-primary  font-semibold mb-2'>DONATION</p>
<p className='font-Jost text-[30px] md:text-[40px]  font-semibold'>Your money will save our life</p>
</div>

<div className='my-6 mx-3 flex flex-wrap justify-center gap-6'>
  <div className=' group h-full w-auto md:h-[500px] md:w-[415px] relative '> 
    <div className='realtive'> 
     <img src={donation1} alt="" className='brightness-75 group-hover:brightness-50 transition-all duration-300'/>    
     </div>
     <div className='text-white absolute bottom-0 left-0 p-5 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-3'> 
     <p className='text-primary text-xl font-Jost mb-6 font-semibold'>ORGANIC</p>
     <h1 className='text-[32px] md:text-[40px] font-Roboto font-semibold'>Help Us More</h1>
     <p className='font-Jost text-2xl mb-6'>Protect Environments</p>
     <p className='text-base font-Roboto mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    <button onClick={scrollToTop} className='btn hidden group-hover:block transition-transform  duration-300 ease-in-out translate-y-0 group-hover:-translate-y-3'>Donate!</button>
     </div>
  </div>
  <div className=' group h-full w-auto md:h-[500px] md:w-[415px]  relative '> 
    <div className='realtive'> 
     <img src={service2} alt="" className='brightness-75 group-hover:brightness-50 transition-all duration-300'/>    
     </div>
     <div className='text-white absolute bottom-0 left-0 p-5 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-3'> 
     <p className='text-primary text-xl font-Jost mb-6 font-semibold'>ECOSYSTEM</p>
     <h1 className='text-[32px] md:text-[40px] font-Roboto font-semibold'>Help Us More</h1>
     <p className='font-Jost text-2xl mb-6'>Protect Environments</p>
     <p className='text-base font-Roboto mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    <button onClick={scrollToTop} className='btn hidden group-hover:block transition-transform  duration-300 ease-in-out translate-y-0 group-hover:-translate-y-3'>Donate!</button>
     </div>
  </div>
  <div className=' group h-full w-auto md:h-[500px] md:w-[415px] relative '> 
    <div className='realtive'> 
     <img src={donation3} alt="" className='brightness-75 group-hover:brightness-50 transition-all duration-300'/>    
     </div>
     <div className='text-white absolute bottom-0 left-0 p-5 transition-transform duration-300 ease-in-out transform translate-y-0 group-hover:-translate-y-3'> 
     <p className='text-primary text-xl font-Jost mb-6 font-semibold'>RECYCLING</p>
     <h1 className='text-[32px] md:text-[40px] font-Roboto font-semibold'>Help Us More</h1>
     <p className='font-Jost text-2xl mb-6'>Protect Environments</p>
     <p className='text-base font-Roboto mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    <button onClick={scrollToTop} className='btn hidden group-hover:block transition-transform  duration-300 ease-in-out translate-y-0 group-hover:-translate-y-3'>Donate!</button>
     </div>
  </div>


</div>
<div className='mx-auto text-center'> 
<button onClick={scrollToTop} className='btn'>All Donation</button>
</div>
</div>
</div>
</div>
{/* donation ends */}

{/* achievments begins */}

<div className='relative'> 
<img src={volunteersbg} className='brightness-75'/>
<div className='py-10 px-3 absolute  top-0 left-0 right-0'> 
<div className='absolute container top-0 left-0 right-0'>
<div className='mx-auto text-center md:w-[800px]'>
  <p>ACHIEVEMENTS</p>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
</div>
<div> 
     <div></div>
     <div></div>
     <div></div>
     <div></div>
</div>
<button>Join With Us</button>
</div>
</div>
</div>


{/* achievements ends */}

  </>
}
