"use client"
import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/UseFetch';
import base_url from '../../hooks/baseUrl';
import axios from 'axios';

function ProductCards() {
  const [sortOpen, setSortOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [productData, setProductData] = useState([])


  const [sortselected, setSortSelected] = useState("");
const [filterSlected, setFilterSelected] = useState("")
const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const FetchproductData = async () => {
      try {
        const res = await axios.get(`${base_url}/products`);
        setProductData(res.data);
       
      } catch (err) {
        console.log(err);
      }
    }
    FetchproductData()
    
    
    
  }, [])




const sortedHigh = productData.sort((a,b)=>a.our_price - b.our_price)
const sortedLow = productData.sort((a,b)=>b.our_price -   b.our_price)
  const toggleSortMenu = () => {
    setSortOpen(!sortOpen);
    if (filterOpen) setFilterOpen(false);
  };
const handleSortLow = ()=>{
  setProductData(sortedLow)
 setFilterOpen(false)

}
const handleSortHigt = ()=>{
  setProductData(sortedHigh)
 setFilterOpen(false)
}
  const toggleFilterMenu = () => {
    setFilterOpen(!filterOpen);
    if (sortOpen) setSortOpen(false);
    console.log('ima clickedd');
  };

  const filtered = productData.filter((item)=>item.category === filterSlected)
  const handleFilter = (e)=>{
    setFilterSelected(e.target.id)
    setFilterData(filtered)
    setFilterOpen(false)
    setSortOpen(false)
    
  }
  console.log(filterData);
  
 
  return (
    <>
      <h1 className='text-3xl font-bold text-center mt-8'>Products</h1>
      <div className="w-[92%] h-[10vh]  flex items-center justify-end gap-10 relative">
      <div className="relative">
        <button
          onClick={toggleSortMenu}
          className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          type="button"
        >
          Sort Items{' '}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {sortOpen && (
          <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  id='Study tools'
                  onClick={handleFilter}
                >
                  Study tools
                </a>
              </li>
              <li>
                <a
                id='Sports'
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleFilter}
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                id='Office Supplies'
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleFilter}
                >
                  Office Supplies
                </a>
              </li>
              <li>
                <a
                id='Personal Care'
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleFilter}
                >
                  Personal Care
                </a>
              </li>
              <li>
                <a
                id='Arts and Craft'
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleFilter}
                >
                 Arts and Craft
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
              id='Snacks'
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                onClick={handleFilter}
              >
                
                  Snacks
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <button
          onClick={toggleFilterMenu}
          className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
          type="button"
        >
         Filter{' '}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        {filterOpen && (
          <div className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleSortLow}
                >
                  high-low
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover-bg-gray-600 dark:hover:text-white"
                  onClick={handleSortHigt}
                >
                  low-high
                </a>
              </li>
              
            </ul>
            <div className="py-2">
             
            </div>
          </div>
        )}
      </div>
    </div>

      <div className="flex flex-wrap justify-center">
        {  filtered.length >0 ? filtered.map((item,index)=>(
      <div
      key={index}
      className="relative m-2 w-full max-w-[18rem] overflow-hidden rounded-lg bg-white shadow-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
    >
      <a href="#">
        <div className="flex flex-wrap justify-center">
          <img
            className="h-60 rounded-t-lg object-cover"
            src={item.image}
            alt="product image"
          />
        </div>
      </a>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Sale
      </span>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">{item.name}</h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          {
          [1,2,3,4,5,].map((item,index)=>(
            <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

          ))
        }
          {/* Render the other rating stars here */}
        </div >
        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">${item.our_price}</span>
            <span className="text-sm text-slate-900 line-through">${item.market_price}</span>
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
        )): productData.map((item,index) => (
          <div
            key={index}
            className="relative m-2 w-full max-w-[18rem] overflow-hidden rounded-lg bg-white shadow-md hover:transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <a href="#">
              <div className="flex flex-wrap justify-center">
                <img
                  className="h-60 rounded-t-lg object-cover"
                  src={item.image}
                  alt="product image"
                />
              </div>
            </a>
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
              Sale
            </span>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">{item.name}</h5>
              </a>
              <div className="mt-2.5 mb-5 flex items-center">
                <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                {
                [1,2,3,4,5,].map((item,index)=>(
                  <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                ))
              }
                {/* Render the other rating stars here */}
              </div >
              <div className="flex items-center justify-between">
                <p>
                  <span className="text-3xl font-bold text-slate-900">${item.our_price}</span>
                  <span className="text-sm text-slate-900 line-through">${item.market_price}</span>
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


    </>
  )
}

export default ProductCards