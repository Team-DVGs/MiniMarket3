import React, { useState, useEffect } from 'react';
import {Link, NavLink, useLoaderData} from "react-router-dom";
import ProductSlider from '../../components/ProductSlider';
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchProductDetail } from '../../store/features/productDetailSlice';

const Product = () => {
    const [value, setValue] = useState<number>(1);
    const productDetail = useAppSelector((state) => state.productDetail.info);
    const dispatch = useAppDispatch();

    const handleIncrease = () => {
      setValue(value + 1);
    };
    const handleDecrease = () => {
      if (value > 1) {
        setValue(value - 1);
      }
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      // Allow only positive integer numbers
      if (!inputValue){
        setValue(1);
      }
      else if (/^\d+$/.test(inputValue)) {
        setValue(parseInt(inputValue, 10));
      }
    };

    useEffect(() => {
        dispatch(fetchProductDetail());
    }, []);
  return (
    <div className="product-detail page-margin">
      {/* Main info */}
      <div className="product-detail__info row">
        {/* Image */}
        <div className="col-12 col-md-5">
          <img src={productDetail.thumbnail} alt="" />
          <div className='w-100 mt-2'>
            <ProductSlider
                length={productDetail.gallery.length}
                numberShown={[3,4,6]}
                productsJSX={
                    <>
                        {productDetail.gallery.map(thumb => (
                            <div className='imgoption'>
                                <img src={thumb} alt="" />
                            </div>
                        ))}
                    </>
                }
                sliding={false}

            />
          </div>
        </div>
        {/* Info Desc */}
        <div className="col-12 col-md-7">
          <div className="product-detail__info-desc d-flex flex-column">
            <span className="product__name my-2">{productDetail.name}</span>
            <div className="product__rating my-2 d-flex align-items-center">
              <div className="product__rating-outer d-flex align-items-center">
                <div
                  className="product__rating-inner"
                  style={{
                    width: `${Math.round((productDetail.rating * 20) / 10) * 10}%`,
                  }}
                ></div>
              </div>
              <span className="product__rating-score">({productDetail.rating})</span>
            </div>
            <div className="product__price my-2">
              <span>{productDetail.discount_price.toFixed(2)}$</span>
              <s>{productDetail.price.toFixed(2)}$</s>
            </div>
            <div className="product-detail__info-desc-notice">
              <ul>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Miễn phí vận chuyển trong bán kính 5km</span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>
                    Sản phẩm được nhập mới mỗi ngày, đảm bảo chất lượng
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>
                  <span>Hoàn tiền 100% cho đơn hàng sản phẩm bị lỗi, hư</span>
                </li>
              </ul>
              <p>
                Có thể mua trực tiếp tại cửa hàng tại
                <Link to="/"> địa chỉ</Link>
              </p>
              <span></span>
            </div>
            <div className="product-detail__info-desc-btns">
              {/* Input holder */}
              <div>
                <input type="text" value={value} onChange={handleInputChange} />
                {/* <div className="bg-dark">sdsdsd</div> */}
                <div className="arrow_btns">
                  <button onClick={handleIncrease}>
                    <i className="fa-solid fa-chevron-up"></i>
                  </button>
                  <button onClick={handleDecrease}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </button>
                </div>
              </div>
              {/* Others Buttons */}
            <button className="product__btn">
                <i className="fa-solid fa-cart-shopping"></i>
                Add to cart
            </button>
            <Link className="option__btn" to="/">
                <i className="fa-regular fa-heart"></i>
            </Link>
            <Link className="option__btn" to="/">
                <i className="fa-solid fa-share"></i>
            </Link>
            </div>
            {/* Categories */}
            <div className="product-detail__info-desc-cate mt-4">
                <div>
                <span>Danh mục: </span>
                <Link to="/">{productDetail.category.name}</Link>
                </div>
                <div>
                <span>Thương hiệu: </span>
                <Link to="/">{productDetail.brand.name}</Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* Description and Right side bar */}
      <div className="row">
        {/* Left Main column */}
        <div className="col-12 col-md-9">
          <div className="product-detail__desc mt-3 row"></div>
          <div className="product-detail__relate"></div>
        </div>
        {/* Right Column*/}
        <div className="col-12 col-md-3">
          <div className="products__links">
            <h1>Categories</h1>
            <div className="seperate"></div>
            <ul>
              <li>
                <Link to="/">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768")',
                    }}
                  ></div>
                  <span>Milks and Diaries</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768")',
                    }}
                  ></div>
                  <span>Milks and Diaries</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768")',
                    }}
                  ></div>
                  <span>Milks and Diaries</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product