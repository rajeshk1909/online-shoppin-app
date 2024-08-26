import { MdDelete } from "react-icons/md"
import {
  decrementQuantity,
  incrementQuantity,
  deleteCardData,
} from "../../../Redux/features/cardDataSlice"
import { useDispatch } from "react-redux"

type CardDesignProps = {
  product: any
}

const CardDesign = ({ product }: CardDesignProps) => {
  const dispatch = useDispatch()

  const handleIncrement = (id: any) => {
    dispatch(incrementQuantity(id))
  }

  const handleDecrement = (id: any) => {
    dispatch(decrementQuantity(id))
  }

  const handleDelete = (id: any) => {
    dispatch(deleteCardData(id))
  }

  const discount = Number(product.discount)
  const price = Number(product.product_price)
  const discountPrice = price - (price / 100) * discount
  const subTotal = Number(product.quantity) * discountPrice

  return (
    <div className='flex justify-evenly py-5 bg-gray-100 shadow-lg my-5 mx-20 '>
      <div className='flex items-center '>
        <MdDelete
          onClick={() => {
            handleDelete(product.id)
          }}
          className='text-xl cursor-pointer mr-5 '
        />
        <img
          src={product.image_src}
          alt=''
          height={10}
          width={30}
          className='mr-5'
        />
        <p>{product.product_name}</p>
      </div>
      <div className="flex items-center"> {product.product_price} </div>
      <div className='flex justify-center items-center '>
        <button
          onClick={() => {
            handleIncrement(product.id)
          }}
          className='border-2 px-3 rounded-md border-b text-xl'>
          +
        </button>
        <p className='xl:mx-10 lg:mx-8 mx-2 sm:mx-4 md:mx-6 border-2 px-3 rounded-md border-b'>
          {product.quantity}
        </p>
        <button
          onClick={() => {
            handleDecrement(product.id)
          }}
          className='border-2 px-3 rounded-md border-b text-xl'>
          -
        </button>
      </div>
      <div className="flex items-center" >{subTotal}</div>
    </div>
  )
}

export default CardDesign
