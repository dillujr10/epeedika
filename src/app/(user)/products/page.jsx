import React from 'react'
import Navbar from '../../../components/others/Navbar'
import Footer from '../../../components/others/Footer'
import ProductCards from '../../../components/user/ProductCards'
import TopDeals from '../../../components/user/TopDeals'

const page = () => {
  
  return (
    <>
    <Navbar/>
    <ProductCards/>
    <TopDeals/>
    <Footer/>
    
    </>
  )
}

export default page