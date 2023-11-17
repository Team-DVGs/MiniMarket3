import React, { useState } from 'react'
import Sliders from '../../components/Sliders';
import Features from '../../components/Features';
import Popular from '../../components/Popular';
import DailyBest from '../../components/DailyBest';
import DayDeals from '../../components/DayDeals';




const Home = () => {
  // States and vars
  const slider1 = process.env.PUBLIC_URL + '/assets/img/sliders/slider1.webp';
  const slider2 = process.env.PUBLIC_URL + "/assets/img/sliders/slider2.webp";
  const banners = [{
    id: 0,
    header: "Don't miss amazing grocery deals",
    title: "Sign up for the daily newsletter",
    imgUrl: slider1
  },{
    id: 1,
    header: "Fresh Vegetables with big discount",
    title: "Tell your story",
    imgUrl: slider2
  }];
  
  const popProducts: {id: number, imgUrl: string, name: string, rating: number, price: number, oldPrice: number}[] = [
    {
      id: 1,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
      name: "Gorton’s Beer Battered Fish Fillets",
      rating: 4.5,
      price: 23.85,
      oldPrice: 28,
    },
    {
      id: 2,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-3.jpg?v=1663128562&width=360",
      name: "Nestle Original Coffee-Mate Coffee Creamer",
      rating: 5,
      price: 32.45,
      oldPrice: 37.96,
    },
    {
      id: 3,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
      name: "Seeds of Change Brown & Red Rice",
      rating: 5,
      price: 72,
      oldPrice: 80,
    },
    {
      id: 4,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/product-2-2_3f29934d-43f4-497f-a3c5-56b7159c91af.jpg?v=1663051490&width=360",
      name: "Sahale Crumble Cashew Mix Snacks",
      rating: 5,
      price: 45.3,
      oldPrice: 40
    },
    {
      id: 5,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
      name: "Gorton’s Beer Battered Fish Fillets",
      rating: 4.5,
      price: 23.85,
      oldPrice: 28,
    },
    {
      id: 6,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-3.jpg?v=1663128562&width=360",
      name: "Nestle Original Coffee-Mate Coffee Creamer",
      rating: 5,
      price: 32.45,
      oldPrice: 37.96,
    },
    {
      id: 7,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
      name: "Seeds of Change Brown & Red Rice",
      rating: 5,
      price: 72,
      oldPrice: 80,
    },
    {
      id: 8,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/product-2-2_3f29934d-43f4-497f-a3c5-56b7159c91af.jpg?v=1663051490&width=360",
      name: "Sahale Crumble Cashew Mix Snacks",
      rating: 5,
      price: 45.3,
      oldPrice: 40
    },{
    id: 9,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/product-9-2.jpg?v=1656924060&width=360",
      name: "Gorton’s Beer Battered Fish Fillets",
      rating: 4.5,
      price: 23.85,
      oldPrice: 28,
    },
    {
      id: 10,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-3.jpg?v=1663128562&width=360",
      name: "Nestle Original Coffee-Mate Coffee Creamer",
      rating: 5,
      price: 32.45,
      oldPrice: 37.96,
    },
    {
      id: 11,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/thumbnail-5.jpg?v=1663128373&width=360",
      name: "Seeds of Change Brown & Red Rice",
      rating: 5,
      price: 72,
      oldPrice: 80,
    },
    {
      id: 12,
      imgUrl:
        "https://boostify-nesst.myshopify.com/cdn/shop/products/product-2-2_3f29934d-43f4-497f-a3c5-56b7159c91af.jpg?v=1663051490&width=360",
      name: "Sahale Crumble Cashew Mix Snacks",
      rating: 5,
      price: 45.3,
      oldPrice: 40
    }
  ];

  
  return (
    <div className="container-md">
      <Sliders banners={banners} />
      <Features />
      <Popular popProducts={popProducts} />
      <DailyBest dailybest={popProducts} />
      <DayDeals />
    </div>
  );
}

export default Home