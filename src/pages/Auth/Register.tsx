import React, { useState, useRef ,useEffect, useSyncExternalStore } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import { signupUser } from "../../store/features/Auth/userSlice";

const Register = () => {
  const [formData, setFormData] = useState<{
    fullname: string;
    email: string;
    password: string;
    passconfirm: string;
  }>({ fullname: "", email: "", password: "", passconfirm: "" });
  const [localError, setLocalError] = useState<string>("");
  const user = useAppSelector((state) => state.user);
  const [flag, setflag] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleOnChange = (event: React.FormEvent) => {};
  function handleChange(event: React.FormEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // name in bracket turning string to obj property
        [name]: value,
      };
    });
  }
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setflag(true);
    if (formData.password !== formData.passconfirm) {
      setLocalError("Mật khẩu và nhập lại mật khẩu phải khớp nhau");
      return;
    }
    setLocalError("");
    dispatch(signupUser(formData)).then((res) => {
      if (res.payload) {
        navigate("/");
      }
    });
  }
  // Set document title
  React.useEffect(() => {
    document.title = "Đăng ký ngay | GreenMart";
  }, []);
  return (
    <div className="login">
      <div className="row">
        <div className="col-0 col-md-6 d-flex">
          <img
            className="align-self-stretch"
            src="https://glints.com/vn/blog/wp-content/uploads/2023/06/Lam-cashier-la-lam-gi.jpg"
            alt={process.env.PUBLIC_URL + "/assets/img/noimg.png"}
            style={{ minHeight: "460px" }}
          />
        </div>
        <form
          action="javascript:void(0)"
          className="col-12 col-md-6 mt-3 mt-md-0"
          onSubmit={handleSubmit}
        >
          <h1>Đăng ký</h1>
          <p>
            Đã có tài khoản? <Link to="/dangnhap">Đăng nhập</Link>
          </p>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="Họ và Tên"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Nhập lại mật khẩu"
            value={formData.passconfirm}
            name="passconfirm"
            onChange={handleChange}
          />
          {/* Warning */}
          {flag && (user.error || localError) && !user.loading && (
            <p className="error mx-2 text-danger">{localError || user.error}</p>
          )}
          {/* Button */}
          <button
            type="submit"
            // disabled={user.loading || )
            style={{
              opacity:
                user.loading ||
                !formData.email ||
                !formData.password ||
                !formData.fullname ||
                !formData.passconfirm
                  ? ".5"
                  : "1",
            }}
          >
            {user.loading ? "Đăng ký..." : "Đăng ký"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
