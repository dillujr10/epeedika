
"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
// const data = [
//   {
//     id: 1,
//     img: "/img/slide1.jpg"
//   },
//   {
//     id: 2,
//     img: "/img/slide2.jpg"
//   },
//   {
//     id: 3,
//     img: "/img/slide3.jpg"
//   },
// ]

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/img/slide4.png"
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/img/slide5.png"
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/img/slide4.png"
  },
];


const slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(
      () =>
      setSlideIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      1000
    );
    return () => clearInterval(interval);
  }, []);




  return (
    <>


<div className="flex flex-row overflow-x-hidden  ">
  {data.map((item, index) => (
    <div
      key={index}
      style={{ transform: `translateX(-${slideIndex}00vw)` }}
      className="min-w-full flex flex-col h-[calc(100vh-90px)] md:h-[calc(100vh-90px)] lg:flex-row bg-slate-200 transition-all duration-700"
    >
      
      <div className="w-full flex-1 relative flex items-center justify-center">
        <img
          src={item.image}
          alt=""
          fill
          className="object-cover w-[80%] h-[50vh] sm:h-[80vh]"
        />
      </div>


      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-gray-900 font-bold">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl font-mono">
          {item.title}
        </h1>
        <button className="bg-gray-900 text-white py-4 px-8">Order Now</button>
      </div>
    </div>
  ))}
</div> 



{/* <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="/img/slide1.jpg" className='w-full h-[45vh] object-cover' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="/img/slide1.jpg"className='w-full h-[45vh] object-cover' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/img/slide1.jpg" className='w-full h-[45vh] object-cover' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/img/slide1.jpg" className='w-full h-[45vh] object-cover' />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div> */}

    </>
  )
}

export default slider