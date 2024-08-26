import ProductCard from "../ProductCard/ProductCard"
import jblSpeaker from "../../assets/jblSpeaker.svg"
import { productDatas } from "../../const/productDatas"

export default function BestSelling() {
  const productData = productDatas

  const newProductData = productData.filter((product: any) => product.id < 5)

  return (
    <main className='mt-10'>
      <div className=''>
        <h1 className='md:text-lg text-[12px] text-[#DB4444] font-bold'>
          This Month
        </h1>
        <div className='flex justify-between'>
          <h1 className='text-[12px] md:text-5xl font-bold'>
            Best Selling Product
          </h1>

          <div className='flex justify-center -mt-5 mb-4'>
            <button className='text-white bg-red-500 text-sm md:text-lg px-4 py-3 md:px-10 md:py-4 rounded-xl'>
              View All
            </button>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {newProductData.length > 1 &&
            newProductData.map((product: any) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  productData={productData}
                />
              )
            })}
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black p-6 sm:p-16'>
        <div className='text-center sm:text-left'>
          <h1 className='text-[#00FF66] font-bold'>Categories</h1>

          <h1 className='sm:text-6xl text-white mt-5 font-semibold'>
            Enhance Your Music Experience
          </h1>
          <div className='flex flex-wrap xl:flex-nowrap justify-center sm:justify-start'>
            <div className='bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-5 sm:mt-10 mx-4'>
              <span>23</span>
              <span>Hours</span>
            </div>
            <div className='bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-5 sm:mt-10 mx-4'>
              <span>05</span>
              <span>Days</span>
            </div>
            <div className='bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-5 sm:mt-10 mx-4'>
              <span>09</span>
              <span>Minutes</span>
            </div>
            <div className='bg-white w-24 rounded-full h-24 flex justify-center items-center flex-col mt-5 sm:mt-10 mx-4'>
              <span>11</span>
              <span>Seconds</span>
            </div>
          </div>

          <div className='mt-5 sm:mt-10'>
            <button className='text-white bg-[#00FF66] px-2 py-3 md:px-10 md:py-4 rounded-lg'>
              View All Products
            </button>
          </div>
        </div>
        <div className='p-4'>
          <img
            src={jblSpeaker}
            alt='Vercel Logo'
            width={200} // Adjust the width according to your design
            height={200} // Adjust the height according to your design
            className='h-auto w-full sm:w-auto mx-auto sm:mx-0'
          />
        </div>
      </div>
    </main>
  )
}
