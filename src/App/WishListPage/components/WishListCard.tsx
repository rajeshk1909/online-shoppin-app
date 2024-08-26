import { MdDelete } from "react-icons/md"
import { GoEye } from "react-icons/go"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import StarIcon from "../../../assets/StarIcon.svg"
import { useDispatch } from "react-redux"
import { deleteWishListData } from "../../../Redux/features/wishListData"

type WishListCardProps = {
  product: any
  icon: "eye" | "delete"
  handleAddToCard: (id: any, key: string) => void
}

const WishListCard = ({
  product,
  icon,
  handleAddToCard,
}: WishListCardProps) => {
  const dispatch = useDispatch()

  const handleDelete = (id: any) => {
    dispatch(deleteWishListData(id))
  }

  const discount = Number(product.discount)
  const price = Number(product.product_price)
  const discountPrice = price - (price / 100) * discount

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
                className='h-40 w-40 xl:ml-3'
              />
            </div>

            <div className='absolute top-2 right-4 bg-white rounded-full p-2'>
              {icon === "eye" ? (
                <MdDelete
                  onClick={() => {
                    handleDelete(product.id)
                  }}
                />
              ) : (
                <GoEye
                // onClick={() => {
                //   handleOnClick(product.id)
                // }}
                />
              )}
            </div>
          </div>
          <div className='bg-black py-2 text-center rounded-b-md  absolute w-full bottom-0'>
            {icon === "eye" ? (
              <button
                onClick={() => {
                  handleAddToCard(product.id, "whisList")
                }}
                className='text-white hover:text-yellow-300 font-semibold'>
                {" "}
                <ShoppingCartIcon /> Add To Cart
              </button>
            ) : (
              <button
                onClick={() => {
                  handleAddToCard(product.id, "product")
                }}
                className='text-white hover:text-yellow-300 font-semibold'>
                {" "}
                <ShoppingCartIcon /> Add To Cart
              </button>
            )}
          </div>
        </div>
        <div className=''>
          <h1 className='uppercase '>{product?.product_name}</h1>
          <div className='flex my-1'>
            <div className='text-[#DB4444] flex'>
              <div>$</div>
              <div>{discountPrice}</div>
            </div>
            <div className='text-gray-500 flex ml-5'>
              <div>$</div>
              <div>{price}</div>
            </div>
          </div>
          {icon === "delete" ? (
            <div className='flex'>
              {[1, 2, 3, 4, 5].map((id: any) => {
                return (
                  <img
                    key={id}
                    src={StarIcon}
                    alt='Vercel Logo'
                    width={20}
                    height={20}
                    className='ml-1'
                  />
                )
              })}
              <p className='mx-1 text-gray-500 font-bold'>
                ({product?.review})
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className='bg-red-500 px-2 flex rounded absolute top-5 left-5'>
          <p className='text-white '>{discount}</p>
          <p className='text-white'>%</p>
        </div>
      </div>
    </main>
  )
}

export default WishListCard
