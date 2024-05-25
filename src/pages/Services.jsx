import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BreadCrumb from '../components/common/BreadCrumb'

export default function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/services')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(false)
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
 
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
if (loading) {
  return <div>Loading...</div>;
}
  return<>
  <BreadCrumb topic={'Our Services'} page={'Services'}/>
  <div className='bg-hover px-3 py-12'>
  <div className='px-3 py-12'>  
  <div className='container '> 
  <div className='mx-auto text-center'> 
  <p className=' text-primary text-xl font-Jost font-semibold mb-2'>WHAT WE DO</p>
  <p className=' text-[30px] md:text-[40px] font-Jost font-semibold '>What we do to protect environment</p>
  </div>
  
  
 <div className='flex flex-wrap justify-center mt-6 mx-3'>
{
  data.map((el, index)=>(
<div key={index} className='relative flex flex-col px-3 mt-6 overflow-hidden group '>
    <div className=' w-[306px] h-[367px] overflow-hidden'>
    <img src={`http://localhost:3000${el.image}`} className='   brightness-75 ease-in-out  transform group-hover:scale-125 group-hover:brightness-50 transition-all duration-500'/>
    </div>
    <div> 
    <p className=' absolute bottom-36 mx-auto text-2xl font-Jost font-semibold  text-white p-2 hover:text-primary cursor cursor-pointer'>{el.p}</p>
    <p className='w-[306px] h-[96px] my-6 text-[#757575] text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  </div>
  </div>

  ))
}
  

  
<button onClick={scrollToTop} className='btn mt-4'>Read More</button>

  </div>
     
  </div>
  </div>
</div>
  </>
}
