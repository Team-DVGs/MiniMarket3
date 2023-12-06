import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col-0 col-md-6 d-flex">
          <img
            className="align-self-stretch"
            src="https://glints.com/vn/blog/wp-content/uploads/2023/06/Lam-cashier-la-lam-gi.jpg"
            alt={process.env.PUBLIC_URL + "/assets/img/noimg.png"}
          />
        </div>
        <form
          action="javascript:void(0)"
          className="col-12 col-md-6 mt-3 mt-md-0"
        >
          <h1>Đăng ký</h1>
          <p>
            Đã có tài khoản? <Link to="/taikhoan/dangnhap">Đăng nhập</Link>
          </p>
          <input type="text" placeholder="Tên tài khoản" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Mật khẩu" />
          <input type="password" placeholder="Nhập lại mật khẩu" />
          <button type="submit">Đăng ký</button>
        </form>
      </div>
    </div>
  );
}

export default Register