import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight, FaLocationDot } from 'react-icons/fa6'
import { SlCalender } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BreadCrumb from '../components/common/BreadCrumb'
import { Link } from 'react-router-dom';

export default function Events() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/events')
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
if (loading) {
  return <div>Loading...</div>;
}
  return <>
   <BreadCrumb topic={'Upcoming Events'} page={'Events'}/>
  <div className='py-12 px-3'>
<div className=' py-12 px-3 container'>
<div>

<div className='mx-auto text-center md:w-[800px]'>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>UPCOMING EVENTS</p>
  <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6'>Help today because tomorrow you may be the one who needs more helping!</p>
</div>

<Slider {...settings}>

{
  data.map((el,index)=>(
<div key={index} className='w-[415px] px-3 relative'>
  <div className=' h-[332px]'>  
    <img src={`http://localhost:3000${el.image}`} />
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
  </>
}
