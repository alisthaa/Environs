import React from 'react'
import blog1 from '../assets/images/blog-1.jpg'
import blog2 from '../assets/images/blog-2.jpg'
import blog3 from '../assets/images/blog-3.jpg'
import blog4 from '../assets/images/blog-4.jpg'
import { FaClock, FaComment, FaHeart } from 'react-icons/fa6'
import { MdOutlineZoomIn } from "react-icons/md";
export default function Blog() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
  const data=[
    {
      image: blog1,
    },
    {
      image: blog2,
    },
    {
      image: blog3,
    },
    {
      image: blog4,
    },
  ]
  return <>
  <div className='py-12 px-3'>
  <div className=' py-12 px-3 container'>
    <div  className='mx-auto text-center md:w-[800px] pb-12'>
      <p className='font-Jost text-xl text-primary  font-semibold mb-2'>LATEST NEWS</p>
      <p className='font-Jost text-[30px] md:text-[40px]  font-semibold '>Help today because tomorrow you may be the one who needs more helping!</p>
    </div>
    <div className='flex justify-center gap-6 '> 
{
  data.map(el=>(
<div className='w-[306px] border'>
  <div className='group relative'>
<img src={el.image} alt="" className=' brightness-75 group-hover:brightness-50 transition-all duration-300 '/>

<div className='absolute text-white flex gap-20 bottom-0 p-5'> 
  <p className='flex justify-center items-center gap-2'><FaClock/> Dec 1.2024</p> 
   <div className='flex justify-center items-center gap-2'> 
     <p className='flex justify-center items-center gap-1'>3 <FaHeart/> </p> 
     <p className='flex justify-center items-center gap-1'> 0<FaComment/></p>
    </div>
</div>
<div className='absolute cursor-pointer hover:brightness-110 flex items-center justify-center h-12 w-12 bg-primary  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn className=' text-2xl text-white '/>
</div>
</div>
<div className='p-6 '> 
<p className='text-2xl font-Jost mb-4 font-semibold'>Save The Topic Forests</p>
<p className='font-Roboto mb-6  text-base'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
<button onClick={scrollToTop} className='btn'>Read More</button>
</div>
</div>
 ))
}
   </div>

  </div>
  </div>
  </>
}
