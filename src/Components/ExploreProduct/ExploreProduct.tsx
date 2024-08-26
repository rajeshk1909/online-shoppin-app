import leftArrow from "../../assets/leftArrow.svg"
import rightArrow from "../../assets/rightArrow.svg"
import ProductCard from "../ProductCard/ProductCard"
import { productDatas } from "../../const/productDatas"


export default function ExploreProduct() {
  const productData = productDatas
  return (
    <main>
      <div className='mt-10'>
        <h1 className='text-lg text-[#DB4444] font-bold'>Categorie's</h1>
        <div className='flex justify-between'>
          <h1 className='md:text-5xl font-bold'>Browse By Category</h1>
          <div className='flex'>
            <div className='bg-[#F5F5F5] mx-2 p-3 rounded-full'>
              <img
                src={leftArrow}
                alt='Vercel Logo'
                width={25}
                height={25}
                className=''
              />
            </div>
            <div className='bg-[#F5F5F5] flex items-center p-3 rounded-full'>
              <img
                src={rightArrow}
                alt='Vercel Logo'
                width={25}
                height={25}
                className=''
              />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {productData.length > 1 &&
            productData.map((product: any) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            })}
        </div>

        <div className='flex justify-center mt-4 mb-4'>
          <button className='text-white bg-red-500 px-10 py-4 rounded-xl'>
            View All Products
          </button>
        </div>
      </div>
    </main>
  )
}
