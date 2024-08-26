import CardDesign from "./components/CardDesign"
import Navbar from "../../Components/Navbar/Navbar"
import { useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import { CardDataRootState } from "../../Redux/features/cardDataSlice"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

const CardPage = () => {
  const navigate = useNavigate()
  const [totalPrice, setTotalPrice] = useState<any>()

  const cardData = useSelector(
    (state: CardDataRootState) => state.cardData.cardData
  )

  useEffect(() => {
    totalPriceAmount()
  })

  const totalPriceAmount = () => {
    let total = 0

    cardData.forEach((product: any) => {
      const productTotal = product.product_price * Number(product.quantity)
      total += productTotal
    })
    setTotalPrice(total)
  }

  const handleHomeBtn = () => navigate("/")

  return (
    <div className=''>
      <Navbar />
      <div className='flex mx-20  py-10'>
        <button
          onClick={() => {
            handleHomeBtn()
          }}>
          Home<span className='px-3'>/</span>
        </button>
        <button className='font-semibold'>Card</button>
      </div>
      <div className='flex justify-evenly shadow-md bg-gray-100 mx-20 py-3   font-semibold '>
        <div>Product</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Subtotal</div>
      </div>
      <div>
        {cardData.length > 0 &&
          cardData.map((product: any) => (
            <CardDesign key={product.id} product={product} />
          ))}
      </div>
      <div className='flex justify-center items-center h-20'>
        {cardData.length == 0 && (
          <p className='text-2xl font-semibold font-sans'>
            {" "}
            Your card id empty{" "}
          </p>
        )}
      </div>
      <div className='flex mx-20 justify-between  font-serif mt-5 mb-20 '>
        <button className=' px-4 py-3  border-2 border-black md:px-9 md:py-3 rounded-md'>
          Return To Shop
        </button>
        <button className=' px-4 py-3 border-2 border-black md:px-9 md:py-3 rounded-md'>
          Update Card
        </button>
      </div>
      <div className='mx-20 mb-20 flex md:flex-row justify-center flex-col md:justify-between'>
        <div>
          <input
            type='text'
            placeholder='Coupon Code'
            className='px-3 rounded-md mb-10 border-2 w-[250px] border-black mr-5 py-[6px] '
          />
          <button className='text-white bg-red-500 px-4 py-3 md:px-7 md:py-2 rounded-md'>
            Apply Coupon
          </button>
        </div>
        <div className='border-2 w-[500px] rounded-md p-5 border-black'>
          <p className='font-semibold font-sans mb-5 text-xl '>Card Total</p>
          <div className='flex justify-between border-b-2 mb-5  pb-3 items-center'>
            <p>Subtotal:</p>
            <p>{totalPrice}</p>
          </div>
          <div className='flex justify-between border-b-2 mb-5  pb-3 items-center'>
            <p>Shipping:</p>
            <p>{totalPrice > 5000 ? "Free" : 200}</p>
          </div>
          <div className='flex justify-between border-b-2 mb-5  pb-3 items-center'>
            <p>Total:</p>
            <p>{totalPrice > 5000 ? totalPrice : totalPrice + 200}</p>
          </div>
          <div className='flex items-center mt-5 justify-center'>
            <button className='text-white bg-red-500 px-4 py-3 md:px-10 md:py-3 rounded-md'>
              Process to checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CardPage
