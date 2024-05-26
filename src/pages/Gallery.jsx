import React, { useState,useEffect } from 'react'
import { MdOutlineZoomIn } from "react-icons/md";
import { ImCross } from 'react-icons/im';
import BreadCrumb from '../components/common/BreadCrumb'
import axios from 'axios'
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/gallery')
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
 
    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

  return <>
  <BreadCrumb topic={'Image Gallery'} page={'Gallery'}/>
  <div className='py-24'>
  <div  className='mx-auto text-center md:w-[800px] pb-12'>
      <p className='font-Jost text-xl text-primary  font-semibold mb-2'>OUR WORK</p>
      <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-4'>We consider environment welfare</p>
      <div className='font-Roboto text-[#757575]'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</div>
    </div>

<div className=' flex flex-wrap sm:flex-wrap md:flex-nowrap lg:flex-nowrap justify-center'>

<div className="w-full">

  <div className='relative group overflow-hidden z-[1px]'> 
  {data.length > 0 && (
  <img src={`http://localhost:3000${data[0].image}`} alt="" className='w-full transition-all duration-500 group-hover:transform group-hover:scale-110'/>
)}
  <div className='absolute w-full h-0 bottom-0 left-0 bg-primary bg-opacity-40 text-center flex flex-col justify-end transition-all duration-500 z-20 group-hover:h-[100%]'>
  <div className='text-white transition-all duration-500  bg-opacity-10 pt-10 p-16 flex flex-col items-center justify-center group-hover:bg-primary'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  </div>
  <div className=' cursor-pointer bg-white p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-n20 opacity-0 transition-all duration-500 z-30 group-hover:opacity-100'>
<MdOutlineZoomIn onClick={() => handleImageClick(0)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
</div>
  </div>
 



  <div className='relative group overflow-hidden z-[1px]'> 
  {data.length > 0 && (
  <img src={`http://localhost:3000${data[1].image}`} alt="" className='w-full transition-all duration-500 group-hover:transform group-hover:scale-110'/>
)}
  <div className='absolute w-full h-0 bottom-0 left-0 bg-primary bg-opacity-40 text-center flex flex-col justify-end transition-all duration-500 z-20 group-hover:h-[100%]'>
  <div className='text-white transition-all duration-500  bg-opacity-10 pt-10 p-16 flex flex-col items-center justify-center group-hover:bg-primary'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  </div>
  <div className='cursor-pointer bg-white p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-n20 opacity-0 transition-all duration-500 z-30 group-hover:opacity-100'>
<MdOutlineZoomIn onClick={() => handleImageClick(1)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
</div>
  </div>


  
</div>





<div className="w-full">
<div className='relative group overflow-hidden z-[1px]'> 
{data.length > 0 && (
  <img src={`http://localhost:3000${data[2].image}`} alt="" className='w-full transition-all duration-500 group-hover:transform group-hover:scale-110'/>
)}
  <div className='absolute w-full h-0 bottom-0 left-0 bg-primary bg-opacity-40 text-center flex flex-col justify-end transition-all duration-500 z-20 group-hover:h-[100%]'>
  <div className='text-white transition-all duration-500  bg-opacity-10 pt-10 p-16 flex flex-col items-center justify-center group-hover:bg-primary'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  </div>
  <div className='cursor-pointer bg-white p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-n20 opacity-0 transition-all duration-500 z-30 group-hover:opacity-100'>
<MdOutlineZoomIn onClick={() => handleImageClick(2)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
</div>
  </div>
</div>

<div className="w-full">


<div className='relative group overflow-hidden z-[1px]'> 
{data.length > 0 && (
  <img src={`http://localhost:3000${data[3].image}`} alt="" className='w-full transition-all duration-500 group-hover:transform group-hover:scale-110'/>
)}
  <div className='absolute w-full h-0 bottom-0 left-0 bg-primary bg-opacity-40 text-center flex flex-col justify-end transition-all duration-500 z-20 group-hover:h-[100%]'>
  <div className='text-white transition-all duration-500  bg-opacity-10 pt-10 p-16 flex flex-col items-center justify-center group-hover:bg-primary'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  </div>
  <div className='cursor-pointer bg-white p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-n20 opacity-0 transition-all duration-500 z-30 group-hover:opacity-100'>
<MdOutlineZoomIn onClick={() => handleImageClick(3)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
</div>
  </div>


  <div className='relative group overflow-hidden z-[1px]'> 
  {data.length > 0 && (
  <img src={`http://localhost:3000${data[4].image}`} alt="" className='w-full transition-all duration-500 group-hover:transform group-hover:scale-110'/>
)}
  <div className='absolute w-full h-0 bottom-0 left-0 bg-primary bg-opacity-40 text-center flex flex-col justify-end transition-all duration-500 z-20 group-hover:h-[100%]'>
  <div className='text-white transition-all duration-500  bg-opacity-10 pt-10 p-16 flex flex-col items-center justify-center group-hover:bg-primary'> 
  <p className='text-2xl font-Jost font-semibold'>Beauty Of Life</p>
  <p className='font-Roboto'>Gallery Name</p>
  </div>
  </div>
  <div className='cursor-pointer bg-white p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-n20 opacity-0 transition-all duration-500 z-30 group-hover:opacity-100'>
<MdOutlineZoomIn onClick={() => handleImageClick(4)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
</div>
  </div>


  
</div>




{selectedImage !== null && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center ">
                    <div className='relative'> 
                    <img
                        src={`http://localhost:3000${data[selectedImage].image}`}
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
