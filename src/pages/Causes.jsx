import React from 'react'
import cause1 from '../assets/images/causes-1.jpg'
import cause2 from '../assets/images/causes-2.jpg'
import cause3 from '../assets/images/causes-3.jpg'
import cause4 from '../assets/images/causes-4.jpg'
import { VscGraph } from "react-icons/vsc";
import { FaThumbsUp } from 'react-icons/fa'
import BreadCrumb from '../components/common/BreadCrumb'
export default function Causes() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
const data=[
  {
    image: cause4,
    p: "First environments activity of"
  },
  {
    image: cause2,
    p: "Build school for poor children."
  },
  {
    image: cause3,
    p: "Building clean-water system for rural poor."
  },
  {
    image: cause1,
    p: "First environments activity of this summer."
  },
]
  return <>
  <BreadCrumb topic={'Recent Causes'} page={'Causes'}/>
  <div className='py-12 px-3'>
<div className=' py-12 px-3 container'>
  <div className='mx-auto text-center md:w-[800px] '>
    <p className='font-Jost text-xl text-primary  font-semibold mb-2'>RECENT CAUSES</p>
    <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6'>The environment needs our protection</p>
    <div className='font-Roboto text-[#757575]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
  </div>
  <div className='my-6 mx-3 pt-6 flex flex-wrap justify-center gap-6'>

{
  data.map(el=>(
<div className='w-[306px] '>

<div className='relative bg-[#757575]'>
  <img src={el.image} className='h-full transform transition duration-500 hover:scale-x-[-1] hover:brightness-50' />
   <div className='absolute top-0 right-0 p-2'>
    <button onClick={scrollToTop} className='btn'>Donate Now</button>
   </div>
  <p className='absolute bottom-0 left-0 p-2 flex items-center font-Roboto text-sm gap-2 font-semibold text-white'><VscGraph className='text-primary'/> Goal: $3600</p>
  <p className='absolute bottom-0 right-0 p-2 flex items-center font-Roboto text-sm gap-2 font-semibold text-white'> <FaThumbsUp className='text-primary' /> Raised: $4000</p>
</div>
<div className='h-[10px] bg-[#e9ecef] '></div>
<div className='bg-secondary  p-6 border-b-[3px] border-x-[3px] border-white border-dotted'>
  <p className='text-2xl font-Jost mb-4 font-semibold'>{el.p}</p>
  <p className='text-base font-Roboto mb-6 text-[#757575]'>Help today because tomorrow you may be the one who needs more helping!</p>
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
