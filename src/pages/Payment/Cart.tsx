import React, {useEffect, useState} from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchCart } from '../../store/features/Cart/cartSlice';
import { Link } from 'react-router-dom';
import { priceFormatter } from '../../utils';

const Cart = () => {
    const cartData = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCart());
    },[])
  return (
    <>
      <BreadCrumbs crumbTitles={["Giỏ hàng"]} />
      <div className="cart">
        {cartData.data.data.length ? (
          <>
            {/* <h1>Giỏ hàng</h1> */}
            <div className="cart__data">
              <div className="row gy-3">
                <div className="col-12 col-lg-9">
                  <table>
                    <thead className="">
                      <tr>
                        <td>Sản phẩm</td>
                        <td>Giá</td>
                        <td>Số lượng</td>
                        <td>Thành tiền</td>
                        <td>Xoá</td>
                      </tr>
                    </thead>
                    <tbody>
                      {cartData.data.data.map((item) => (
                        <tr className="cart__product">
                          {/* Ten va anh*/}
                          <td className="cart__product-name row g-3">
                            {/* Holder */}
                            <div className="">
                                <Link to="/">
                                  <img
                                    className="w-100"
                                    src={item.thumbnail}
                                    alt=""
                                  />
                                </Link>
                                <div>
                                    <span>{item.name}</span>
                                    {/* Hien thi tren mobile */}
                                    <div className="cart__product-name-mobile cart__product-name-mobile-price">
                                        <s>đ{priceFormatter(item.reg_price)}</s>
                                        <span>
                                            đ{priceFormatter(item.discount_price)}
                                        </span>
                                    </div>
                                    <div className="cart__product-name-mobile cart__product-name-mobile-quantity">
                                        <input
                                            type="text"
                                            value={item.quanity}
                                        />
                                        <div className="arrow_btns">
                                            <button>
                                            <i className="fa-solid fa-chevron-up"></i>
                                            </button>
                                            <button>
                                            <i className="fa-solid fa-chevron-down"></i>
                                            </button>
                                        </div>
                                        </div>
                                </div>
                              </div>
                          </td>
                          {/* Gia */}
                          <td className="cart__product-price">
                            <div>
                              <s>đ{priceFormatter(item.reg_price)}</s>
                              <span>
                                đ{priceFormatter(item.discount_price)}
                              </span>
                            </div>
                          </td>
                          {/* So luong */}
                          <td className="cart__product-quantity">
                            <div>
                              <input
                                type="text"
                                value={item.quanity}
                                // onChange={handleInputChange}
                              />
                              {/* <div className="bg-dark">sdsdsd</div> */}
                              <div className="arrow_btns">
                                <button>
                                  <i className="fa-solid fa-chevron-up"></i>
                                </button>
                                <button>
                                  <i className="fa-solid fa-chevron-down"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          {/* Tong gia tien */}
                          <td className="cart__product-total">
                            <span>đ{priceFormatter(cartData.data.total)}</span>
                          </td>
                          <td className="cart__product-delete">
                            <Link to="/">
                              <i className="fa-solid fa-trash"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cart__list-rightbar">
                    <p>Tin nhắn cho người bán</p>
                    <textarea name="" id=""></textarea>
                    <div className="cart__list-rightbar-total">
                      <span>Tổng tiền hàng:</span>
                      <span>đ{priceFormatter(cartData.data.total)}</span>
                    </div>
                    <div className="text-end cart__list-rightbar-saved">
                      Tiết kiệm đ{priceFormatter(cartData.data.saved)}
                    </div>
                    <div className="text-end ">
                      Thông tin vận chuyển và các thông tin khác hiện ở bước
                      thanh toán
                    </div>
                    <Link to="/giohang/thanhtoan" className="btn-normal">Đi đến thanh toán</Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="cart__noitem text-center py-5">
            <h3>Giỏ hàng trống</h3>
            <p>Bắt đầu mua sắm để nhận ngay ưu đãi</p>
            <Link to="/" className="btn-normal text-decoration-none text-bold">
              Bắt đầu mua sắm
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart