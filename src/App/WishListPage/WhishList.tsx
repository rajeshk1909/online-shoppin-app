import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import WishListCard from "./components/WishListCard"
import { useDispatch, useSelector } from "react-redux"
import { ProductRootState } from "../../Redux/features/productSlice"
import { WishListRootState } from "../../Redux/features/wishListData"
import {
  CardDataRootState,
  setCardData,
} from "../../Redux/features/cardDataSlice"

const WhishList = () => {
  const productData = useSelector(
    (state: ProductRootState) => state.productData.productData
  )
  const wishListData = useSelector(
    (state: WishListRootState) => state.wishListData.wishListData
  )
  const cardData = useSelector(
    (state: CardDataRootState) => state.cardData.cardData
  )

  const dispatch = useDispatch()

  const handleAddToCard = (id: any, key: string) => {
    const data: any =
      key === "whisList"
        ? wishListData.find((data: any) => data.id === id)
        : productData.find((data: any) => data.id === id)

    const val = {
      id: cardData.length ? cardData[cardData.length - 1].id + 1 : 1,
      discount: data.discount,
      image_src: data.image_src,
      product_name: data.product_name,
      product_price: data.product_price,
      quantity: "01",
    }

    const newData = cardData.length ? [...cardData, val] : [val]
    dispatch(setCardData(newData))
  }

  const newProductData = productData.filter((product: any) => product.id < 5)

  return (
    <div>
      <Navbar />
      <div className='mx-20'>
        <div className=' flex justify-between items-center h-20 '>
          <p>WishList({wishListData.length})</p>
          <button className='border text-xs font-semibold border-black py-2 px-7 rounded shadow bg-gray-100 '>
            Move All To Bag{" "}
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {wishListData.length > 0 &&
            wishListData.map((product: any) => (
              <WishListCard
                handleAddToCard={handleAddToCard}
                key={product.id}
                product={product}
                icon='eye'
              />
            ))}
        </div>
        <div className='text-3xl font-bold flex justify-center'>
          {wishListData.length === 0 && <p>Your Wish List Is Empty</p>}
        </div>
        <div className='mx-20 flex justify-between items-center h-20 '>
          <p>Just For You</p>
          <button className='border text-xs font-semibold border-black py-2 px-10 rounded shadow bg-gray-100 '>
            See All
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {newProductData.map((product: any) => (
            <WishListCard
              handleAddToCard={handleAddToCard}
              key={product.id}
              product={product}
              icon='delete'
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WhishList




