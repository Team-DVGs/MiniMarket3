import React from 'react';
import "./scss/__component.scss";
import "./scss/Home.scss";
import "./scss/Collection.scss";
import "./scss/Products.scss";
import "./scss/Product.scss"

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='/danhmuc' element={<Collection />}/>
      <Route path="/danhmuc/sp" element={<Products />}/>
      <Route path="/sp" element={<Product />} />
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
