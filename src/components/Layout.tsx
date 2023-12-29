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
import { fetchOrderList } from '../store/features/Orders/orderListSlice'


const Layout = () => {
  const user = useAppSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const changePath = () => {
    if (["/dangnhap", "/dangky"].includes(location.pathname)) {
      navigate("/taikhoan");
    } 
  }
  const reNavigate = (path1: string, path2:string) => {
    if (location.pathname === path1){
      navigate(path2);
    }
  }
  useEffect(() => {
    window.scrollTo(0,0);
    if (user.data.isLoggedIn) {
      changePath();
    }
    reNavigate("/taikhoan/donhang", "/taikhoan");
  }, [location])

  useEffect(() => {
    dispatch(checkLogin()).then((res) => {
      // Successfully signig in
      if (res.payload){
        changePath();
      }
    });
  }, [])

  useEffect(() => {
    dispatch(fetchCart(user.data.cartId.toString()));
    // dispatch(fetchOrderList(user.data.id.toString()));

  }, [user.data.isLoggedIn]);


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