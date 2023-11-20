import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Collection = () => {
    const navigate = useNavigate();
    const categories = [
      {
        id: 1,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 2,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 3,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
      {
        id: 4,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 5,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 6,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
      {
        id: 7,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 8,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 9,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
      {
        id: 10,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 11,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 12,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
    ];
    useEffect(() => {
        // window.scrollTo(0,0);
    }, [])
  return (
    <div className="categories page-margin">
      <div onClick={() => navigate(-1)} className='d-flex align-items-center'>
        <i className="fa-solid fa-arrow-left"></i>
        <p className="ms-3 mb-0">Trở về</p>
      </div >
      <h1 className="section-header text-center mb-4">Phân loại hàng</h1>
      <div className="row gy-3">
        {categories.map((item) => (
          <div className="col-6 col-md-4 col-lg-2">
            <a href="#" className="categories__item">
              <div className="categories__item-imgcontainer">
                <div className="cateories__item-img" style={{backgroundImage: `url(${item.imgUrl})`}}/>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-center">
                <p>{item.name}</p>
                <p>{item.n} products</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection