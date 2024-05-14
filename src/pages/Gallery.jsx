import React, { useState } from 'react'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import gallery4 from '../assets/images/gallery-4.jpg'
import gallery5 from '../assets/images/gallery-5.jpg'
import { MdOutlineZoomIn } from "react-icons/md";
import { ImCross } from 'react-icons/im';
import BreadCrumb from '../components/common/BreadCrumb'
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

  return <>
  <BreadCrumb topic={'Image Gallery'} page={'Gallery'}/>
  <div className='py-12'>
  <div  className='mx-auto text-center md:w-[800px] pb-12'>
      <p className='font-Jost text-xl text-primary  font-semibold mb-2'>OUR WORK</p>
      <p className='font-Jost text-[30px] md:text-[40px]  font-semibold '>We consider environment welfare</p>
      <div className='font-Roboto text-[#757575]'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</div>
    </div>



<div className=' flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-center'>

<div className="w-full">

  <div className='relative group'> 
  <img src={gallery2} alt="" className='w-full'/>
  <div className='absolute w-full h-full top-0 left-0 bg-primary opacity-0 group-hover:opacity-25 transition-opacity duration-300'></div>
  <div className='absolute w-full bottom-0 pt-[40px] pb-[48px] text-white left-1/2 transform -translate-x-1/2 text-center group-hover:bg-primary transition-all duration-300'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  <div className='absolute cursor-pointer hover:brightness-125 flex items-center justify-center h-12 w-12 bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn onClick={() => handleImageClick(gallery2)} className=' text-2xl text-primary '/>
</div>
  </div>

  <div className='relative group'> 
  <img src={gallery3} alt="" className='w-full'/>
  <div className='absolute w-full h-full top-0 left-0 bg-primary opacity-0 group-hover:opacity-25 transition-opacity duration-300'></div>
  <div className='absolute w-full bottom-0 pt-[40px] pb-[48px] text-white left-1/2 transform -translate-x-1/2 text-center group-hover:bg-primary transition-all duration-300'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  <div className='absolute cursor-pointer hover:brightness-125 flex items-center justify-center h-12 w-12 bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn onClick={() => handleImageClick(gallery3)} className=' text-2xl text-primary '/>
</div>
  </div>


  
</div>





<div className="w-full">
<div className='relative group'> 
  <img src={gallery1} alt="" className='w-full'/>
  <div className='absolute w-full h-full top-0 left-0 bg-primary opacity-0 group-hover:opacity-25 transition-opacity duration-300'></div>
  <div className='absolute w-full bottom-0 pt-[40px] pb-[48px] text-white left-1/2 transform -translate-x-1/2 text-center group-hover:bg-primary transition-all duration-300'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  <div className='absolute cursor-pointer hover:brightness-125 flex items-center justify-center h-12 w-12 bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn onClick={() => handleImageClick(gallery1)} className=' text-2xl text-primary '/>
</div>
  </div>
</div>

<div className="w-full">
<div className='relative group'> 
  <img src={gallery4} alt="" className='w-full'/>
  <div className='absolute w-full h-full top-0 left-0 bg-primary opacity-0 group-hover:opacity-25 transition-opacity duration-300'></div>
  <div className='absolute w-full bottom-0 pt-[40px] pb-[48px] text-white left-1/2 transform -translate-x-1/2 text-center group-hover:bg-primary transition-all duration-300'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  <div className='absolute cursor-pointer hover:brightness-125 flex items-center justify-center h-12 w-12 bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn onClick={() => handleImageClick(gallery4)} className=' text-2xl text-primary '/>
</div>
  </div>
  <div className='relative group'> 
  <img src={gallery5} alt="" className='w-full'/>
  <div className='absolute w-full h-full top-0 left-0 bg-primary opacity-0 group-hover:opacity-25 transition-opacity duration-300'></div>
  <div className='absolute w-full bottom-0 pt-[40px] pb-[48px] text-white left-1/2 transform -translate-x-1/2 text-center group-hover:bg-primary transition-all duration-300'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  <div className='absolute cursor-pointer hover:brightness-125 flex items-center justify-center h-12 w-12 bg-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn onClick={() => handleImageClick(gallery5)} className=' text-2xl text-primary '/>
</div>
  </div>
</div>

{selectedImage !== null && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center ">
                    <div className='relative'> 
                    <img
                        src={selectedImage}
                        alt=""
                        className="max-w-full max-h-full p-2 bg-white"
                    />
                   <button
                        className=" absolute bottom-0 right-0 m-4 p-2 brightness-75 hover:brightness-[100%] transition-all duration-300"
                        onClick={handleCloseModal}
                    >
                        <ImCross />
                    </button>
                    </div>
                </div>
            )}



</div>


  </div>
  </>
}
