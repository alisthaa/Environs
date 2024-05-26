
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Banner from '../components/home/Banner'
import about from '../assets/images/about-1.jpg'
import volunteersbg from '../assets/images/volunteers-bg.jpg'
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight, FaLocationDot } from 'react-icons/fa6'
import { SlCalender } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCheck } from 'react-icons/fa6'
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { FaClock, FaComment,  } from 'react-icons/fa6'
import { MdOutlineZoomIn } from "react-icons/md";
import { ImCross } from "react-icons/im";
import CounterItem from './CounterItem';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';
export default function Home() {
  const [data1, setData1] = useState([]); 
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/services')
      .then((res) => {
        console.log(res.data);
        setData1(res.data);
       
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/donations')
      .then((res) => {
        console.log(res.data);
        setData2(res.data);
       
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
  const [data3, setData3] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/causes')
      .then((res) => {
        console.log(res.data);
        setData3(res.data);
        
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
  const [data4, setData4] = useState([]);
  
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/events')
      .then((res) => {
        console.log(res.data);
        setData4(res.data);
      
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
  const [data5, setData5] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/blogs')
      .then((res) => {
        console.log(res.data);
        setData5(res.data);
        
      })
      .catch(err=>{
        console.log(err);   
      });
  }, []);
  const [data6, setData6] = useState([]);
useEffect(() => {
  axios
    .get('http://localhost:3000/api/volunteer')
    .then((res) => {
      console.log(res.data);
      setData6(res.data);
      
    })
    .catch(err=>{
      console.log(err);   
    });
}, []);
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

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};

const [activeButton, setActiveButton] = useState(1);
const [buttonContent, setButtonContent] = useState({
  1: " 1",
  2: " 2",
  3: " 3"
});
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageClick = (index) => {
        setSelectedImage(index);
    };
  
    const handleCloseModal = () => {
        setSelectedImage(null);
    };
    const [selectedImageG, setSelectedImageG] = useState(null);
    const handleImageClickG = (index) => {
        setSelectedImageG(index);
    };

    const handleCloseModalG = () => {
        setSelectedImageG(null);
    };
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={`${className} slick-arrow`}
          style={{ 
            ...style,     
            position: 'absolute',
              top: '-60px',
              right: '0',
              width: '80px',
              height: '40px',
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'center', 
              transition: '0.5s',
              cursor: 'pointer',
              margin:'16px'
          }}
          onClick={onClick}
          >
            <FaArrowRight color="white" size="16" />
          </div>
        
      );
      
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ 
            ...style, 
            position: 'absolute',
              top: '-60px',
              left: '0',
              width: '80px',
              height: '40px',
              display: 'flex',
              alignItems: 'center', 
              justifyContent: 'center', 
              transition: '0.5s',
              cursor: 'pointer',
              margin:'14px'
          }}
          onClick={onClick}
          >
            <FaArrowLeft color="white" size="16" />
          </div>
        
      );
    }
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    };
   
  return <>
  <Banner/>

 {/* about us start */}
 <div className='py-10 px-3'> 
<div className='container my-12 h-auto  md:h-[585px] md:flex '>
 <div className='h-[100%]'> <img src={about} className='p-6 w-full h-full'/> </div> 
 <div className='px-6 md:w-[1000px] pt-6' > 
   <p className='text-primary font-Jost mb-5 text-xl font-semibold'>ABOUT US </p>
   <h1 className='text-3xl md:text-[40px] font-Jost mb-8 font-semibold'>Our main goal is to protect environment </h1>
   <p className='mb-6 text-xl font-Roboto text-[#757575]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p>
   <div className='p-6 font-Roboto bg-secondary'> 
    <div className='flex flex-wrap gap-4 mb-4 text-base'>

    <button  onClick={() => handleButtonClick(1)} 
    className={`px-10 py-2 transition-all duration-300 ${activeButton === 1 ? 'text-white bg-primary':'bg-white text-black'} `} >About</button>
    <button onClick={() => handleButtonClick(2)} className={`px-10 py-2 transition-all duration-300 ${activeButton === 2 ? 'text-white bg-primary':'bg-white text-black'} `}>Mission</button>
    <button onClick={() => handleButtonClick(3)} className={`px-10 py-2 transition-all duration-300 ${activeButton === 3 ? 'text-white bg-primary':'bg-white text-black'} `}>Vision</button>

     </div>
     {activeButton && (
                    <p className='text-xl mb-4'>LOREM IPSUM{buttonContent[activeButton]}</p>
                )}
     
     <p className='text-base mb-6 text-[#757575]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has</p>
     <button onClick={scrollToTop} className='btn border border-primary'>Read More</button>
   </div> 
   </div>
</div>
</div>



