import React from 'react'
import Navbar from '../../../components/others/Navbar'
import SingleProduct from '../../../components/user/SingleProduct'
import RelatedProduct from '../../../components/user/RelatedProduct'

const page = () => {
    
  return (
    <>
    <div className='overflow-hidden'>

    <Navbar/>
    <SingleProduct/>
    <RelatedProduct/>
    </div>
    </>
  )
}

export default page