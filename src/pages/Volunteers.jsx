import React, { useEffect, useState } from 'react'
import volunteer1 from '../assets/images/volunteers-1.jpg'
import volunteer2 from '../assets/images/volunteers-2.jpg'
import volunteer3 from '../assets/images/volunteers-3.jpg'
import volunteer4 from '../assets/images/volunteers-4.jpg'
import { TiTick } from "react-icons/ti";
import { FaCheck } from 'react-icons/fa6'
import BreadCrumb from '../components/common/BreadCrumb'
import axios from 'axios'

export default function Volunteers() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
const [data, setData] = useState([]);
useEffect(() => {
  axios
    .get('http://localhost:3000/api/volunteer')
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      
    })
    .catch(err=>{
      console.log(err);   
    });
}, []);
  return <>
   <BreadCrumb topic={'Our Volunteers'} page={'Volunteers'}/>
  <div className='mt-12'>
<div className='py-12 px-3 bg-[#fff8ef]'>
<div className='pb-8'> 
<div className='container mt-12 flex flex-wrap justify-center gap-12 '>


<div className='grid grid-cols-2 w-[536px] gap-6'>
{
  data.map((el,index)=>(

<div key={index} className='relative w-full group overflow-hidden'>
  <img src={`http://localhost:3000${el.image}`} alt="" className=' w-full h-full brightness-90  transition-all duration-500 transform group-hover:scale-125 group-hover:brightness-50' />
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
