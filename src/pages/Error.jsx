import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import { BiError } from "react-icons/bi";
import { Link } from 'react-router-dom';
export default function Error() {
  return <>
  <BreadCrumb topic={'404 Error'} page={'404'} p={'Oops! Page Not Found'}/>
  <div className='px-3 py-12 bg-grey bg-opacity-30'>
<div className='px-3 py-12 container'>
<div className='mx-auto text-center'>
  <p className='flex justify-center'>
  <BiError className='h-20 w-20 text-primary'/>
  </p>
  <p className='text-[80px] font-Jost  mb-2 font-bold text-[#222222]'>404</p>
  <p className='font-Jost mb-6 text-xl text-[#222222] font-semibold'>Page Not Found</p>
  <p className='text-base mb-6 font-Roboto text-[#222222]'>We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
<Link to={'/'} className='Bbtn text-[#222222] '>Go Back To Home</Link>
</div>
</div>
  </div>
  </>
}
