import { FaRegHeart } from "react-icons/fa"
import productView from "../../assets/productView.svg"
import StarIcon from "../../assets/StarIcon.svg"
import { useDispatch, useSelector } from "react-redux"
import { ProductRootState } from "../../Redux/features/productSlice"
import {
  CardDataRootState,
  setCardData,
} from "../../Redux/features/cardDataSlice"
import {
  WishListRootState,
  setWishListData,
} from "../../Redux/features/wishListData"

export default function ProductCard({ product }: any) {
  const productData = useSelector(
    (state: ProductRootState) => state.productData.productData
  )
  const cardData = useSelector(
    (state: CardDataRootState) => state.cardData.cardData
  )
  const wishListData = useSelector(
    (state: WishListRootState) => state.wishListData.wishListData
  )

  const dispatch = useDispatch()

  const addToCard =  (id: any) => {
    const data: any = productData.find((product: any) => product.id === id)

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

  const addToWishList = async (id: any) => {
    const data: any = productData.find((product: any) => product.id === id)

    const val = {
      id: wishListData.length
        ? wishListData[wishListData.length - 1].id + 1
        : 1,
      discount: data.discount,
      image_src: data.image_src,
      product_name: data.product_name,
      product_price: data.product_price,
      star_rating: data.star_rating,
      review: data.review,
    }

    const newData = wishListData.length ? [...wishListData, val] : [val]
    dispatch(setWishListData(newData))
  }

  const discount = Number(product.discount)
  const price = Number(product.product_price)
  const discountPrice = price - (price / 100) * discount
  // const yellowStars :number = Number(product.star_rating)
  // const whiteStars = 5 - yellowStars

  return (
    <main>
      <div className='p-3 relative '>
        <div className='bg-[#F5F5F5]  rounded group relative' key={product.id}>
          <div className='p-10 cursor-pointer'>
            <div className=''>
              <img
                src={product?.image_src}
                alt='Vercel Logo'
                width={0}
                height={0}
                className='h-40 w-40 xl:ml-10'
              />
            </div>
            <div className='absolute top-5 right-4 bg-white rounded-full p-2'>
              <FaRegHeart
                onClick={() => {
                  addToWishList(product.id)
                }}
              />
            </div>

            <div className='absolute top-14 mt-2 right-4 bg-white rounded-full p-2'>
              <img
                src={productView}
                alt='Vercel Logo'
                width={17}
                height={10}
                className=''
              />
            </div>
          </div>
          <div className='bg-black py-2 text-center hidden group-hover:block absolute w-full bottom-0'>
            <button
              className='text-white font-semibold'
              onClick={() => {
                addToCard(product.id)
              }}>
              Add To Cart
            </button>
          </div>
        </div>
        <div className=''>
          <h1 className='uppercase '>{product?.product_name}</h1>
          <div className='flex my-1'>
            <div className='text-[#DB4444] flex'>
              <div>$</div>
              <div>{discountPrice}</div>
            </div>
            <del className='text-gray-500 flex ml-5'>
              <div>$</div>
              <div>{price}</div>
            </del>
          </div>
          <div className='flex'>
            {[1, 2, 3, 4, 5].map((star) => {
              return (
                <img
                  key={star}
                  src={StarIcon}
                  alt='Vercel Logo'
                  width={20}
                  height={20}
                  className='ml-1'
                />
              )
            })}
            <p className='mx-1 text-gray-500 font-bold'>({product?.review})</p>
          </div>
        </div>
        <div className='bg-red-500 px-4 w-[60px] flex rounded py-1 absolute top-8 left-7'>
          <p className='text-white '>{discount}</p>
          <p className='text-white'>%</p>
        </div>
      </div>
    </main>
  )
}
