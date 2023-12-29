import React, { useEffect } from 'react';
import { formatDateTime, priceFormatter, statusConvert } from '../../utils';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchOrderList } from '../../store/features/Orders/orderListSlice';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

const OrderList = () => {
  const user = useAppSelector(state => state.user);
  const orderList = useAppSelector(state => state.orderList);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOrderList(user.data.id.toString()));
  }, [user.data.isLoggedIn])
  
  React.useEffect(() => {
    document.title = `Thông tin người dùng | GreenMart`;
  }, []);

  const listStyles:React.CSSProperties = {
    maxHeight: "500px",
    overflowY: "auto",
  }

  return (
    <>
      <h1 className="section-header">Lịch sử mua hàng</h1>
      <ul style={listStyles}>
        {orderList.loading ? (
          <Skeleton height={80} count={3} />
        ) : orderList.data.length ? (
          orderList.data.map((order) => (
            <li className="bg-white rounded-3 align-items-center d-flex px-1 mb-1">
              <div
                className="user__orders-imgcontainer"
                style={{ width: "100px" }}
              >
                <img
                  className="user__orders-img"
                  src={order.thumbnail}
                  alt=""
                />
              </div>
              <div className="info">
                <Link
                  className="text-decoration-none text-dark"
                  to={`/taikhoan/donhang/${order.id}`}
                >
                  <strong className="m-0">Mã đơn: DH23152{order.id}</strong>
                </Link>
                <p className="m-0">Tình trạng: {statusConvert(order.status)}</p>
                <p className="m-0">
                  Ngày đặt hàng: {formatDateTime(order.date)}
                </p>
              </div>
              <span>đ{priceFormatter(order.total)}</span>
            </li>
          ))
        ) : (
          <p className="my-5 text-center">Không có thông tin</p>
        )}
      </ul>
    </>
  );
}

export default OrderList