{/* about us end */}
{/* service starts */}
<div className='bg-hover px-3 py-12'>
  <div className='px-3 py-12'>  
  <div className='container '> 
  <div className='mx-auto text-center'> 
  <p className=' text-primary text-xl font-Jost font-semibold mb-2'>WHAT WE DO</p>
  <p className=' text-[30px] md:text-[40px] font-Jost font-semibold '>What we do to protect environment</p>
  </div>
  
  
 <div className='flex flex-wrap justify-center mt-6 mx-3'>
{
  data1.map(el=>(
<div className='relative flex flex-col px-3 mt-6 overflow-hidden group '>
    <div className=' w-[306px] h-[367px] overflow-hidden'>
    <img src={`http://localhost:3000${el.image}`} className='   brightness-75 ease-in-out  transform group-hover:scale-125 group-hover:brightness-50 transition-all duration-500'/>
    </div>
    <div> 
    <p className=' absolute bottom-36 mx-auto text-2xl font-Jost font-semibold  text-white p-2 hover:text-primary cursor cursor-pointer'>{el.p}</p>
    <p className='w-[306px] h-[96px] my-6 text-[#757575] text-base '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
  </div>
  </div>

  ))
}
  

  
<button onClick={scrollToTop} className='btn mt-4'>Read More</button>

  </div>
     
  </div>
  </div>
</div>
{/* services ends */}


{/* donation starts */}
<div className='py-12 px-3'>
  <div className='py-12 px-3' >
<div className='container '>
<div className='pb-5 mx-auto text-center'> 
<p className='font-Jost text-xl text-primary  font-semibold mb-2'>DONATION</p>
<p className='font-Jost text-[30px] md:text-[40px]  font-semibold'>Your money will save our life</p>
</div>

