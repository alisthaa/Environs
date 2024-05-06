import React from 'react'
import service2 from '../assets/images/service-2.jpg'
import donation1 from '../assets/images/donation-1.jpg'
import donation3 from '../assets/images/donation-3.jpg'
export default function Donations() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
  return <>
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
  </>
}
