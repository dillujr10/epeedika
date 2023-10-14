"use client"
import React, { useState } from 'react'

const BrowserHistory = () => {
    const [scrollX, setScrollX] = useState(0);

    const handleScroll = (scrollOffset) => {
      const newScrollX = scrollX + scrollOffset;
      setScrollX(newScrollX);
    };
  return (
    <>
    <div className="w-full h-[37vh] md:h-[37vh] relative">
      <h3 className="text-2xl pl-5 mt-3 font-semibold">Your browsing history</h3>
      <div className="cardnew flex items-center justify-start space-x-5 p-5 overflow-x-hidden relative">
        <div
          className="slider-container flex space-x-5"
          style={{ transform: `translateX(${scrollX}px)` }}
        >
          {[...Array(9).keys()].map((index) => (
            <div key={index} className="newcard relative w-[10rem] md:w-[10rem] min-w-[10rem] md:min-w-[10rem] overflow-hidden rounded-lg bg-white shadow-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a href="#">
                <div className="flex flex-wrap justify-center">
                  <img className="h-32 rounded-t-lg object-cover" src="img/slide4.png" alt="product image" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {scrollX < 0 && (
        <button
          className="slider-arrow relative left-0 ml-[2%]  bg-gray-900 rounded-xl py-1 px-2 pb-1"
          onClick={() => handleScroll(250)} // Adjust this value to control the scroll distance
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

        </button>
      )}
      {scrollX > -250 * 4 && (
        <button 
          className="slider-arrow relative ml-[89%] bg-gray-900 rounded-xl py-1 px-2 pb-1"
          onClick={() => handleScroll(-250)} // Adjust this value to control the scroll distance
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
</svg>

        </button>
      )}
    </div>
<hr />
    </>
  )
}

export default BrowserHistory