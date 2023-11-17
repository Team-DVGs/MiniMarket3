import React from 'react';
import "./scss/Home.scss";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home />}/>
    </Route>
  )
)

const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
