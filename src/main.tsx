import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App/HomePage/App.tsx"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./Auth/SignUp/SignUp.tsx"
import Login from "./Auth/Login/Login.tsx"
import ProductAdd from "./App/ProductAdd/ProductAdd.tsx"
import CardPage from "./App/CardPage/CardPage.tsx"
import ErrorPage from "./App/ErrorPage/ErrorPage.tsx"
import WhishList from "./App/WishListPage/WhishList.tsx"
import { Provider } from "react-redux"
import { store } from "./Redux/Store/Store.ts"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path='/' element={<App />} />
          <Route path='SignUP' element={<SignUp />} />
          <Route path='Login' element={<Login />} />
          <Route path='ProductAdd' element={<ProductAdd />} />
          <Route path='CardPage' element={<CardPage />} />
          <Route path='WishList' element={<WhishList />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
