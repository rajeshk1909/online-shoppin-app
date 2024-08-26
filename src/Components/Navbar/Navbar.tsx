import { Link, useNavigate } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa"
import SearchIcon from "@mui/icons-material/Search"
import Badge from "@mui/material/Badge"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useSelector } from "react-redux"
import { CardDataRootState } from "../../Redux/features/cardDataSlice"
import { WishListRootState } from "../../Redux/features/wishListData"
import { currentUserDataRootState } from "../../Redux/features/currentUserData"

const Navbar = () => {
  const currentUserData: any = useSelector(
    (state: currentUserDataRootState) => state.currentUserData.currentUserData
  )

  const cardData = useSelector(
    (state: CardDataRootState) => state.cardData.cardData
  )

  const wishListData = useSelector(
    (state: WishListRootState) => state.wishListData.wishListData
  )

  const navigate = useNavigate()

  return (
    <>
      <div className='flex justify-evenly lg:justify-between p-5 bg-white border-b-2 pb-3'>
        <div className='mb-4 md:mb-0'>
          <h1 className='font-bold text-2xl'>Exclusive</h1>
        </div>
        <div className='hidden md:flex items-center'>
          <ul className='flex items-center flex-wrap px-5 mx-2 md:mx-5'>
            <li className='md:mx-2 lg:mx-6 xl:mx-10  cursor-pointer'>
              <Link to='/'>Home</Link>
            </li>
            <li className='md:mx-2  lg:mx-6 xl:mx-10  cursor-pointer'>
              Contact
            </li>
            <li className='md:mx-2  lg:mx-6 xl:mx-10  cursor-pointer'>About</li>
            <li className='md:mx-2  lg:mx-6 xl:mx-10  cursor-pointer'>
              <Link to='/SignUp'>SignUp</Link>
            </li>
            {currentUserData?.type === "admin" && (
              <li className='md:mx-2  lg:mx-6 xl:mx-10  cursor-pointer'>
                <Link to='/ProductAdd'>Add Product</Link>
              </li>
            )}
          </ul>
        </div>

        <div className='flex'>
          <div className='hidden sm:flex relative'>
            <input
              type='text'
              placeholder='What are you looking for...'
              className='w-[200px] pl-4 pr-8 md:pr-10 py-2 border border-gray-300 focus:outline-none'
            />
            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
              <SearchIcon />
            </div>
          </div>
          <div className='flex items-center'>
            <div className=' mx-5 '>
              <Badge badgeContent={wishListData.length} color='primary'>
                <FaRegHeart
                  className=' text-xl my-[2px] cursor-pointer'
                  onClick={() => {
                    navigate("/WishList")
                  }}
                />
              </Badge>
            </div>
            <div className='mr-5'>
              <Badge badgeContent={cardData.length} color='primary'>
                <ShoppingCartIcon
                  color='action'
                  className='cursor-pointer'
                  onClick={() => {
                    navigate("/CardPage")
                  }}
                />
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
