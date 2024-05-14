import React from 'react'
import BreadCrumb from '../components/common/BreadCrumb'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Contact() {
  return <>
  <BreadCrumb topic={'Contact Us'} page= {'Contact'}/>
  <div className='py-12 px-3'>
<div className='py-12 px-3'>
<div className='container flex flex-wrap justify-between p-12 bg-secondary border-x-[3px] border-y-[3px] border-dotted border-white'>
   <div className='w-[484px]'>
    <p className='text-[40px] font-Jost mb-6 font-semibold text-[#222222]'>Get in touch</p>
    <p className='text-grey font-Roboto text-base mb-6'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.  <a class="text-black font-semibold" href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
    <form className=''>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div class="mb-3 sm:mb-0">
            <input type="text" class="w-full bg-white border border-gray-200  py-3 px-4 focus:outline-none focus:ring focus:border-blue-300" placeholder="Your First Name"/>
        </div>
        <div class="mb-3 sm:mb-0">
            <input type="email" class="w-full bg-white border border-gray-200  py-3 px-4 focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Email"/>
        </div>
        <div class="mb-3 sm:mb-0">
            <input type="text" class="w-full bg-white border border-gray-200 py-3 px-4 focus:outline-none focus:ring focus:border-blue-300" placeholder="Your Phone"/>
        </div>
        <div class="mb-3 sm:mb-0">
            <input type="text" class="w-full bg-white border border-gray-200  py-3 px-4 focus:outline-none focus:ring focus:border-blue-300" placeholder="Subject"/>
        </div>
       
        
    </div>
    <div class="mb-3 mt-4">
            <textarea class="w-full bg-white border border-gray-200  py-3 px-4 focus:outline-none focus:ring focus:border-blue-300" rows="7" placeholder="Your Message"></textarea>
        </div>
    <div className='mb-5 md:mb-0 lg:mb-0'>
            <button class="w-full  btn  py-3 px-5 text-black" type="submit">Submit</button>
        </div>
</form>
   </div>
   <div>
       <div className='flex flex-wrap justify-center gap-6 mb-2'>
          <div className='bg-white p-6 w-full md:w-[213px]'>
          <FaLocationDot className='h-8 w-6 text-primary py-1' />
          <p className='text-[#222222] text-2xl font-Jost mb-2 font-semibold'>Address</p>
          <p className='font-Roboto text-grey'>123 street New York</p>
          </div>
          <div className='bg-white p-6 w-full md:w-[213px]'>
          <MdMail className='h-8 w-6 text-primary py-1' />
          <p className='text-[#222222] text-2xl font-Jost mb-2 font-semibold'>Mail Us</p>
          <p className='font-Roboto text-grey'>info@example.com</p>
          </div>
          <div className='bg-white p-6 w-full md:w-[213px]'>
          <FaPhoneAlt className='h-8 w-6 text-primary py-1' />
          <p className='text-[#222222] text-2xl font-Jost mb-2 font-semibold'>Telephone</p>
          <p className='font-Roboto text-grey'>(+012) 3456 7890 123</p>
          </div>         
       </div>
       <div class="lg:col-span-12 mt-6 ">
    <iframe class="w-full h-[400px] mb-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

       
   </div>
</div>
</div>
  </div>
  </>
}
