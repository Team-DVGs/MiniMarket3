import React, { useState, useEffect } from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import ProductSlider from '../../components/ProductSlider';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchProductDetail } from '../../store/features/Product/productDetailSlice';
import { fetchRelatedProducts } from '../../store/features/Products/productListSlice';
import { fetchProductReview } from '../../store/features/Product/productReviewSlice';
import { addToCart } from '../../store/features/Cart/cartSlice';
import { addToWishList } from '../../store/features/Products/wishlistSlice';
import ReadMore from '../../components/ReadMore';
import ProductTemplate from '../../components/Product';
import CategoryGroupRight from '../../components/Products/CategoryGroupRight';
import BreadCrumbs from '../../components/BreadCrumbs';
import Skeleton from 'react-loading-skeleton';
import ProductSkeleton from '../../components/ProductSkeleton';
import ReviewForm from '../../components/Product/ReviewForm';
import { formatDateTime, priceFormatter } from '../../utils';
const Product = () => {
  // Redux state
  const loading = useAppSelector((state) => state.productDetail.loading);
  const productDetail = useAppSelector((state) => state.productDetail);
  const relatedProducts = useAppSelector((state) => state.productList);
  const productReview = useAppSelector((state) => state.productReview);
  const user = useAppSelector((state) => state.user);

  // Related Products
  const [value, setValue] = useState<number>(1);
  const [currentThumb, setCurrentThumb] = useState<number>(0);
  const [tempCurrentThumb, setTempCurrentThumb] =
    useState<number>(currentThumb);
  const [modal, setModal] = useState<boolean>(false);
  const [nav, setNav] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);
  const [addReview, setAddReview] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const params = useParams();
  const navigate = useNavigate();

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
    if (!inputValue) {
      setValue(1);
    } else if (/^\d+$/.test(inputValue)) {
      setValue(parseInt(inputValue, 10));
    }
  };

  const handleClicked = (isRight: boolean) => {
    //   const n = props.length - numberShown;
    //   if (n < 0) return;
    const n = productDetail.data.galleries?.length || 0;
    if (!isRight) {
      if (tempCurrentThumb < n - 1) setTempCurrentThumb((prev) => prev + 1);
      else setTempCurrentThumb(0);
    } else {
      if (tempCurrentThumb > 0) setTempCurrentThumb((prev) => prev - 1);
      else setTempCurrentThumb(n - 1);
    }
  };
  const showModal = () => {
    setTempCurrentThumb(currentThumb);
    setModal(true);
  };

  const handleAddToCart = () => {
    if (!user.data.isLoggedIn) {
      navigate("/dangnhap");
      return;
    }
    dispatch(
      addToCart({
        cartId: user.data.cartId,
        productId: productDetail.data.id,
        quantity: value,
      })
    ).then((res) => {
      if (res.payload) {
        alert("Thêm vào giỏ hàng thành công");
      } else {
        alert("Thêm thất bại");
      }
    });
  };
  function handleAddWishList() {
    const productId = parseInt(params?.id || "-1");
    const userId = user.data.id;
    if (!user.data.isLoggedIn){
      alert("Bạn chưa đăng nhập!");
      return;
    }
    dispatch(addToWishList({ productId, userId })).then((res) => {
      if (res.payload) {
        alert("Thêm vào danh sách yêu thích thành công");
      } else {
        alert("Thêm yêu thích thất bại");
      }
    });
  }

  useEffect(() => {
    dispatch(fetchRelatedProducts(params?.id || "-1") as any);
  }, []);
  useEffect(() => {
    setCurrentThumb(0);
    dispatch(fetchProductDetail(params?.id || "-1") as any);
  }, [params.id]);
  useEffect(() => {
    if (nav === 1 && !flag) {
      dispatch(fetchProductReview(params?.id || "-1") as any);
      setFlag(true);
    }
  }, [nav]);
  useEffect(() => {
    if (!productDetail.loading && productDetail.data.id !== 0) {
      // Zooming img
      const img = document.querySelector(
        ".product-detail__info-img"
      ) as HTMLElement;
      const imgContainer = document.querySelector(
        ".product-detail__info-img-container"
      ) as HTMLElement;
      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX - img.getBoundingClientRect().x;
        const mouseY = event.clientY - img.getBoundingClientRect().y;
        img.style.transformOrigin = `${mouseX}px ${mouseY}px`;
        img.style.transform = "scale(1.4)";
      };
      const handleMouseLeave = (event: MouseEvent) => {
        console.log("leave");
        img.style.transformOrigin = "center";
        img.style.transform = "scale(1)";
      };
      if (img && imgContainer) {
        img.addEventListener("mousemove", handleMouseMove);
        imgContainer.addEventListener("mouseleave", handleMouseLeave);
      }
      return () => {
        if (img) {
          img.removeEventListener("mousemove", handleMouseMove);
          imgContainer.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  }, [productDetail.loading]);
  // Set document title
  React.useEffect(() => {
    document.title = `${productDetail.data.name || "Sản phẩm"} | GreenMart`;
  }, [productDetail.data.name]);
  return (
    <>
      {modal && (
        <div className="popmodal">
          <img
            src={
              productDetail.data.galleries[tempCurrentThumb]?.thumbnail || ""
            }
            alt=""
          />
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
      <BreadCrumbs
        crumbTitles={["", productDetail.data.name || "Tên sản phẩm"]}
      />
      <div className="product-detail page-margin">
        {/* Main info */}
        {productDetail.loading ? (
          <div className="product-detail__info row w-100 mx-0 box-shadow-style px-1 py-3">
            {/* Image */}
            <div className="col-12 col-md-5">
              <div className="overflow-hidden product-detail__info-img-container">
                <Skeleton height={400} />
              </div>
              <div className="w-100 mt-3">
                <Skeleton height={80} />
              </div>
            </div>
            {/* Info Desc */}
            <div className="col-12 col-md-7">
              <div className="product-detail__info-desc d-flex flex-column">
                <span className="product-detail__info-desc-name">
                  <Skeleton height={50} />
                </span>
                <Skeleton height={300} />
              </div>
            </div>
          </div>
        ) : (
          <div className="product-detail__info row w-100 mx-0 box-shadow-style px-1 py-3">
            {/* Image */}
            <div className="col-12 col-md-5">
              <div className="overflow-hidden product-detail__info-img-container">
                <div
                  style={{
                    backgroundImage: `url(${productDetail.data.galleries[currentThumb]?.thumbnail})`,
                  }}
                  onClick={showModal}
                  className="product-detail__info-img w-100"
                ></div>
              </div>
              <div className="w-100 mt-3">
                <ProductSlider
                  id={1}
                  length={productDetail.data.galleries?.length || 0}
                  numberShown={[3, 4, 5]}
                  productsJSX={
                    <>
                      {productDetail.data.galleries.map((thumb, idx) => (
                        <div
                          className={`imgoption`}
                          onMouseEnter={() => {
                            setCurrentThumb(idx);
                          }}
                        >
                          <div
                            style={{
                              backgroundImage: `url(${thumb.thumbnail})`,
                            }}
                          ></div>
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
                <span className="product-detail__info-desc-name">
                  {productDetail.data.name}
                </span>
                <div className="product__rating my-2 d-flex align-items-center">
                  <div className="product__rating-outer d-flex align-items-center">
                    <div
                      className="product__rating-inner"
                      style={{
                        width: `${
                          Math.round((productDetail.data.rating * 20) / 10) * 10
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="product__rating-score">
                    ({productDetail.data.rating})
                  </span>
                </div>
                <div className="product__price my-2">
                  <span>
                    {priceFormatter(productDetail.data.discount_price)}đ
                  </span>
                  {
                    productDetail.data.discount_price < productDetail.data.reg_price &&
                    <s>{priceFormatter(productDetail.data.reg_price)}đ</s>
                  }
                </div>
                <div className="product-detail__info-desc-notice">
                  <p>{productDetail.data.description}</p>
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
                      <span>
                        Hoàn tiền 100% cho đơn hàng sản phẩm bị lỗi, hư
                      </span>
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
                  <button className="product__btn" onClick={handleAddToCart}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    Thêm vào giỏ hàng
                  </button>
                  <button className="option__btn" onClick={handleAddWishList}>
                    <i className="fa-regular fa-heart"></i>
                  </button>
                  <Link className="option__btn" to="facebook.com">
                    <i className="fa-solid fa-share"></i>
                  </Link>
                </div>
                {/* Categories */}
                <div className="product-detail__info-desc-cate mt-4">
                  <div>
                    <span>Danh mục: </span>
                    <div>{productDetail.data.category.name}</div>
                  </div>
                  <div>
                    <span>Thương hiệu: </span>
                    <div>{productDetail.data.brand.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
                productDetail.loading ? (
                  <Skeleton height={250} className="mb-3" />
                ) : (
                  <div className="nav__description">
                    {productDetail.data.description}
                  </div>
                )
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
                            Math.round((productDetail.data.rating * 20) / 10) *
                            10
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="product__rating-score">
                      ({productDetail.data.rating})
                    </span>
                  </div>
                  {/* button */}
                  <button
                    className="btn-normal"
                    style={{ fontSize: ".9rem" }}
                    onClick={() => setAddReview((prev) => !prev)}
                  >
                    Tạo đánh giá mới
                  </button>
                  {addReview && (
                    <ReviewForm
                      id={params?.id || "-1"}
                      setAddReview={setAddReview}
                    />
                  )}
                  {/* list reviews */}
                  <ul className="nav__reviews-list mt-3">
                    {productReview.loading ? (
                      <Skeleton height={60} count={3} />
                    ) : productReview.data.length ? (
                      productReview.data.map((review) => (
                        <li className="nav__reviews-list-item">
                          <div className="product__rating my-2 d-flex align-items-center">
                            <div className="product__rating-outer d-flex align-items-center">
                              <div
                                className="product__rating-inner"
                                style={{
                                  width: `${
                                    Math.round((review.rating * 20) / 10) * 10
                                  }%`,
                                }}
                              ></div>
                            </div>
                            <span className="product__rating-score">
                              ({review.rating})
                            </span>
                          </div>
                          <div>
                            <span className="fw-bold">{review.fullname}</span>
                            <span> - {formatDateTime(review.created_at)}</span>
                          </div>
                          <h4>{review.title}</h4>
                          <ReadMore lineShown={2} text={review.comment} />
                        </li>
                      ))
                    ) : (
                      <p className="text-center">Không có đánh giá</p>
                    )}
                  </ul>
                </div>
              )}
            </div>
            {/* Related products */}
            <div className="product-detail__more-relate mt-3">
              <h1 className="section-header mb-3">Sản phẩm liên quan</h1>
              <ProductSlider
                id={2}
                length={relatedProducts.data.data?.length || 0}
                numberShown={[2, 3, 4]}
                sliding={false}
                loading={relatedProducts.loading}
                productsJSX={
                  <>
                    {relatedProducts.loading
                      ? Array(4)
                          .fill(0)
                          .map((product) => (
                            <div className="px-1" key={product.id}>
                              <ProductSkeleton />
                            </div>
                          ))
                      : relatedProducts.data.data?.map((product) => (
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
            <CategoryGroupRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Product