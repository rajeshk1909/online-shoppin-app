import { createSlice } from "@reduxjs/toolkit"

export interface ProductDataType {
  id: number
  product_name: string
  product_price: number
  image_src: string
  discount: number
  review: number
  star_rating: string
}

export interface ProductDataState {
  productData: ProductDataType[]
}

export interface ProductRootState {
  productData: ProductDataState
}

const data = localStorage.getItem("productData")


const newData: ProductDataType[] = data === null ? [] : JSON.parse(data)

const initialState: ProductDataState = {
  productData: newData,
}

const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload
    },
  },
})

export const { setProductData } = productDataSlice.actions

export default productDataSlice.reducer
