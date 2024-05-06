import React from 'react'
import carousel1 from "../../assets/images/carousel-1.jpg";
import carousel2 from "../../assets/images/carousel-2.jpg";
import carousel3 from "../../assets/images/carousel-3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Banner() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} -translate-x-[100px]`}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} translate-x-[100px]`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const data = [
    {
      image: carousel1,
      p: "WE'll SAVE OUR PLANET"
    },
    {
      image: carousel2,
      p: "WE'll SAVE OUR PLANET"
     },
    {
      image: carousel3,
      p: "WE'll SAVE OUR PLANET"
     },
  ];
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  return <>
   <Slider {...settings}>
   {data.map((el) => {
          return (
  <div className='relative text-white'>
    <img src={el.image} className='w-full h-screen object-cover brightness-75' />
    <div className=" inset-0 flex flex-col absolute gap-2 md:gap-5 justify-center items-center text-white text-center">
    <p className='md:text-[24px] font-Jost font-semibold ' >{el.p}</p>
  <h1 className='md:text-[80px] font-Jost font-semibold' >Protect Environment</h1>
   <h2 className='md:text-[20px] font-Roboto font-semibold' > It is crucial to consider how we can 
   contribute to protecting our planet. </h2>
  <button className='Bbtn mt-7'>Join With us</button>
  </div>
  </div>
   );
  })}
  </Slider>
  </>
}
