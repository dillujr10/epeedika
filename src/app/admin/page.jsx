"use client"
import React, { useState } from 'react'
import Sidebar from '../../components/admin/Sidebar'
import AdminNav from '../../components/admin/Navbar'
import MainBar from '../../components/admin/MainBar'
import MangeOrder from '../../components/admin/MangeOrder'
import AllProduct from '../../components/admin/AllProduct'
import OrderStatic from '../../components/admin/OrderStatic'
import Earning from '../../components/admin/Earning'
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSidebarOpen, setSidebarOpen } from '../redux/sidebarSlice';

const Admin = () => {
const [sidebarOpen,setSidebarOpen]=useState(false)
const sidebar = useSelector((state) => state.sidebar);
console.log(sidebar.isSidebarOpen);
const dispatch = useDispatch();

  return (
    
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="dist/css/style.css" />
  <link rel="stylesheet" href="style.css" />
  <script src=""></script>

  <title>Dashboard</title>
  {
    sidebar.isSidebarOpen&& 
 <Sidebar/>
  }

  
  <main 
   className={`w-full  ${sidebar.isSidebarOpen === true ? 'md:w-[calc(100%-256px)]' : 'md:w-full'} ${sidebar.isSidebarOpen === true ? 'md:ml-64' : 'md:ml-0'}  bg-gray-50 min-h-screen transition-all main `}>
    <AdminNav/>
    <div className="p-6">
      <MainBar/>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 ">
      <MangeOrder/>
   <AllProduct/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
     <OrderStatic/>
       <Earning/>
      </div>
    </div>
  </main>


  
</>

    
  )
}

export default Admin