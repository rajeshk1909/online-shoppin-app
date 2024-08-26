import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ProductRootState } from "Redux/features/productSlice"
import { setProductData } from "../../Redux/features/productSlice"
import { useNavigate } from "react-router-dom"

const ProductAdd = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const productData   = useSelector(
    (state: ProductRootState) => state.productData.productData
  )

  const [values, setValues] = useState<any>({
    discount: "",
    image_src: "",
    product_name: "",
    product_price: "",
    star_rating: "",
    review: "",
  })

  const handleOnChange = (e: any, key: any) => {
    let val = { ...values }
    val[key] = e.target.value
    setValues(val)
  }

  const addProduct = () => {
    if (!values.discount.length) {
      alert("Enter discount percentage")
      return
    } else if (!values.image_src.length) {
      alert("Enter image src")
      return
    } else if (!values.product_name.length) {
      alert("Enter Product name")
      return
    } else if (!values.product_price.length) {
      alert("Enter Product price")
      return
    } else if (!values.star_rating.length) {
      alert("Enter star rating")
      return
    } else if (!values.review.length) {
      alert("Enter review count")
      return
    } else {
      const val = {
        id: productData.length ? productData[productData.length - 1].id + 1 : 1,
        discount: values.discount,
        image_src: values.image_src,
        product_name: values.product_name,
        product_price: values.product_price,
        star_rating: values.star_rating,
        review: values.review,
      }
      const newData = productData.length > 0 ? [...productData, val] : [val]
      dispatch(setProductData(newData))

      const newVal = {
        discount: "",
        image_src: "",
        product_name: "",
        product_price: "",
        star_rating: "",
        review: "",
      }
      setValues(newVal)
    }
  }

  return (
    <div className='flex items-center justify-center '>
      <div className='w-[400px]'>
        <div className='flex items-center justify-center text-2xl font-bold font-sans mt-[100px] text-yellow-500 '>
          Add New Product
        </div>
        <div className='grid grid-cols-2 grid-flow-col mb-3 mt-[50px] font-semibold font-sans '>
          <label htmlFor='' className='min-w-[30%]  '>
            Discount{" "}
          </label>
          <input
            type='number'
            placeholder='Numbers only'
            className='min-w-[70%] py-1 outline-none focus:border-green-400 rounded-md text-xs border-2'
            value={values.discount}
            onChange={(e: any) => {
              handleOnChange(e, "discount")
            }}
          />
        </div>

        <div className='grid grid-cols-2 grid-flow-col mb-3 font-semibold font-sans '>
          <label htmlFor='' className='min-w-[30%]  '>
            Image src
          </label>
          <input
            type='text'
            placeholder='Enter image src'
            value={values.image_src}
            className='min-w-[70%] py-1 outline-none focus:border-green-400 rounded-md text-xs border-2'
            onChange={(e: any) => {
              handleOnChange(e, "image_src")
            }}
          />
        </div>

        <div className='grid grid-cols-2 grid-flow-col mb-3 font-semibold font-sans '>
          <label htmlFor='' className='min-w-[30%]  '>
            Product Name
          </label>
          <input
            type='text'
            placeholder='Enter product name'
            className='min-w-[70%] py-1 outline-none focus:border-green-400 rounded-md text-xs border-2'
            value={values.product_name}
            onChange={(e: any) => {
              handleOnChange(e, "product_name")
            }}
          />
        </div>

        <div className='grid grid-cols-2 grid-flow-col mb-3 font-semibold font-sans '>
          <label htmlFor='' className='min-w-[30%]  '>
            Product Price
          </label>
          <input
            type='number'
            placeholder='Numbers only'
            className='min-w-[70%] py-1 outline-none focus:border-green-400 rounded-md text-xs border-2'
            value={values.product_price}
            onChange={(e: any) => {
              handleOnChange(e, "product_price")
            }}
          />
        </div>

        <div className='grid grid-cols-2 grid-flow-col mb-3 font-semibold font-sans '>
          <label htmlFor='' className='min-w-[30%]  '>
            Star Rating
          </label>
          <input
            type='number'
            placeholder='Numbers only (1-5) stars '
            className='min-w-[70%] py-1 outline-none focus:border-green-400 rounded-md text-xs border-2'
            value={values.star_rating}
            onChange={(e: any) => {
              handleOnChange(e, "star_rating")
            }}
          />
        </div>

        <div className='grid grid-cols-2 grid-flow-col mb-3 font-semibold font-sans '>
          <label htmlFor='' className='min-w-[30%]  '>
            Review Count
          </label>
          <input
            type='number'
            placeholder='Numbers only'
            className='min-w-[70%] py-1 outline-none focus:border-green-400 rounded-md text-xs border-2'
            value={values.review}
            onChange={(e: any) => {
              handleOnChange(e, "review")
            }}
          />
        </div>

        <div className='flex items-center justify-between mt-5 '>
          <button
            onClick={() => {
              addProduct()
            }}
            className='text-white bg-red-500 px-6 py-1 outline-none focus:border-green-400 font-semibold font-sans rounded-md'>
            Add Product
          </button>
          <button
            onClick={() => {
              navigate("/")
            }}
            className='text-white bg-red-500 px-6 py-1 outline-none focus:border-green-400 font-semibold font-sans rounded-md'>
            Go to Home Page
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductAdd
