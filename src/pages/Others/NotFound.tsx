import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "404 KHÔNG TÌM THẤY TRANG | GreenMart";
  }, []);
  return (
    <div className="notfound d-flex flex-column text-center align-items-center">
      <div className="text-center">
        <img
          src="https://boostify-nesst.myshopify.com/cdn/shop/files/page-404.png?v=1658737997&width=300"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <h1 className="">Không tìm thấy trang</h1>
      <p>Đường link bạn nhấn vào có thể đã bị xoá hoặc không tồn tại.</p>
      <Link to="/">
        <i className="fa-solid fa-house"></i>
        Quay về trang chủ
      </Link>
    </div>
  );
}

export default NotFound