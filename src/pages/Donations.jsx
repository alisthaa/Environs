import React from 'react'
import service2 from '../assets/images/service-2.jpg'
import donation1 from '../assets/images/donation-1.jpg'
import donation3 from '../assets/images/donation-3.jpg'
import BreadCrumb from '../components/common/BreadCrumb'

export default function Donations() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
const data =[
  {
    image: donation1,
    p:"ORGANIC"
  },
  {
    image: service2,
    p:"ECOSYSTEM"
  },
  {
    image: donation3,
    p:"RECYCLING"
  },
]
  return <>
   <BreadCrumb topic={'Donation'} page={'Donation'}/>
  <div className='py-12 px-3'>
  <div className='py-12 px-3' >
<div className='container '>
<div className='pb-5 mx-auto text-center'> 
<p className='font-Jost text-xl text-primary  font-semibold mb-2'>DONATION</p>
<p className='font-Jost text-[30px] md:text-[40px]  font-semibold'>Your money will save our life</p>
</div>

<div className='my-6 mx-3 flex flex-wrap justify-center gap-6'>
  {
    data.map((el, index)=>(

<div key={index} className='donation-item group h-full w-auto md:h-[500px] md:w-[415px] relative '> 
    <div className='realtive'> 
     <img src={el.image} alt="" className='w-full h-full object-cover'/>   

     </div>
     <div className='text-white donation-content flex flex-col '> 
     <p className='text-primary text-xl font-Jost mb-6 font-semibold'>{el.p}</p>
     <h1 className='text-[32px] md:text-[40px] font-Roboto font-semibold'>Help Us More</h1>
     <p className='font-Jost text-2xl mb-6'>Protect Environments</p>
     <p className='text-base font-Roboto mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
    <button onClick={scrollToTop} className='donation-btn btn self-start transition-transform duration-300 ease-in-out'>Donate!</button>
     </div>
  </div>
    ))
  }
  
  


</div>
<div className='mx-auto text-center'> 
<button onClick={scrollToTop} className='btn'>All Donation</button>
</div>
</div>
</div>
</div>
  </>
}
