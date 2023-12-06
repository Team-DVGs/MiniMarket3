import React from 'react';
import "./scss/__component.scss";
import "./scss/Home.scss";
import "./scss/Collection.scss";
import "./scss/Products.scss";
import "./scss/Product.scss";
import "./scss/Info.scss";
import "./scss/Auth.scss";
import "./scss/Payment.scss";

import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
// Components
import Layout from './components/Layout';
// Pages
import Home from './pages/Home/Home';
import Collection from './pages/Collection';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import About from './pages/Info/About';
import Delivery from './pages/Info/Delivery';
import Policies from './pages/Info/Policies';
import Contact from './pages/Info/Contact';
import Recruitment from './pages/Info/Recruitment';
import Cart from './pages/Payment/Cart';
import Payment from './pages/Payment/Payment';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/danhmuc" element={<Collection />} />
      <Route path="/danhmuc/suatuoi" element={<Products />} />
      <Route path="/sp" element={<Product />} />
      <Route path="/taikhoan/dangnhap" element={<Login />} />
      <Route path="/taikhoan/dangky" element={<Register />} />
      <Route path='/giohang' element={<Cart />}/>
      <Route path='/giohang/thanhtoan' element={<Payment/>} />
      {/* Info pages */}
      <Route path="/vechungtoi" element={<About />} />
      <Route path="/vanchuyen" element={<Delivery />} />
      <Route path="/chinhsach" element={<Policies />} />
      <Route path="/lienhe" element={<Contact />} />
      <Route path="/tuyendung" element={<Recruitment />} />
    </Route>
  )
);

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
