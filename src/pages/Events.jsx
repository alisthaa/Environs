import React from 'react'
import event1 from '../assets/images/events-1.jpg'
import event2 from '../assets/images/events-2.jpg'
import event3 from '../assets/images/events-3.jpg'
import event4 from '../assets/images/events-4.jpg'
import Slider from 'react-slick'
import { FaLocationDot } from 'react-icons/fa6'
import { SlCalender } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Events() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Scroll smoothly to top
    });
};
const data =[
  {
    image: event2,
  },
  {
    image: event3,
  },
  {
    image: event4,
  },
  {
    image: event1,
  },
]
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
var settings = {
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
  <div className='py-12 px-3'>
<div className=' py-12 px-3 container'>
<div>

<div className='mx-auto text-center w-[800px]'>
  <p className='font-Jost text-xl text-primary  font-semibold mb-2'>UPCOMING EVENTS</p>
  <p className='font-Jost text-[30px] md:text-[40px]  font-semibold mb-6'>Help today because tomorrow you may be the one who needs more helping!</p>
</div>





<Slider {...settings}
prevArrow={
<div className='bg-primary h-2 w-2 '>
dfvsd
</div>
}
nextArrow={<></>}>

{
  data.map(el=>(
<div className='w-[415px] px-3'>
  <div className=' h-[332px]'>  
    <img src={el.image} alt="" className='' />
    </div>
    <div className='bg-secondary p-6'>
      <div className='flex justify-between mb-6 text-grey font-Roboto text-base'> 
      <p className='flex justify-center items-center gap-2'><FaLocationDot />Grand Mahal, Dubai 2100</p>
      <p className='flex justify-center items-center gap-2'><SlCalender />10 Feb 2023</p>
      </div>
      <p className='font-Jost text-[24px] mb-6 font-semibold'>How To Build A Cleaning Plan</p>
      <p className='font-Roboto mb-6 text-grey text-base'>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip sed eiusmod tempor.</p>
      <button onClick={scrollToTop} className='btn'>Read More</button>
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
