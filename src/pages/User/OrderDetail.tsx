import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchOrder } from '../../store/features/Orders/orderSlice';
import Skeleton from 'react-loading-skeleton';
import { formatDateTime, priceFormatter, statusConvert } from '../../utils';


const OrderDetail = () => {
  const user = useAppSelector((state) => state.user);
  const order = useAppSelector((state) => state.order);
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchOrder(params?.id || "0"));
  }, [user.data.isLoggedIn]);
  // Set document title
  React.useEffect(() => {
    document.title = `Thông tin đơn hàng | GreenMart`;
  }, []);
  return (
    <>
      <Link
        to={"../"}
        className="d-flex align-items-center text-secondary text-decoration-none mb-1"
      >
        <i className="fa-solid fa-chevron-left me-2"></i>
        <a>Trở lại</a>
      </Link>
      <h1 className="section-header">Thông tin đơn hàng</h1>
      {order.loading ? (
        <Skeleton height={80} count={3} />
      ) : order.data.id !== -1 ? (
        <div>
          <div>
            <div className="payment__info-final">
              <span>Mã đơn hàng:</span>
              <span>DH23152{order.data.id}</span>
            </div>
            <div className="payment__info-final">
              <span>Địa chỉ:</span>
              <span>{order.data.address}</span>
            </div>
            <div className="payment__info-final">
              <span>Ngày đặt hàng: </span>
              <span>{formatDateTime(order.data.date)}</span>
            </div>
            <div className="payment__info-final">
              <span>Trạng thái:</span>
              <span>{statusConvert(order.data.status)}</span>
            </div>
            <div className="payment__info-final">
              <span>Phương thức giao hàng</span>
              <span>{order.data.payment_method}</span>
            </div>
            <div className="payment__info-final">
              <span>Tin nhắn cho người bán</span>
              <span>{order.data.note}</span>
            </div>
            <div className="payment__info-final">
              <span>Tổng số tiền: </span>
              <span>đ{priceFormatter(order.data.total)}</span>
            </div>
          </div>
          <h1 className="section-header mt-2">Danh sách sản phẩm</h1>
          <ul>
            {order.data.list.map((item) => (
              <li className="bg-white rounded-3 align-items-center d-flex px-1 mb-1">
                <div
                  className="user__orders-imgcontainer"
                  style={{ width: "100px" }}
                >
                  <img
                    className="user__orders-img"
                    src={item.thumbnail}
                    alt=""
                  />
                </div>
                <div className="info">
                  <Link
                    to={`/sanpham/${item.productId}`}
                    className="text-decoration-none text-dark"
                  >
                    <strong className="m-0">{item.name}</strong>
                  </Link>
                  <p className="m-0">Số lượng: {item.quantity}</p>
                </div>
                <span>đ{priceFormatter(item.total)}</span>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-end align-items-center mt-2">
            <Link to="/lienhe" className="btn-normal text-decoration-none me-3">
              Liên hệ
            </Link>
            <Link to="/" className="btn-normal text-decoration-none">
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      ) : (
        <p className="my-5 text-center">Không có thông tin</p>
      )}
    </>
  );
}

export default OrderDetail