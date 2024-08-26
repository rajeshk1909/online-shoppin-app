import { Link, useNavigate } from "react-router-dom"
import signUpLogo from "../../assets/signUpLogo.svg"
import Google from "../../assets/Google.svg"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { useState } from "react"
import {
  setUserData,
  userDataRootState,
} from "../../Redux/features/userDataSlice"
import { useDispatch, useSelector } from "react-redux"

const SignUp = () => {
  const userData = useSelector(
    (state: userDataRootState) => state.userData.userData
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [values, setValues] = useState<any>([
    {
      name: "",
      userId: "",
      Password: "",
    },
  ])

  const [userValError, setUserValError] = useState<any>({
    name: false,
    userId: false,
    password: false,
  })

  const handleOnChange = (e: any, key: any) => {
    let val = { ...values }
    val[key] = e.target.value
    setValues(val)

    // used regex for name and email and password
    const name = /^[^\d]{4,}$/
    const password = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const userId =
      /^(?:(?:\+|00)([1-9]\d{0,2}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    // form validation
    if (key === "name") {
      const isvalid = name.test(e.target.value)
      setUserValError({ ...userValError, firstName: isvalid })
    } else if (key === "userId") {
      const isvalid = userId.test(e.target.value)
      setUserValError({ ...userValError, userId: isvalid })
    } else if (key === "password") {
      const isvalid = password.test(e.target.value)
      setUserValError({ ...userValError, password: isvalid })
    }
  }

  const createAccount = () => {
    const checkEmail = userData.find(
      (data: any) => data.userId === values.userId
    )

    if (checkEmail?.userId !== undefined) {
      alert("Enter different user id the phone numberor email alread used.")
      return
    } else {
      if (!userValError.firstName) {
        alert("Please enter a valid Firstname name with 4 characters long.")
        return
      } else if (!userValError.userId) {
        alert("Please enter a valid Email or phone number.")
        return
      } else if (!userValError.password) {
        alert(
          "Please enter a valid password (at least 8 characters long, including at least 1 numbers and 1 character)."
        )
        return
      } else {
        const val = {
          id: userData.length ? userData[userData.length - 1].id + 1 : 1,
          name: values.name,
          userId: values.userId,
          Password: values.password,
          type: "user",
        }
        const newData = userData.length ? [...userData, val] : [val]
        dispatch(setUserData(newData))
        navigate("/")
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className='grid sm:grid-cols-2 py-10'>
        <div className='w-[100%]'>
          <img src={signUpLogo} alt='camera image' />
        </div>
        <div className='mx-auto my-auto'>
          <p className='lg:text-[30px] sm:mx-2 text-[30px]  sm:text-[25px] font-semibold'>
            Create an account
          </p>
          <p className='text-[14px] sm:mx-2'>Enter your details below</p>
          <form>
            <input
              type='text'
              value={values.name}
              onChange={(e: any) => {
                handleOnChange(e, "name")
              }}
              placeholder='Name'
              className='outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5'
            />
            <br />
            <input
              type='text'
              onChange={(e: any) => {
                handleOnChange(e, "userId")
              }}
              value={values.id}
              placeholder='Email or Phone number'
              className='outline-none sm:mx-2 border-b pb-1 border-black'
            />{" "}
            <br />
            <input
              type='Password'
              value={values.password}
              onChange={(e: any) => {
                handleOnChange(e, "password")
              }}
              placeholder='Password'
              className='outline-none sm:mx-2 border-b pb-1 border-black sm:my-3 md:my-5 my-5'
            />
          </form>
          <br />
          <button
            onClick={() => {
              createAccount()
            }}
            className='text-center sm:mx-2 bg-[#DB4444] w-[250px] mt-5 sm:mt-3 md:mt-5 h-[40px] rounded-md text-white'>
            Create Account
          </button>
          <br />
          <div className='border-black border flex justify-center items-center w-[250px] sm:mx-2 mt-3 my-3'>
            <img src={Google} alt='Google Image' />
            <button className='text-center rounded-md my-3 mx-2'>
              sign up with Google
            </button>
          </div>
          <p className='text-center  w-[250px] h-[40px]'>
            Already have account ?
            <Link
              to='/Login'
              className='outline-none font-semibold border-b  pb-1 border-black'>
              Log in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SignUp