<div className='my-6 mx-3 flex flex-wrap justify-center gap-6'>
{
    data2.map((el, index)=>(

<div key={index} className='donation-item group h-full w-auto md:h-[500px] md:w-[415px] relative '> 
    <div className='realtive'> 
     <img src={`http://localhost:3000${el.image}`} alt="" className='w-full h-full object-cover'/>   

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
{/* donation ends */}

{/* achievments begins */}

<div className='relative '> 
<img src={volunteersbg} className='brightness-50 object-cover h-screen'/>
<div className='absolute  py-10 px-3  top-0 left-0 right-0'> 
<div className='absolute py-10 px-3 container top-0 left-0 right-0'>
<div className='mx-auto py-10 px-3 text-center md:w-[800px]'>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>ACHIEVEMENTS</p>
  <p className='text-base font-Roboto text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
</div>
<div className=' my-6 mx-3 flex flex-wrap justify-center gap-6'>
    <CounterItem icon={<FaThumbsUp className='h-[64px] w-[64px]' />} title='Beavers Saved' count={3600} symbol='+' />
    <CounterItem icon={<FaFileInvoiceDollar className='h-[64px] w-[64px]' />} title='Funds Collected' count={513} symbol='$' />
    <CounterItem icon={<IoPerson className='h-[64px] w-[64px]' />} title='Volunteer' count={713} symbol='+' />
    <CounterItem icon={<FaHeart className='h-[64px] w-[64px]' />} title='Days of Help' count={487} symbol='+' />
</div>
<div className='mx-auto text-center'> 
<button onClick={scrollToTop} className='btn' >Join With Us</button>
</div>
</div>
</div>
</div>

{/* achievements ends */}


{/* causes starts */}
<div className='py-12 px-3'>
<div className=' py-12 px-3 container'>
  <div className='mx-auto text-center md:w-[800px] '>
    <p className='font-Jost text-xl text-primary  font-semibold mb-2'>RECENT CAUSES</p>
    <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6'>The environment needs our protection</p>
    <div className='font-Roboto text-[#757575]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</div>
  </div>
  <div className='my-6 mx-3 pt-6 flex flex-wrap justify-center gap-6'>

{
  data3.map(el=>(
<div className='w-[306px] '>
<div className='relative bg-[#757575]'>
  <img src={`http://localhost:3000${el.image}`} className='h-full transform transition duration-500 hover:scale-x-[-1] hover:brightness-50' />
   <div className='absolute top-0 right-0 p-2'>
    <button onClick={scrollToTop} className='btn'>Donate Now</button>
   </div>
  <p className='absolute bottom-0 left-0 p-2 flex items-center font-Roboto text-sm gap-2 font-semibold text-white'><VscGraph className='text-primary'/> Goal: $3600</p>
  <p className='absolute bottom-0 right-0 p-2 flex items-center font-Roboto text-sm gap-2 font-semibold text-white'> <FaThumbsUp className='text-primary' /> Raised: $4000</p>
</div>

<ProgressBar percentage={el.percentage} />
<div className='bg-secondary  p-6 border-b-[3px] border-x-[3px] border-white border-dotted'>
  <p className='text-2xl font-Jost mb-4 font-semibold'>{el.p}</p>
  <p className='text-base font-Roboto mb-6 text-[#757575]'>Help today because tomorrow you may be the one who needs more helping!</p>
  <Link to={`/causes/${el._id}`}>
  <button onClick={scrollToTop} className='btn'>Read More</button>
  </Link> 
</div>

</div>
  ))
}
     

     


  </div>
</div>
</div>

{/* causes ends */}

{/* events start */}
<div className='py-12 px-3'>
<div className=' py-12 px-3 container'>
<div>

<div className='mx-auto text-center md:w-[800px]'>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>UPCOMING EVENTS</p>
  <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6'>Help today because tomorrow you may be the one who needs more helping!</p>
</div>

<Slider {...settings}>

{
  data4.map(el=>(
<div className='w-[415px] px-3 relative'>
  <div className=' h-[332px]'>  
    <img src={`http://localhost:3000${el.image}`} alt="" className='' />
    </div>
    <div className='bg-secondary p-6 border-b-[3px] border-x-[3px] border-white border-dotted'>
      <div className='flex justify-between mb-6 text-grey font-Roboto text-base'> 
      <p className='flex justify-center items-center gap-2'><FaLocationDot />Grand Mahal, Dubai 2100</p>
      <p className='flex justify-center items-center gap-2'><SlCalender />10 Feb 2023</p>
      </div>
      <p className='font-Jost text-[24px] mb-6 font-semibold'>How To Build A Cleaning Plan</p>
      <p className='font-Roboto mb-6 text-grey text-base'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
      <Link to={`/events/${el._id}`}>
  <button onClick={scrollToTop} className='btn'>Read More</button>
  </Link> 
    </div>
   </div>

  ))
}

   
   </Slider>




</div>
</div>
  </div>
{/* events ends */}

{/* Blog starts */}
<div className='py-12 px-3'>
  <div className=' py-12 px-3 container'>
    <div  className='mx-auto text-center md:w-[800px] pb-12'>
      <p className='font-Jost text-xl text-primary  font-semibold mb-2'>LATEST NEWS</p>
      <p className='font-Jost text-[30px] md:text-[40px]  font-semibold '>Help today because tomorrow you may be the one who needs more helping!</p>
    </div>
    <div className='flex flex-wrap justify-center gap-6 '> 
{
  data5.map((el,index)=>(
<div key={el._id} className='w-[306px] border'>
  <div className='group overflow-hidden relative'>
<img  src={`http://localhost:3000${el.image}`} alt="" className=' brightness-75 transition-all ease-in-out  transform group-hover:scale-125 group-hover:brightness-50 duration-500'/>

<div className='absolute text-white flex gap-20 bottom-0 p-5'> 
  <p className='flex flex-wrap justify-center items-center gap-2'><FaClock/> Dec 1.2024</p> 
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
                         src= {`http://localhost:3000${data5[selectedImage].image}`}
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
{/* Blog ends */}


{/* gallery starts */}
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
<MdOutlineZoomIn onClick={() => handleImageClickG(0)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
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
<MdOutlineZoomIn onClick={() => handleImageClickG(1)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
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
<MdOutlineZoomIn onClick={() => handleImageClickG(2)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
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
<MdOutlineZoomIn onClick={() => handleImageClickG(3)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
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
<MdOutlineZoomIn onClick={() => handleImageClickG(4)} className=' text-2xl text-primary hover:text-hover transition-all duration-300'/>
</div>
  </div>


  
</div>



{selectedImageG !== null && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col justify-center items-center ">
                    <div className='relative'> 
                    <img
                         src={`http://localhost:3000${data[selectedImageG].image}`}
                        alt=""
                        className="max-w-full max-h-full p-2 bg-white"
                    />
                   <button
                        className=" absolute bottom-0 right-0 m-4 p-2 brightness-75 hover:brightness-[100%] transition-all duration-300"
                        onClick={handleCloseModalG}
                    >
                        <ImCross />
                    </button>
                    </div>
                </div>
            )}



</div>


  </div>
{/* gallery ends */}

{/* volunteers */}
<div className='mt-12'>
<div className='py-12 px-3 bg-[#fff8ef]'>
<div className='pb-8'> 
<div className='container mt-12 flex flex-wrap justify-center gap-12 '>


<div className='grid grid-cols-2 w-[536px] gap-6'>
{
  data6.map((el,index)=>(

<div className='relative w-full group overflow-hidden'>
  <img src={`http://localhost:3000${el.image}`} alt="" className=' w-full h-full brightness-90  transition-all duration-500 transform group-hover:scale-125 group-hover:brightness-50' />
  <div className='absolute bottom-0 text-white text-center p-5 left-14'>
  <p className='text-[20px] font-Jost mb-2 font-semibold'>Michel Brown</p>
  <p className='font-Roboto'>Communicator</p>
  </div>
  </div>
  ))
}
</div>


<div className='w-[736px] '>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>BECOME A VOLUNTEER?</p>
  <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6 '>Join your hand with us for a better life and beautiful future.</p>
  <p className='font-Roboto text-[#757575] mb-6'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
<div> 
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'> <FaCheck className='text-primary'/> We are friendly to each other.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'><FaCheck className='text-primary'/> If you join with us,We will give you free training.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'><FaCheck className='text-primary'/> Its an opportunity to help poor Environments.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-4'><FaCheck className='text-primary'/> No goal requirements.</p>
  <p className='flex items-center gap-2 text-base font-Roboto mb-12'><FaCheck className='text-primary'/> Joining is tottaly free. We dont need any money from you.</p>
</div>
<button onClick={scrollToTop} className='btn' >Join With Us</button>

</div>


</div>

</div>
  </div>
  </div>
{/* volunteers ends */}

  </>
}
