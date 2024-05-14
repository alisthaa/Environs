import React from 'react'
import breadCrumb from '../../assets/images/breadcrumb-bg.jpg'
import { Link } from 'react-router-dom'
export default function BreadCrumb(props) {
  return <>
  <div className='relative'>
<img src={breadCrumb} alt="" className='brightness-50'/>
<div className='absolute bottom-0  left-0 right-0 text-center py-12 px-3'> 
<p className='text-[64px] text-white font-Jost font-semibold mb-6'>{props.topic} </p>
<p className='text-white text-[20px] font-Roboto mb-6'>Help today because tomorrow you may be the one who needs more helping!</p>
<p className='text-white text-[20px] font-Roboto mb-6'>{props.p}</p>
<p className='flex justify-center items-center gap-1'>
    <Link to={'home'} className='text-primary hover:brightness-75 transition-all duration-300'>Home</Link>
    <p className='text-grey'>/</p>
    <p className='text-primary hover:brightness-75 transition-all duration-300 cursor-pointer'>Pages</p>
    <p className='text-grey'>/</p>
    <p className='text-white'>{props.page}</p>
</p>
</div>
  </div>
  </>
}
