import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import ProductDataReducer from "../features/productSlice"
import cardDataReducer from "../features/cardDataSlice"
import wishListDataReducer from "../features/wishListData"
import userDataReducer from "../features/userDataSlice"
import currentUserDataReducer from "../features/currentUserData"

// Combine your reducers
const rootReducer = combineReducers({
  productData: ProductDataReducer,
  cardData: cardDataReducer,
  wishListData: wishListDataReducer,
  userData: userDataReducer,
  currentUserData:currentUserDataReducer,
})

// Configure persist options
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["productData", "cardData", "wishListData" , "userData","currentUserData"], // List of reducers to persist
}

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create your Redux store
export const store = configureStore({
  reducer: persistedReducer,
})

// Create a persistor object
export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
