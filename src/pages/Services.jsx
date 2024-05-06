import React from 'react'
import service1 from '../assets/images/service-1.jpg'
import service2 from '../assets/images/service-2.jpg'
import service3 from '../assets/images/service-3.jpg'
import service4 from '../assets/images/service-4.jpg'
export default function Services() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
  return<>
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
  </>
}
