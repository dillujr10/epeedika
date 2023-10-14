import Navbar from "../components/others/Navbar";
import Category from "../components/user/Category";
import Slider from "../components/user/Slider";
import TopOffer from "../components/user/TopOffer";
import Items from "../components/user/Items";
import Moto from "../components/user/Moto";
import NewsLetter from "../components/user/NewsLetter";
import Footer from "../components/others/Footer";

export default function Home() {
  return (
    <>
  <div className="overflow-auto">
<Navbar/>
{/* <TopOffer/> */}
<Slider/>
<Moto/>
<Category/>
<Items/>
<NewsLetter/>
<Footer/>


  </div>
  <>

</>



  
    </>
  )
}
