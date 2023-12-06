import React, { useState, useEffect } from 'react';
import {Link, NavLink, useLoaderData} from "react-router-dom";
import ProductSlider from '../../components/ProductSlider';
import { useSelector } from "react-redux";
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchProductDetail } from '../../store/features/productDetailSlice';
import { transform } from 'typescript';
import ReadMore from '../../components/ReadMore';
import ProductTemplate from '../../components/Product';

const Product = () => {
    const [value, setValue] = useState<number>(1);
    const loading = useAppSelector((state => state.productDetail.loading));
    const productDetail = useAppSelector((state) => state.productDetail.info);
    const productsList = useAppSelector(state => state.productList);
    const productsRelated = productsList.info.slice(0,4);
    const [currentThumb, setCurrentThumb] = useState<number>(0);
    const [tempCurrentThumb, setTempCurrentThumb] = useState<number>(currentThumb);
    const [modal, setModal] = useState<boolean>(false);
    const [nav, setNav] = useState<number>(0);
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

    const handleClicked = (isRight: boolean) => {
    //   const n = props.length - numberShown;
    //   if (n < 0) return;
        const n = productDetail.gallery.length;
      if (!isRight) {
        if (tempCurrentThumb < n-1) setTempCurrentThumb(prev => prev+1);
        else setTempCurrentThumb(0);
      } else {
        if (tempCurrentThumb > 0) setTempCurrentThumb((prev) => prev - 1);
        else setTempCurrentThumb(n-1);
      }
    };
    const showModal = () => {
        setTempCurrentThumb(currentThumb);
        setModal(true);
    }

    useEffect(() => {
        dispatch(fetchProductDetail());
        // Zooming img
        const img = document.querySelector(".product-detail__info-img") as HTMLElement;
        const imgContainer = document.querySelector('.product-detail__info-img-container') as HTMLElement;
        const handleMouseMove = (event: MouseEvent) => {
                const mouseX = event.clientX - img.getBoundingClientRect().x;
                const mouseY = event.clientY - img.getBoundingClientRect().y;
                img.style.transformOrigin=`${mouseX}px ${mouseY}px`;
                img.style.transform = 'scale(1.4)';
        }
        const handleMouseLeave = (event: MouseEvent) => {
            console.log('leave');
          img.style.transformOrigin = "center";
          img.style.transform = "scale(1)";
        };
        if (img && imgContainer){
            img.addEventListener('mousemove', handleMouseMove);
            imgContainer.addEventListener('mouseleave', handleMouseLeave);
        }
        return () => {
            if (img){
                img.removeEventListener('mousemove', handleMouseMove);
                imgContainer.removeEventListener('mouseleave',handleMouseLeave);
            }
        }
    }, []);

  return (
    <>
      {modal && (
        <div className="popmodal">
          <img src={productDetail.gallery[tempCurrentThumb]} alt="" />
          <button
            className="popmodal__left"
            onClick={() => handleClicked(false)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="popmodal__right"
            onClick={() => handleClicked(true)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="popmodal__exit" onClick={() => setModal(false)}>
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      )}
      <div className="product-detail page-margin">
        {/* Main info */}
        <div className="product-detail__info row w-100 mx-0 box-shadow-style px-1 py-3">
          {/* Image */}
          <div className="col-12 col-md-5">
            <div className="overflow-hidden product-detail__info-img-container">
              <img
                src={productDetail.gallery[currentThumb]}
                alt="https://inantemnhan.com.vn/wp-content/uploads/2017/10/no-image.png"
                onClick={showModal}
                className="product-detail__info-img w-100"
              />
            </div>
            <div className="w-100 mt-2">
              <ProductSlider
                length={productDetail.gallery.length}
                numberShown={[3, 4, 5]}
                productsJSX={
                  <>
                    {productDetail.gallery.map((thumb, idx) => (
                      <div
                        className={`imgoption`}
                        onMouseEnter={() => {
                          setCurrentThumb(idx);
                        }}
                      >
                        <img
                          src={thumb}
                          alt="https://inantemnhan.com.vn/wp-content/uploads/2017/10/no-image.png"
                        />
                      </div>
                    ))}
                  </>
                }
                sliding={false}
                loading={loading}
              />
            </div>
          </div>
          {/* Info Desc */}
          <div className="col-12 col-md-7">
            <div className="product-detail__info-desc d-flex flex-column">
              <span className="product-detail__info-desc-name my-2">
                {productDetail.name}
              </span>
              <div className="product__rating my-2 d-flex align-items-center">
                <div className="product__rating-outer d-flex align-items-center">
                  <div
                    className="product__rating-inner"
                    style={{
                      width: `${
                        Math.round((productDetail.rating * 20) / 10) * 10
                      }%`,
                    }}
                  ></div>
                </div>
                <span className="product__rating-score">
                  ({productDetail.rating})
                </span>
              </div>
              <div className="product__price my-2">
                <span>{productDetail.discount_price.toFixed(2)}$</span>
                <s>{productDetail.price.toFixed(2)}$</s>
              </div>
              <div className="product-detail__info-desc-notice">
                <p>{productDetail.shortdesc}</p>
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
                  <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                  />
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
        <div
          className="product-detail__more row w-full mx-0 mt-3"
          style={{ marginRight: "-12px" }}
        >
          {/* Left Main column */}
          <div className="col-12 col-md-9 ps-md-0">
            {/* Product detail */}
            <div className="product-detail__more-desc box-shadow-style py-2 px-3">
              <nav>
                <button
                  className={` ${
                    nav === 0 && "button-selected"
                  } border-0 rounded-5`}
                  onClick={() => setNav(0)}
                >
                  Thông tin sản phẩm
                </button>
                <button
                  className={` ${
                    nav === 1 && "button-selected"
                  } border-0 rounded-5`}
                  onClick={() => setNav(1)}
                >
                  Đánh giá
                </button>
              </nav>
              {!nav ? (
                // Description
                <div className="nav__description">
                  {productDetail.description}
                </div>
              ) : (
                // Reviews
                <div className="nav__reviews">
                  <strong>Thêm một đánh giá</strong>
                  {/* rating */}
                  <div className="product__rating my-2 d-flex align-items-center">
                    <div className="product__rating-outer d-flex align-items-center">
                      <div
                        className="product__rating-inner"
                        style={{
                          width: `${
                            Math.round((productDetail.rating * 20) / 10) * 10
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="product__rating-score">
                      ({productDetail.rating})
                    </span>
                  </div>
                  {/* button */}
                  <button className="btn-normal" style={{ fontSize: ".9rem" }}>
                    Write a review
                  </button>
                  {/* list reviews */}
                  <ul className="nav__reviews-list mt-3">
                    <li className="nav__reviews-list-item">
                      <div className="product__rating my-2 d-flex align-items-center">
                        <div className="product__rating-outer d-flex align-items-center">
                          <div
                            className="product__rating-inner"
                            style={{
                              width: `${
                                Math.round((productDetail.rating * 20) / 10) *
                                10
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="product__rating-score">
                          ({productDetail.rating})
                        </span>
                      </div>
                      <div>
                        <span className="fw-bold">Lâm Thị Hương</span>
                        <span> - 30/11/2023</span>
                      </div>
                      <h4>Sản phẩm sử dụng tốt</h4>
                      <ReadMore
                        lineShown={2}
                        txtElement={
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Recusandae, ducimus suscipit. Est, ratione
                            voluptates voluptatibus perferendis tenetur hic sed
                            maiores recusandae, ad consequatur veniam totam
                            aliquam minus, error voluptate voluptatem. ad
                            consequatur veniam totam aliquam minus, error
                            voluptate voluptatem.
                          </p>
                        }
                      />
                    </li>
                    <li className="nav__reviews-list-item">
                      <div className="product__rating my-2 d-flex align-items-center">
                        <div className="product__rating-outer d-flex align-items-center">
                          <div
                            className="product__rating-inner"
                            style={{
                              width: `${
                                Math.round((productDetail.rating * 20) / 10) *
                                10
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="product__rating-score">
                          ({productDetail.rating})
                        </span>
                      </div>
                      <div>
                        <span className="fw-bold">Lâm Thị Hương</span>
                        <span> - 30/11/2023</span>
                      </div>
                      <h4>Sản phẩm sử dụng tốt</h4>
                      <ReadMore
                        lineShown={2}
                        txtElement={
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                          </p>
                        }
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {/* Related products */}
            <div className="product-detail__more-relate mt-3">
              <h1 className="section-header mb-3">Sản phẩm liên quan</h1>
              <ProductSlider
                length={productsRelated.length}
                numberShown={[2, 3, 4]}
                sliding={false}
                loading={productsList.loading}
                productsJSX={
                  <>
                    {productsRelated.map((product) => (
                      <div className="px-1" key={product.id}>
                        <ProductTemplate product={product} />
                      </div>
                    ))}
                  </>
                }
              />
            </div>
          </div>
          {/* Right Column*/}
          <div className="col-12 col-md-3 pe-md-0 mt-3 mt-md-0 product-detail__more-right">
            <div className="products__links box-shadow-style">
              <h1>Danh mục</h1>
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
    </>
  );
}

export default Product