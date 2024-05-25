import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function EventDetail() {
    const {slug}  = useParams() 
    const [event, setEvent] = useState({});
    console.log(slug);
    useEffect(() => {
      axios
        .get(`http://localhost:3000/api/events/${slug}`)
        .then((res) => {
         // console.log(res.data.cause);
        setEvent(res.data.event);
          console.log("event:",event);
        })
        .catch(err =>{
          console.log(err);
        })
    }, []);
    return <>
    <div className='mt-16'> 
    <div className='py-12 px-3'>
  <div className=' py-12 px-3 container'>
  <div className='mx-auto text-center md:w-[800px] '>
      <p className='font-Jost text-xl text-primary  font-semibold mb-2'>UPCOMING EVENTS</p>
      
    </div>
  <div className='flex justify-center gap-6 mt-5 shadow-lg shadow-primary'>
      <img src={`http://localhost:3000${event.image}`} className='shadow-md shadow-black h-96 m-3'/>
      <div> 
      <p className='text-3xl text-primary font-Jost mb-4 font-semibold'>How to building a cleaning plan.</p>
      <p className='text-lg text-[#757575]'>Amet numquam autem, itaque, modi placeat molestias ut voluptate unde minima blanditiis eveniet sapiente quidem veritatis cum officia voluptatem labore. Ratione, corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure quasi corporis blanditiis. Quibusdam aperiam voluptatum quos voluptatibus qui perspiciatis commodi quas eius consequuntur harum! Officia aspernatur debitis suscipit earum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolore vel voluptates modi sit dolorum repellat, ipsum quo et delectus iusto hic esse numquam tempora rerum fugiat quaerat officia obcaecati.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi corrupti, quis laboriosam aliquam ullam repellat corporis blanditiis, ducimus repellendus explicabo dolor, quidem perferendis autem placeat aliquid sed non quia ex?</p>
      </div>
  </div>
  </div>
  </div>
    </div>
    </>
}
