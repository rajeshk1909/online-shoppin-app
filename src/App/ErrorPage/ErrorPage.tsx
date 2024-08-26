import { useNavigate } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"

const ErrorPage = () => {
  const navigate = useNavigate()
  const handleHomeBtn = () => {
    navigate("/")
  }

  return (
    <div>
      <Navbar />
      <div className='h-[565px]'>
        <div className='flex mx-20  py-10'>
          <button
            onClick={() => {
              handleHomeBtn()
            }}>
            Home
          </button>
          <p className='px-3'>/</p>
          <button className='font-semibold'>404 Error</button>
        </div>

        <div className='flex justify-center'>
          <div className='flex  items-center flex-col '>
            <h1 className='font-bold text-[100px] '>404 Not Fount</h1>
            <p className='py-10'>
              Your visited page not fount.You may go home page
            </p>
            <button
              className='text-white bg-red-500 mt-10 px-4 py-3 md:px-10 md:py-3 rounded-md'
              onClick={() => {
                handleHomeBtn()
              }}>
              Back to home page
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage
