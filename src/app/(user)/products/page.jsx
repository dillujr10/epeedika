import React from 'react'
import Navbar from '../../../components/others/Navbar'
import Footer from '../../../components/others/Footer'
import ProductCards from '../../../components/user/ProductCards'
import TopDeals from '../../../components/user/TopDeals'

const page = () => {
  return (
    <>
    <Navbar/>
    <TopDeals/>
    <ProductCards/>
    <Footer/>
    
    </>
  )
}

export default page