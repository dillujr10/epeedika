
"use client"
import React, { useState } from 'react'
import AddProduct from '../../../components/admin/AddProduct'
import { useSelector, useDispatch } from 'react-redux';
import MainBar from '../../../components/admin/MainBar';
import Sidebar from '../../../components/admin/Sidebar';

import ProductList from '../../../components/admin/ProductList';
import AdminNav from '../../../components/admin/Navbar';


const page = () => {
  
const [sidebarOpen,setSidebarOpen]=useState(false)
const sidebar = useSelector((state) => state.sidebar);
console.log(sidebar.isSidebarOpen);
const dispatch = useDispatch();

  return (
    <>

  
  {
    sidebar.isSidebarOpen&& 
    <Sidebar/>
  }

<main 
   className={`w-full  ${sidebar.isSidebarOpen === true ? 'md:w-[calc(100%-256px)]' : 'md:w-full'} ${sidebar.isSidebarOpen === true ? 'md:ml-64' : 'md:ml-0'}  bg-gray-50 min-h-screen transition-all main `}>
  <AdminNav/>
   <MainBar/>
     <ProductList/>
  </main>

    </>
  )
}

export default page