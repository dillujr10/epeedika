"use client"
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/UseFetch'
import base_url from '../../hooks/baseUrl'
import axios from 'axios'


function TopDeals() {
 

  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-8'>Top Deals</h1>
    <div className="flex flex-wrap justify-center">
      {[1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="relative m-2 w-full max-w-[18rem] overflow-hidden rounded-lg bg-white shadow-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <a href="#">
            <div className="flex flex-wrap justify-center">
            <img
              className="h-60 rounded-t-lg object-cover"
              src ="img/slide4.png"
              alt="product image"
            />
            </div>
          </a>
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Sale
          </span>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
            </a>
            <div className="mt-2.5 mb-5 flex items-center">
              <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              {
                [1,2,3,4,5,].map((item,index)=>(
                  <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                ))
              }
    

              {/* Render the other rating stars here */}
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">$249</span>
                <span className="text-sm text-slate-900 line-through">$299</span>
              </p>
              <a href="#" className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  {/* ... */}
                </svg>
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <hr className='shadow-lg bg-gray-900 drop-shadow-lg h-[2px]' />
  
    </>
  )
}

export default TopDeals