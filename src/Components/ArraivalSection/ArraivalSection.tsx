import playStation from "../../assets/ps-5Image.png"
import womensCollection from "../../assets/womensCollection.jpeg"
import speakers from "../../assets/speakers.png"
import perfume from "../../assets/perfume.png"
import { TbTruckDelivery } from "react-icons/tb"
import { RiCustomerServiceLine } from "react-icons/ri"
import { SiSecurityscorecard } from "react-icons/si"
import { FaArrowUp } from "react-icons/fa6"

const ArraivalSection = () => {
  return (
    <main className='mt-10'>
      <div className=''>
        <div className='h-10 mb-10 flex items-center'>
          <div className='bg-[#DB4444] h-10 w-5 rounded-sm '></div>
          <h1 className='text-lg text-[#DB4444] ml-5 font-bold'>Featured</h1>
        </div>

        <div className='mb-20'>
          <h1 className='md:text-5xl font-bold'>New Arraival</h1>
        </div>
        <div className=' grid mb-10 gap-10 grid-cols-2'>
          <div className='bg-[#0D0D0D] h-[700px] relative flex items-end justify-center'>
            <img src={playStation} alt='PlayStation-5 image' />
            <div className='text-white bottom-10 left-12 absolute'>
              <p className='font-semibold text-xl'> Play Station 5</p>
              <div className='text-sm my-3 '>
                <p>Black and White versition of the ps5</p>
                <p>coming out on sale.</p>
              </div>
              <button className='border-b-2'>Shop Now</button>
            </div>
          </div>

          <div className='grid h-[700px] gap-10 grid-rows-2'>
            <div className='flex bg-[#0D0D0D] justify-end relative'>
              <img
                src={womensCollection}
                alt='Womens image'
                className='scale-x-[-1]'
              />

              <div className='text-white bottom-10 left-12 absolute'>
                <p className='font-semibold text-xl'> Women's Collection</p>
                <div className='text-sm my-3 '>
                  <p>featured Women collection that </p>
                  <p>give you another vibe.</p>
                </div>
                <button className='border-b-2'>Shop Now</button>
              </div>
            </div>

            <div className='grid gap-10 grid-cols-2'>
              <div className='flex bg-[#0D0D0D] items-center justify-center relative '>
                <img src={speakers} alt='Speakers' />
                <div className='text-white bottom-8 left-6 absolute'>
                  <p className='font-semibold text-xl'> Speakers</p>
                  <p className='text-sm my-3'>amazon wireless speakers</p>
                  <button className='border-b-2'>Shop Now</button>
                </div>
              </div>

              <div className='flex bg-[#0D0D0D] justify-center items-center relative '>
                <img src={perfume} alt='Perfume' />
                <div className='text-white bottom-8 left-6 absolute'>
                  <p className='font-semibold text-xl'> Perfume</p>
                  <p className='text-sm my-3'>Gucci INTENSE EDP</p>
                  <button className='border-b-2'>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-20 flex justify-evenly '>
        {/* 1st grid */}
        <div className='grid place-items-center '>
          <div className='h-16 w-16 flex items-center justify-center rounded-full  bg-gray-300 '>
            <div className='bg-black flex items-center rounded-full justify-center w-11 h-11'>
              <TbTruckDelivery className='text-3xl text-white ' />
            </div>
          </div>
          <p className='font-bold mt-5 mb-2 '>FREE AND FAST DELIVERY</p>
          <p>Free delivery for all orders over $140</p>
        </div>
        {/* 2nd grid */}
        <div className='grid place-items-center'>
          <div className='h-16 w-16 flex items-center justify-center rounded-full  bg-gray-300 '>
            <div className='bg-black flex items-center rounded-full justify-center w-11 h-11'>
              <RiCustomerServiceLine className='text-3xl text-white ' />
            </div>
          </div>
          <p className='font-bold mt-5 mb-2 '>24/7 CUSTOMER SERVICE</p>
          <p> Friendly 24/7 customer support </p>
        </div>
        {/* 3rd grid */}
        <div className='grid place-items-center '>
          <div className='h-16 w-16 flex items-center justify-center rounded-full  bg-gray-300 '>
            <div className='bg-black flex items-center rounded-full justify-center w-11 h-11'>
              <SiSecurityscorecard className='text-3xl text-white ' />
            </div>
          </div>
          <p className='font-bold mt-5 mb-2 '>MONEY BACK GUARANTEE</p>
          <p>We return money within 30 days</p>
        </div>
      </div>
      <div className='flex mb-10 justify-end'>
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-200 ">
          <FaArrowUp />
        </div>
      </div>
    </main>
  )
}

export default ArraivalSection
