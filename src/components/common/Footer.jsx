import React, { useState,useEffect } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { TbCircleLetterC } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { MdOutlineZoomIn } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa6';
import axios from 'axios';
export default function Footer() {
    const [data, setData] = useState([]);
useEffect(() => {
  axios
    .get('http://localhost:3000/api/footer')
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      
    })
    .catch(err=>{
      console.log(err);   
    });
}, []);
    const handleSubmit = (e) => {
        e.preventDefault(); 
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Scroll smoothly to top
        });
    };


    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (index) => {
        setSelectedImage(index);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

  return <>
  
  <div className='px-3 py-12 bg-[#222222]  border-t-[3px] border-white border-dotted'>
  
<div className='container  flex flex-wrap justify-between text-white'>
    <div className='mt-12 w-[336px] h-[272px] px-6' >
     <p className='text-2xl font-Jost mb-6'>Newsletter</p>    
     <div className='text-base font-Roboto mb-6 text-grey '>
            <p className='my-2'>Dolor amet sit justo amet elitr clita</p>
            <p className='my-2'>ipsum elitr est.Lorem ipsum dolor sit</p>
            <p className='my-2'>amet, consectetur adipiscing elit</p>
            <p className='my-2'>consectetur adipiscing elit.</p>
        </div>
    <form className='relative'onSubmit={handleSubmit}>
        
        <input type="text" placeholder="Enter your email" className='py-4 px-6 w-full bg-secondary' />
        <button className='px-4 py-2 text-base border border-primary text-black bg-primary font-Roboto font-semibold hover:text-primary hover:bg-secondary transition duration-[0.5s] absolute right-0 m-2'>SignUp</button>
    </form>
    </div>
    <div className='mt-12 h-[336px] w-[272px] px-6'>
        <p className='text-2xl font-Jost mb-6'>Our Services</p>
        <div>
            <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Ocean Turtle</p>
            <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>White Tiger</p>
            <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Social Ecology</p>
            <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Loneliness</p>
            <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Beauty Of Life</p>
            <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Present For You</p>
            
            
        </div>
    </div>
    <div className='mt-12 h-[336px] w-[272px] px-6'>
    <p className='text-2xl font-Jost mb-6'>Volunteer</p>
    
    <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Karen Dawson</p>
    <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Jack Simmons</p>
    <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Michael Linden</p>
    <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Simon Green</p>
    <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Natalie Channing</p>
    <p onClick={scrollToTop} className=' cursor-pointer flex justify-start items-center gap-2 text-base font-Roboto mb-2 text-grey hover:text-primary hover:tracking-wider transition-all duration-300'><MdKeyboardArrowRight/>Caroline Gerwig</p>
    </div>
    <div className='mt-12   px-6'>
   <p className='text-2xl font-Jost mb-6'>Our Gallery</p>
   <div className='grid grid-cols-3 gap-2'>
   {
    data.map((el,index)=>(

    <div className='relative group overflow-hidden h-[90px] w-[90px] cursor-pointer '> 
    <img key={index} src={`http://localhost:3000${el.image}`} alt="" className='w-full h-full transition-all ease-in-out duration-300 transform group-hover:scale-125 group-hover:brightness-50' />
    <MdOutlineZoomIn  onClick={() => handleImageClick(index)} className='absolute text-white  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
    </div>

    ))
   
   }
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

</div>
  </div>
  <div className='bg-[#222222] border-t-[1px] border-grey'> 
  <div className='container px-3 py-6  text-white flex flex-wrap justify-between'>
<p className='flex flex-wrap gap-2 items-center'> <TbCircleLetterC/> <p className='text-primary hover:brightness-75 cursor-pointer transition-all duration-300'>Environs,</p> All right reserved</p>
<div className='flex flex-wrap gap-7 cursor-pointer items-center '>
    <FaFacebook/>
    <FaTwitter/>
    <FaInstagram/>
    <FaPinterest/>
    <FaLinkedin/>
</div>
<p className='flex flex-wrap gap-2 items-center'>Designed By <p className='text-primary hover:brightness-75 cursor-pointer transition-all duration-300'>HTML Codex</p> Distributed By <p className='text-primary hover:brightness-75 cursor-pointer transition-all duration-300'>ThemeWagon</p></p>
  </div>
  </div>
  </>
}
