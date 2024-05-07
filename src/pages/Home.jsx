
import React from 'react';
import Banner from '../components/home/Banner'
import volunteersbg from '../assets/images/volunteers-bg.jpg'
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Services from './Services';
import Donations from './Donations';
import Causes from './Causes';
import Events from './Events';
import Blog from './Blog';
import About from './About';
import Gallery from './Gallery'
export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
  return <>
  <Banner/>

  <About/>

<Services/>

<Donations/>

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


<Causes/>

<Events/>

<Blog/>

<Gallery/>
  </>
}
