import React, { useState } from 'react'
import about from '../assets/images/about-1.jpg'
import BreadCrumb from '../components/common/BreadCrumb';
import volunteer1 from '../assets/images/volunteers-1.jpg'
import volunteer2 from '../assets/images/volunteers-2.jpg'
import volunteer3 from '../assets/images/volunteers-3.jpg'
import volunteer4 from '../assets/images/volunteers-4.jpg'
import { FaCheck } from 'react-icons/fa6'
export default function About() {
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
    const data=[
      {
        image: volunteer1,
      },
      {
        image: volunteer3,
      },
      {
        image: volunteer2,
      },
      {
        image: volunteer4,
      },
    ]
    
  return <> 
  <BreadCrumb topic={'About Us'} page={'About Us'}/>
    <div className='py-10 px-3'> 
<div className='container my-12 h-auto md:h-[585px] md:flex '>
 <div className='h-[100%]'> <img src={about} className='p-6 w-full h-full'/> </div> 
 <div className='px-6 md:w-[1000px] pt-6' > 
   <p className='text-primary font-Jost mb-5 text-xl font-semibold'>ABOUT US </p>
   <h1 className='text-3xl md:text-[40px] font-Jost mb-8 font-semibold'>Our main goal is to protect environment </h1>
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

<div className=''>
<div className='py-12 px-3 bg-[#fff8ef]'>
<div className='pb-8'> 
<div className='container  mt-12 flex flex-wrap justify-center gap-12 '>


<div className='grid grid-cols-2 w-[536px] gap-6'>
{
  data.map(el=>(

<div className='relative w-full group overflow-hidden'>
  <img src={el.image} alt="" className=' w-full h-full brightness-90  transition-all duration-500 transform group-hover:scale-125 group-hover:brightness-50' />
  <div className='absolute bottom-0 text-white text-center p-5 left-14'>
  <p className='text-[20px] font-Jost mb-2 font-semibold'>Michel Brown</p>
  <p className='font-Roboto'>Communicator</p>
  </div>
  </div>
  ))
}
</div>


<div className='w-[736px] '>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>BECOME A VOLUNTEER?</p>
  <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6 '>Join your hand with us for a better life and beautiful future.</p>
  <p className='font-Roboto text-[#757575] mb-6'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
<div> 
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'> <FaCheck className='text-primary'/> We are friendly to each other.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'><FaCheck className='text-primary'/> If you join with us,We will give you free training.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'><FaCheck className='text-primary'/> Its an opportunity to help poor Environments.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'><FaCheck className='text-primary'/> No goal requirements.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-12'><FaCheck className='text-primary'/> Joining is tottaly free. We dont need any money from you.</p>
</div>
<button onClick={scrollToTop} className='btn' >Join With Us</button>

</div>


</div>

</div>
  </div>
  </div>

   </>
}
