import React, {useEffect, useState} from "react";
import Product from "../Product";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchProductsBestSell } from "../../store/features/Home/productsBestSellSlice";
import ProductSkeleton from "../ProductSkeleton";
import ProductSlider from "../ProductSlider";

const DailyBest = (): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  const [numberShown, setNumberShown] = useState<number>(0);
  const [type, setType] = useState<string>("Nổi bật");
  const [reload, setReload] = useState<number>(0);
  const productsBestSell = useAppSelector(state => state.productsBestSell);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProductsBestSell());
  }, [])

  // useEffect(() => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth < 767) setNumberShown(2);
  //   else if (screenWidth > 767 && screenWidth <= 991) setNumberShown(3);
  //   else setNumberShown(4);
  // }, [window.innerWidth]);


  // const handleClicked = (isRight: boolean) => {
  //   const n = productsBestSell.data.length - numberShown;
  //   if (n < 0) return;
  //   if (!isRight) {
  //     if (!index) setIndex(n);
  //     else setIndex((prev) => prev - 1);
  //   } else {
  //     if (index === n) setIndex(0);
  //     else setIndex((prev) => prev + 1);
  //   }
  // };
  const styles = {
    color: "#3BB77E",
    cursor: "pointer",
  };
  return (
    <div className="dailybest section-margin">
      <div className="d-flex justify-content-between align-items-center header-margin">
        <h1 className="section-header">Bán chạy</h1>
        <nav className="">
          {productsBestSell.data.map((category) => (
            <a
              onClick={() => {
                setType(category.type);
                setReload(prev => prev+1);
              }}
              className="cursor-pointer"
              style={category.type === type ? styles : { cursor: "pointer" }}
            >
              {category.type}
            </a>
          ))}
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
          <ProductSlider
            id={1}
            length={productsBestSell.data.find(item => item.type === type)?.products.length || 4}
            numberShown={[2, 3, 4]}
            sliding={false}
            loading={productsBestSell.loading}
            reload={reload}
            productsJSX={
              <>
                {productsBestSell.loading
                  ? Array(4)
                      .fill(0)
                      .map((el) => (
                        <div className="px-1">
                          <ProductSkeleton />
                        </div>
                      ))
                  : productsBestSell.data
                      .find((item) => item.type === type)
                      ?.products.map((productItem) => (
                        <div className="px-1" key={productItem.id}>
                          <Product product={productItem} />
                        </div>
                      ))}
              </>
            }
          />
          {/* <div className="d-flex overflow-hidden">
            {productsBestSell.loading ? (Array(4).fill(0).map(item => (
              <div
                className="col-6 col-lg-3 px-1 transition-fast"
              >
                <ProductSkeleton />
              </div>
            ))
            ) : (
              productsBestSell.data.length &&
              productsBestSell.data
                .find((item) => item.type === type)
                ?.products.map((item) => (
                  <div
                    className="col-6 col-lg-3 px-1 transition-fast"
                    style={{ transform: `translateX(${-100 * index}%)` }}
                    key={item.id}
                  >
                    <Product product={item} />
                  </div>
                ))
            )}
          </div> */}
          {/* <button
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
          </button> */}
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
