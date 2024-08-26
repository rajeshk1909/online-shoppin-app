import { useDispatch, useSelector } from "react-redux"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import loginImg from "../../assets/loginImg.svg"
import { userDataRootState } from "Redux/features/userDataSlice"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { setCurrentUser } from "../../Redux/features/currentUserData"

const Login = () => {
  const userData = useSelector(
    (state: userDataRootState) => state.userData.userData
  )

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [values, setValues] = useState<any>([
    {
      userId: "",
      Password: "",
    },
  ])

  const [userValError, setUserValError] = useState<any>({
    userid: false,
    password: false,
  })

  const handleOnChange = (e: any, key: any) => {
    let val = { ...values }
    val[key] = e.target.value
    setValues(val)

    // used regex for name and email and password
    const userid =
      /^(?:(?:\+|00)([1-9]\d{0,2}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    // form validation
    if (key === "userid") {
      const isvalid = userid.test(e.target.value)
      setUserValError({ ...userValError, userid: isvalid })
    } else if (key === "password") {
      const isvalid = password.test(e.target.value)
      setUserValError({ ...userValError, password: isvalid })
    }
  }

  const handleLogin = () => {
    const currentUser: any = userData.find(
      (user: any) => user.userId === values.userId
    )

    if (currentUser && currentUser.email === values.email) {
      if (userValError.password && currentUser.password === values.Password) {
        currentUser.type === "admin" ? navigate("/ProductAdd") : navigate("/")
        dispatch(setCurrentUser(currentUser))
        // navigate("/")
      } else {
        alert("Enter correct password.")
      }
    } else {
      alert("User not fount.")
    }
  }
  return (
    <main>
      <Navbar />
      <div className='grid grid-cols-2 py-3 '>
        <div className=' mb-[50px] mt-[50px] '>
          <img src={loginImg} alt='error'></img>
        </div>
        <div className=' mx-auto  mt-[170px]  '>
          <h2 className='lg:text-[35px]  sm:mx-2 text-[30px]  sm:text-[25px] font-semibold '>
            Login in to Exclusive
          </h2>
          <p className=' text-[15px] py-5 sm:mx-2 font-semibold'>
            Enter your details below
          </p>
          <br />
          <input
            type='email'
            value={values.userId}
            onChange={(e: any) => {
              handleOnChange(e, "userId")
            }}
            placeholder='Email or Phone Numbers '
            className='outline-none sm:mx-2 border-b pb-3 border-black  '
          />
          <br />
          <br />
          <input
            type='password'
            value={values.password}
            onChange={(e: any) => {
              handleOnChange(e, "password")
            }}
            placeholder='password'
            className='outline-none sm:mx-2 border-b pb-3 border-black sm:my-3 md:my-5 my-5'
          />
          <br />
          <br />
          <button
            onClick={() => {
              handleLogin()
            }}
            className='text-center sm:mx-2 bg-[#DB4444] w-[150px] mt-5 sm:mt-3 md:mt-5 h-[40px] rounded-md text-white'>
            Login
          </button>
          <span className='text-[#DB4444]  ml-10'>Forget password?</span>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Login
