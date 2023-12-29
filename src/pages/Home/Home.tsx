import React, { useState, useEffect } from 'react'
import Sliders from '../../components/Home/Sliders';
import Features from '../../components/Home/Features';
// import Popular from '../../components/Home/Popular';
// import DailyBest from '../../components/Home/DailyBest';
// import DayDeals from '../../components/Home/DayDeals';
import MailFeature from '../../components/Home/MailFeature';
import { useAppSelector, useAppDispatch } from '../../store';
import Popular from '../../components/Home/Popular';
import DayDeals from '../../components/Home/DayDeals';
import DailyBest from '../../components/Home/DailyBest';




const Home = () => {
  // States and vars
  const slider1 = process.env.PUBLIC_URL + "/assets/img/sliders/slider1.webp";
  const slider2 = process.env.PUBLIC_URL + "/assets/img/sliders/slider2.webp";
  const banners = [
    {
      id: 0,
      header: "Đừng bỏ lỡ cơ hội giảm giá sốc",
      title: "Đăng ký để nhận thông tin mới hàng ngày",
      imgUrl: slider1,
    },
    {
      id: 1,
      header: "Rau tươi với nhiều ưu đãi",
      title: "Kiểm tra ngay",
      imgUrl: slider2,
    },
  ];

  // Set document title
  React.useEffect(() => {
    document.title = "GreenMart | Đặt và mua thực phẩm sạch, chất lượng";
  }, []);
  return (
    <>
      <Sliders banners={banners} />
      <DayDeals />
      <Features />
      <Popular />
      <DailyBest />
    </>
  );
}

export default Home