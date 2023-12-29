import React, {useEffect, useState} from 'react';
import BreadCrumbs from '../../components/BreadCrumbs';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchCart } from '../../store/features/Cart/cartSlice';
import { Link } from 'react-router-dom';
import { priceFormatter } from '../../utils';
import Skeleton from 'react-loading-skeleton';
import { deleteCart, updateQuantityCart } from '../../store/features/Cart/cartSlice';

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //     dispatch(fetchCart(user.data.cartId.toString()));
  // },[user.data.isLoggedIn])
  function handleIncrement(
    isUp: boolean,
    quantity: number,
    cartItemId: number
  ) {
    if (isUp) {
      dispatch(updateQuantityCart({ cartItemId, quantity: quantity + 1 }));
    } else {
      dispatch(updateQuantityCart({ cartItemId, quantity: quantity - 1 }));
    }
  }
  function handleDelete(cartItemId: number) {
    dispatch(updateQuantityCart({ cartItemId, quantity: 0 }));
  }
  // Set document title
  React.useEffect(() => {
    document.title = "Giỏ hàng | GreenMart";
  }, []);
  return (
    <>
      <BreadCrumbs crumbTitles={["Giỏ hàng"]} />
      <div className="cart">
        {cart.data.list?.length ? (
          <>
            <div className="cart__data cart__list">
              <div className="row gy-3">
                <div className="col-12 col-lg-9">
                  <table className="w-100">
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
                      {cart.data.list.map((item) => (
                        <tr className="cart__product">
                          {/* Ten va anh*/}
                          <td className="cart__product-name row g-3">
                            {/* Holder */}
                            <div className="">
                              <Link to={`/sanpham/${item.productId}`}>
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
                                  <input type="text" value={item.quantity} />
                                  <div className="arrow_btns">
                                    <button
                                      onClick={() =>
                                        handleIncrement(
                                          true,
                                          item.quantity,
                                          item.cartItemId
                                        )
                                      }
                                    >
                                      <i className="fa-solid fa-chevron-up"></i>
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleIncrement(
                                          false,
                                          item.quantity,
                                          item.cartItemId
                                        )
                                      }
                                    >
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
                              {item.reg_price !== item.discount_price && (
                                <s>đ{priceFormatter(item.reg_price)}</s>
                              )}
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
                                value={item.quantity}
                                // onChange={handleInputChange}
                              />
                              {/* <div className="bg-dark">sdsdsd</div> */}
                              <div className="arrow_btns">
                                <button
                                  onClick={() =>
                                    handleIncrement(
                                      true,
                                      item.quantity,
                                      item.cartItemId
                                    )
                                  }
                                >
                                  <i className="fa-solid fa-chevron-up"></i>
                                </button>
                                <button
                                  onClick={() =>
                                    handleIncrement(
                                      false,
                                      item.quantity,
                                      item.cartItemId
                                    )
                                  }
                                >
                                  <i className="fa-solid fa-chevron-down"></i>
                                </button>
                              </div>
                            </div>
                          </td>
                          {/* Tong gia tien */}
                          <td className="cart__product-total">
                            <span>
                              đ
                              {priceFormatter(
                                item.discount_price * item.quantity
                              )}
                            </span>
                          </td>
                          <td className="cart__product-delete">
                            <div
                              onClick={() => handleDelete(item.cartItemId)}
                              style={{ cursor: "pointer" }}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="cart__list-rightbar py-4">
                    <div className="cart__list-rightbar-total">
                      <span>Tổng tiền hàng:</span>
                      <span>đ{priceFormatter(cart.data.total)}</span>
                    </div>
                    {cart.data.savings ? (
                      <div className="text-end cart__list-rightbar-saved">
                        Tiết kiệm đ{priceFormatter(cart.data.savings)}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="text-end cart__list-rightbar-more">
                      Thông tin vận chuyển và các thông tin khác hiện ở bước
                      thanh toán
                    </div>
                    <Link to="/giohang/thanhtoan" className="btn-normal">
                      Đi đến thanh toán
                    </Link>
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