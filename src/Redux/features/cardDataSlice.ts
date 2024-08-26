import { createSlice } from "@reduxjs/toolkit"

export interface cardDataTypes {
  id: number
  product_name: string
  product_price: number
  image_src: string
  discount: number
  quantity: string
}

export interface cardDataState {
  cardData: cardDataTypes[]
}

export interface CardDataRootState {
  cardData: cardDataState
}

const data = localStorage.getItem("cardData")

const newData: cardDataTypes[] = data !== null ? JSON.parse(data) : []

const initialState: cardDataState = {
  cardData: newData,
}

const cardDataSlice = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    setCardData: (state, action) => {
      state.cardData = action.payload
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload
      const product = state.cardData.find((data: any) => data.id === productId)
      const quantity = Number(product?.quantity)
      if (product && quantity < 10) {
        const setQuantity = quantity + 1
        product.quantity =
          setQuantity.toString().length === 1
            ? "0" + setQuantity
            : setQuantity.toString()
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload
      const product = state.cardData.find((data: any) => data.id === productId)
      let quantity = Number(product?.quantity)
      if (product && quantity > 1) {
        const setQuantity = quantity - 1
        product.quantity =
          setQuantity.toString().length === 1
            ? "0" + setQuantity
            : setQuantity.toString()
      }
    },
    deleteCardData: (state, action) => {
      const deleteId = action.payload
      state.cardData = state.cardData.filter(data => data.id !== deleteId)
    }
  },
})

export const { setCardData, incrementQuantity, decrementQuantity ,deleteCardData } =
  cardDataSlice.actions

export default cardDataSlice.reducer
