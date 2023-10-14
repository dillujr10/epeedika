import React from 'react'
import Navbar from '../../../components/others/Navbar'
import ProfileCard from '../../../components/user/ProfileCard'
import Footer from '../../../components/others/Footer'
import RelatedProduct from '../../../components/user/RelatedProduct'
import BrowserHistory from '../../../components/user/BrowserHistory'

const page = () => {
  return (
    <>

<Navbar/>
<ProfileCard/>
<RelatedProduct/>
<BrowserHistory/>
<Footer/>
    </>
  )
}

export default page