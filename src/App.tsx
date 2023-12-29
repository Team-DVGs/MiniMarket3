import React, {useEffect} from 'react';
import "./scss/__component.scss";
import "./scss/Home.scss";
import "./scss/Collection.scss";
import "./scss/Products.scss";
import "./scss/Product.scss";
import "./scss/Info.scss";
import "./scss/Auth.scss";
import "./scss/Payment.scss";
import "./scss/Others.scss";
import "./scss/User.scss";


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
import NotFound from './pages/Others/NotFound';
import AllProducts from './pages/Products/AllProducts';
import User from './pages/User/User';
import OrderList from './pages/User/OrderList';
import OrderDetail from './pages/User/OrderDetail';
// import { SkeletonTheme } from 'react-loading-skeleton/dist/SkeletonTheme';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/danhmuc" element={<Collection />} />
      <Route path="/danhmuc/:id" element={<Products />} />
      {/* All Products List, Searching, Sales */}
      <Route path="/search" element={<AllProducts />} />
      {/* Product Detail */}
      <Route path="/sanpham/:id" element={<Product />} />
      {/* Auth */}
      <Route path="/dangnhap" element={<Login />} />
      <Route path="/dangky" element={<Register />} />
      {/* User Info */}
      <Route path="/taikhoan" element={<User />}>
        <Route index element={<OrderList />} />
        <Route path="donhang/:id" element={<OrderDetail />} />
      </Route>
      {/* Cart and Payment */}
      <Route path="/giohang" element={<Cart />} />
      <Route path="/giohang/thanhtoan" element={<Payment />} />

      {/* Info pages */}
      <Route path="/vechungtoi" element={<About />} />
      <Route path="/vanchuyen" element={<Delivery />} />
      <Route path="/chinhsach" element={<Policies />} />
      <Route path="/lienhe" element={<Contact />} />
      <Route path="/tuyendung" element={<Recruitment />} />
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App: React.FC = () => {
  useEffect(() => {
     async function getVans(url: string) {
      const res = await fetch(url);
      // Checking if the request is good to go
      if (!res.ok) {
        // Throw errow and log into the console
        console.log("Failed a lot fuck");
        throw {
          message: "Failed to fetch vans",
          statusText: res.statusText,
          status: res.status,
        };
      }

      const data = await res.json();
      console.log(data);
      return data;
    }
    getVans("/api/danhmuc");
  }, [])

  return (
      <RouterProvider router={router} />
      // <MyComponent />
  );
}

export default App;
