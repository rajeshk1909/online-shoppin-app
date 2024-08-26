import { createSlice  } from "@reduxjs/toolkit"

export interface wishListdataType {
  id: number
  product_name: string
  product_price: number
  image_src: string
  discount: number
  review: number
  star_rating: string
}

export interface wishListDataState {
  wishListData: wishListdataType[]
}

export interface WishListRootState {
  wishListData: wishListDataState
}

const data = localStorage.getItem("wishListData")

const newData: wishListdataType[] = data !== null ? JSON.parse(data) : []

const initialState: wishListDataState = {
  wishListData: newData,
}


const wishListDataSlice = createSlice({
  name: "wishListData",
  initialState,
  reducers: {
    setWishListData: (state , action) => {
      state.wishListData = action.payload
    },
    deleteWishListData: (state, action) => {
      const deleteId = action.payload;
      state.wishListData = state.wishListData.filter(data => data.id !== deleteId);
    },

  },
})

export const { setWishListData ,deleteWishListData } = wishListDataSlice.actions

export default wishListDataSlice.reducer
