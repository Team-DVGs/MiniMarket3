import React from "react";
import Product from "./Product";

interface dailybestProps {
  dailybest: {
    id: number;
    imgUrl: string;
    name: string;
    rating: number;
    price: number;
    oldPrice: number;
  }[];
}
const DailyBest = (props: dailybestProps): JSX.Element => {
  return (
    <div className="dailybest section-margin">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="section-header">Daily Best Sells</h1>
        <nav className="">
          <a href="#">Featured</a>
          <a href="#">Popular</a>
          <a href="#">New added</a>
        </nav>
      </div>
      {/* List */}
      <div className="row mt-2 gy-3">
        <div className="col-3 align-self-stretch">
          <div
            className="dailybest__banner h-100"
            style={{
              backgroundImage: `url('https://boostify-nesst.myshopify.com/cdn/shop/files/product-tab-banner.jpg?v=1659427624&width=768')`,
            }}
          >
            <h1>Bring nature into your home</h1>
            <button className="mt-2">
              Shop now
              <i className="fa-solid fa-arrow-right top-50 translate-middle"></i>
            </button>
          </div>
        </div>
        <div className="col-9 products position-relative">
          <div className="d-flex overflow-hidden">
            {props.dailybest.map((item) => (
              <div className="col-6 col-lg-3">
                <Product product={item} />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DailyBest;
