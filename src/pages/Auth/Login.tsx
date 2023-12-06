import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login">
      <div className="row">
        <div className="col-0 col-md-6 d-flex">
          <img
            className='align-self-stretch'
            src="https://www.health.com/thmb/obIRA8GcwOYcdIAxUTm_engnJ7A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Health-GettyImages-1451277246-e535acbd044f41808671167c34d52465.jpg"
            alt={process.env.PUBLIC_URL + "/assets/img/noimg.png"}
          />
        </div>
        <form
          action="javascript:void(0)"
          className="col-12 col-md-6 mt-3 mt-md-0"
        >
          <h1>Đăng nhập</h1>
          <p>
            Chưa có tài khoản? <Link to="/taikhoan/dangky">Tạo ở đây</Link>
          </p>
          <input type="text" placeholder="Tên tài khoản hoặc email" />
          <input type="password" placeholder="Mật khẩu" />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}

export default Login