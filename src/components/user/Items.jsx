"use client"
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/UseFetch';
import base_url from '../../hooks/baseUrl';
import axios from 'axios';

const items = () => {
  const [itemsData, setItemsData] = useState([]);
  const makeDisccount=(market_price,our_price)=>{
    return ((market_price - our_price)*100/market_price).toFixed(0)
  }


      useEffect(() => {
        const FetchproductData = async () => {
          try {
            const res = await axios.get(`${base_url}/products`);
            setItemsData(res.data);
           
          } catch (err) {
            console.log(err);
          }
        }
        FetchproductData()
     
      }, [])
      console.log(itemsData);
      
  const numberOfDivs = 8;
  const phone = 4; 

  

  return (
    <>
   <div className="relative hidden md:flex min-h-[45vh] justify-center flex-wrap overflow-hidden bg-gray-50 py-6 sm:py-12">
  {itemsData.map((items,index)=>(


    <div
    key={index}
    className="group relative cursor-pointer overflow-hidden bg-white px-0 sm:px-0 pt-6 pb-4 sm:pb-6 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:w-[23%] sm:rounded-lg sm:pt-6 mt-3"
  >
      <span className="wrapper absolute top-9 left-5 z-0 h-16 w-16 rounded-full bg-gray-900 transition-all duration-700 group-hover:scale-[20]">
        <p className="text-center text-white mt-3 transition-all duration-300 group-hover:opacity-0">{makeDisccount(items.market_price,items.our_price)}%<br />off</p>
      </span>
      <div className="relative z-10 mx-auto max-w-[26rem] flex flex-col items-center justify-center">
        <span className="grid h-[50%] w-[60%] place-items-center rounded-full bg-gray-900 transition-all duration-500 group-hover:bg-gray-400">
          <img src={items.image} alt="" />
        </span>
        <div className="space-y-6 mx-2 pt-2 text-base leading-7 text-gray-600 transition-all duration-500 group-hover:text-white/90">
          <p className=''>
           {items.description}
          </p>
        </div>
        <div className="pt-2 text-base font-semibold leading-7">
          <p>
            <a href="#" className="text-sky-500 transition-all duration-300 group-hover:text-white">
              Checkout →
            </a>
          </p>
        </div>
      </div>
    </div>
    ))}
</div>

<div className="relative md:hidden  min-h-[40vh] bg-gray-50 py-6 sm:py-12 overflow-x-auto">
  <div className="flex flex-wrap justify-center gap-2 px-1">
  {itemsData.map((items,index)=>(
      <div
        key={index}
        className="group relative rounded-md cursor-pointer overflow-hidden  px-5 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300  sm:w-1/2 sm:max-w-sm sm:rounded-lg sm:px-10 mt-3"
      >
        <span className="wrapper absolute top-7 left-[-3px] z-0 h-12 w-12 rounded-full bg-gray-900 transition-all duration-700 ">
          <p className="text-center text-sm text-white mt-1 transition-all duration-300 ">60% <br />off</p>
        </span>
        <div className="relative z-10 mx-auto max-w-md flex flex-col items-center justify-center">
          <span className="grid h-[25vh] w-[34vw] place-items-center rounded-full bg-gray-900 transition-all duration-500 ">
            <img src="img/slide4.png" alt="" className="h-[18vh] w-[28vw] object-cover" />
          </span>
          <div className="space-y-6 pt-1 text-base leading-7 text-gray-600 transition-all duration-500 "></div>
          <div className="pt-5 text-base font-semibold leading-7">
            <p>
              <a href="#" className="text-sky-500 transition-all duration-300 ">Checkout →</a>
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </>
  )
}

export default items