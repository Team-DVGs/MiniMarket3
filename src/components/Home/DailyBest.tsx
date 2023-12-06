import React, {useEffect, useState} from "react";
import Product from "../Product";
import ProductSlider from "../ProductSlider";
import { productProps } from "../Product";

interface dailybestProps {
  dailybest: productProps[];
}
const DailyBest = (props: dailybestProps): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [numberShown, setNumberShown] = useState<number>(0);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 767) setNumberShown(2);
    else if (screenWidth > 767 && screenWidth <= 991) setNumberShown(3);
    else setNumberShown(4);
  }, [window.innerWidth]);

  const handleClicked = (isRight: boolean) => {
    const n = props.dailybest.length - numberShown;
    if (n < 0) return;
    if (!isRight) {
      if (!index) setIndex(n);
      else setIndex((prev) => prev - 1);
    } else {
      if (index === n) setIndex(0);
      else setIndex((prev) => prev + 1);
    }
  };
  return (
    <div className="dailybest section-margin">
      <div className="d-flex justify-content-between align-items-center header-margin">
        <h1 className="section-header">Bán chạy</h1>
        <nav className="">
          <a href="#">Nổi bật</a>
          <a href="#">Phổ biến</a>
          <a href="#">Hàng mới</a>
        </nav>
      </div>
      {/* List */}
      <div className="row gy-3">
        <div className="col-12 col-md-3 align-self-stretch">
          <div
            className="dailybest__banner h-100"
            style={{
              backgroundImage: `url('https://boostify-nesst.myshopify.com/cdn/shop/files/product-tab-banner.jpg?v=1659427624&width=768')`,
            }}
          >
            <h1>Thêm một chút tự nhiên vào cuộc sống của bạn</h1>
            <button className="mt-2">
              Mua ngay
              <i className="fa-solid fa-arrow-right top-50 translate-middle"></i>
            </button>
          </div>
        </div>
        <div className="col-12 col-md-9 products position-relative">
          <div className="d-flex overflow-hidden">
            {props.dailybest.map((item) => (
              <div
                className="col-6 col-lg-3 px-1 transition-fast"
                style={{ transform: `translateX(${-100 * index}%)` }}
                key={item.id}
              >
                <Product product={item} />
              </div>
            ))}
          </div>
          <button
            className="arrow-btn left"
            onClick={() => handleClicked(false)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="arrow-btn right"
            onClick={() => handleClicked(true)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* <ProductSlider
        length={props.dailybest.length}
        numberShown={[3, 5 ,8]}
        productsJSX={
          <>
            {props.dailybest.map((item) => (
                <div>
                  <Product product={item} />
                </div>
            ))}
          </>
        }
      /> */}

    </div>
  );
};

export default DailyBest;
