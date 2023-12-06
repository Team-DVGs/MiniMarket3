import React, { useState, useEffect } from 'react'
import Sliders from '../../components/Home/Sliders';
import Features from '../../components/Home/Features';
import Popular from '../../components/Home/Popular';
import DailyBest from '../../components/Home/DailyBest';
import DayDeals from '../../components/Home/DayDeals';
import MailFeature from '../../components/Home/MailFeature';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchProductList } from '../../store/features/productListSlice';




const Home = () => {
  // States and vars
  const dispatch = useAppDispatch();
  const slider1 = process.env.PUBLIC_URL + '/assets/img/sliders/slider1.webp';
  const slider2 = process.env.PUBLIC_URL + "/assets/img/sliders/slider2.webp";
  const banners = [{
    id: 0,
    header: "Đừng bỏ lỡ cơ hội giảm giá sốc",
    title: "Đăng ký để nhận thông tin mới hàng ngày",
    imgUrl: slider1
  },{
    id: 1,
    header: "Rau tươi với nhiều ưu đãi",
    title: "Kiểm tra ngay",
    imgUrl: slider2
  }];
  
  const popProducts = useAppSelector(state => state.productList.info);
  useEffect(() => {
    dispatch(fetchProductList());
  
  }, [])
  
  
  return (
    <>
      <Sliders banners={banners} />
      <DayDeals daydeals={popProducts}/>
      <Features />
      <Popular popProducts={popProducts} />
      <DailyBest dailybest={popProducts} />
    </>
  );
}

export default Home