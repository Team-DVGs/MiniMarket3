import React, {useEffect, useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet, useLocation, useNavigate} from "react-router-dom"
import MailFeature from './Home/MailFeature'
import BreadCrumbs from './BreadCrumbs';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useAppDispatch , useAppSelector} from '../store';
import { checkLogin } from '../store/features/Auth/userSlice'
import { fetchCart } from '../store/features/Cart/cartSlice'


const Layout = () => {
  const user = useAppSelector((state) => state.user);
  const [loaded, setLoaded] = useState<boolean>(false);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changePath = () => {
    if (["/dangnhap", "/dangky"].includes(location.pathname)) {
      navigate("/taikhoan");
    }
    // else{
    //   navigate('/');
    // }
  }
  useEffect(() => {
    window.scrollTo(0,0);
    if (user.data.isLoggedIn) {
      changePath();
    }
  }, [location])

  useEffect(() => {
    dispatch(checkLogin()).then((res) => {
      // Successfully signig in
      if (res.payload){
        changePath();
        setLoaded(true);
      }
    });
  }, [])


  // useEffect(() => {
  //   if (loaded){
  //     fetchCart("7");
  //   }
  // }, [loaded])

  useEffect(() => {
    console.log('cookie deleted')
  }, [document.cookie])
  return (
    <SkeletonTheme baseColor="#f1f1f1" highlightColor="#cecece">
      <div className="page">
        <Header />
        <div className="container-md">
          <Outlet />
          <MailFeature />
        </div>
        <Footer />
      </div>
    </SkeletonTheme>
  );
}

export default Layout;