// import ArraivalSection from "../../Components/ArraivalSection/ArraivalSection"
import BestSelling from "../../Components/BestSelling/BestSelling"
import CategorySection from "../../Components/CategorySection/CategorySection"
import ExploreProduct from "../../Components/ExploreProduct/ExploreProduct"
import ProductSection from "../../Components/ProductSection/ProductSection"
import { Slider } from "../../Components/Slider/Slider"
import Navbar from "../../Components/Navbar/Navbar"
import AccordianCom from "../../Components/Accordian/AccordianCom"
import ProductCategoryNav from "../../Components/ProductCategoryNav/ProductCategoryNav"
import Footer from "../../Components/Footer/Footer"

const App = () => {
  return (
    <main className=''>
      <Navbar />
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/3 p-4 border-r-2'>
          <AccordianCom />
          <ProductCategoryNav />
        </div>
        <div className='w-full md:w-2/3 p-4'>
          <Slider />
        </div>
      </div>
      <div className='mx-10'>
        <ProductSection />
        <CategorySection />
        <BestSelling />
        <ExploreProduct />
        {/* <ArraivalSection /> */}
      </div>
      <Footer />
    </main>
  )
}

export default App
