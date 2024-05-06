
import React, { useState } from 'react';
import Banner from '../components/home/Banner'
import about from '../assets/images/about-1.jpg'
import service1 from '../assets/images/service-1.jpg'
import service2 from '../assets/images/service-2.jpg'
import service3 from '../assets/images/service-3.jpg'
import service4 from '../assets/images/service-4.jpg'
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

    const data = [
      {
        image: service1,
        p: "Raising money to help"
      },
      {
        image: service2,
        p: "Close work with services"
       },
      {
        image: service3,
        p: "Pro guides tours only"
       },
      {
        image: service4,
        p: "Protecting animal area"
       },
    ];
  return <>
  <Banner/>
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


<div className='bg-hover px-3 py-12'>
  <div className='px-3 py-12'>  
  <div className='container'> 
  <p className='flex justify-center text-primary text-xl font-Jost font-semibold mb-2'>WHAT WE DO</p>
  <p className='flex justify-center text-[30px] md:text-[40px] font-Jost font-semibold '>What we do to protect environment</p>
    
  
  
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

<button className='btn mt-4'>Read More</button>

  </div>
     
 
  
  </div>

  </div>
 
</div>



  </>
}
