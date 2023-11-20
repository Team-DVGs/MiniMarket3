import React from 'react';
import "./scss/__component.scss";
import "./scss/Home.scss";
import "./scss/Collection.scss"


import { 
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";
  
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Collection from './pages/Collection';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route index element={<Home />}/>
      <Route path='/danhmuc' element={<Collection />}/>
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
