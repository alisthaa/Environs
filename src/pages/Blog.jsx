import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FaClock, FaComment, FaHeart } from 'react-icons/fa6'
import { MdOutlineZoomIn } from "react-icons/md";
import { ImCross } from "react-icons/im";
import BreadCrumb from '../components/common/BreadCrumb'
import { Link } from 'react-router-dom';

export default function Blog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/blogs')
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
  
  
  const handleImageClick = (index) => {
    console.log("Clicked index:", index);
      setSelectedImage(index);
  };

  const handleCloseModal = () => {
      setSelectedImage(null);
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  return <>
  <BreadCrumb topic={'Latest News & Blog'} page={'Blog'}/>
  <div className='py-12 px-3'>
  <div className=' py-12 px-3 container'>
    <div  className='mx-auto text-center md:w-[800px] pb-12'>
      <p className='font-Jost text-xl text-primary  font-semibold mb-2'>LATEST NEWS</p>
      <p className='font-Jost text-[30px] md:text-[40px]  font-semibold '>Help today because tomorrow you may be the one who needs more helping!</p>
    </div>
    <div className='flex flex-wrap justify-center gap-6 '> 
{
  data.map((el,index)=>(
<div key={el._id} className='w-[306px] border'>
  <div className='group overflow-hidden relative'>
<img   src={`http://localhost:3000${el.image}`} alt="" className=' brightness-75 transition-all ease-in-out  transform group-hover:scale-125 group-hover:brightness-50 duration-500'/>

<div className='absolute text-white flex gap-20 bottom-0 p-5'> 
  <p className='flex justify-center items-center gap-2'><FaClock/> Dec 1.2024</p> 
   <div className='flex justify-center items-center gap-2'> 
     <p className='flex justify-center items-center gap-1'>3 <FaHeart/> </p> 
     <p className='flex justify-center items-center gap-1'> 0<FaComment/></p>
    </div>
</div>
<div className='absolute cursor-pointer hover:brightness-110 flex items-center justify-center h-12 w-12 bg-primary  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
<MdOutlineZoomIn onClick={() => handleImageClick(index)} className=' text-2xl text-white '/>
</div>
</div>
<div className='p-6 '> 
<p className='text-2xl font-Jost mb-4 font-semibold'>Save The Topic Forests</p>
<p className='font-Roboto mb-6  text-base'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
<Link to={`/blog/${el._id}`}>
  <button onClick={scrollToTop} className='btn'>Read More</button>
  </Link> 
</div>
</div>
 ))
}
{selectedImage !== null && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center ">
                    <div className='relative'> 
                    <img
                        src= {`http://localhost:3000${data[selectedImage].image}`}
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
  </>
}
