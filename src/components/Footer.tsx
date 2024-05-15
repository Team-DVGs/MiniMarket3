import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer w-100 mt-5">
      <div className="info mb-3">
        <div className="container-md">
          <div className="row gy-4">
            <div className="col-12 col-md-8 col-lg-4 d-flex flex-column info__intro">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/brand-logo.png"}
                alt=""
                className="info__intro-logo"
              />
              <p>Đơn giản, đa dạng và tiện ích</p>
              <span className="info__intro-content">
                <i className="fa-solid fa-location-dot"></i>
                <strong>Địa chỉ: </strong> Phường 13 Linh Trung Thành Phố Thủ
                Đức
              </span>
              <span className="info__intro-content">
                <i className="fa-solid fa-phone"></i>
                <strong>Điện thoại: </strong>18001091
              </span>
              <span className="info__intro-content">
                <i className="fa-solid fa-paper-plane"></i>
                <strong>Email: </strong>uit@gmail.com
              </span>
              <span className="info__intro-content">
                <i className="fa-solid fa-clock"></i>
                <strong>Thời gian làm việc: </strong>từ 6 giờ sáng đến 10 giờ
                tối hàng ngày
              </span>
            </div>
            <div className="info__nav col-6 col-md-4 col-lg-2">
              <h2>Giới thiệu</h2>
              <Link to="/vechungtoi">Về chúng tôi</Link>
              <Link to="/vanchuyen">Thông tin vận chuyển</Link>
              <Link to="/chinhsach">Điều khoản và chính sách</Link>
              <Link to="/lienhe">Hỗ trợ khách hàng</Link>
              <Link to="/tuyendung">Tuyển dụng</Link>
            </div>
            <div className="info__nav col-6 col-md-4 col-lg-2">
              <h2>Tài khoản</h2>
              <Link to="">Đăng nhập</Link>
              <Link to="">Giỏ hàng</Link>
              <Link to="">Danh sách yêu thích</Link>
              <Link to="">Chi tiết mua hàng</Link>
              <Link to="">So sánh sản phẩm</Link>
            </div>
            <div className="info__nav col-6 col-md-4 col-lg-2">
              <h2>Loại sản phẩm</h2>
              <Link to={""}>Sữa và sữa chua</Link>
              <Link to={""}>Nước ngọt và bia</Link>
              <Link to={""}>Thịt, cá trứng</Link>
              <Link to={""}>Phô mai</Link>
            </div>
            <div className="info__nav col-6 col-md-4 col-lg-2">
              <h2>App và Thanh Toán</h2>
              <p>Tải từ AppStore và Google Play</p>
              <div className="info__nav-download d-flex justify-content-between">
                <Link to="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/logo/app-store.jpg"
                    }
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/img/logo/google-play.png"
                    }
                    alt=""
                  />
                </Link>
              </div>
              <p>Thanh toán liên quốc tế</p>
              <div className="info__nav-payment d-flex justify-content-between">
                <Link to="">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/img/logo/visa.png"}
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/logo/mastercard.png"
                    }
                    alt=""
                  />
                </Link>
                <Link to="">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/img/logo/maestro.png"
                    }
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container-md d-flex flex-wrap justify-content-between">
          <div className="contact__section ">
            <p>@2023 - Developed by DVGs</p>
            <p>All rights reserved</p>
          </div>

          <div className="d-flex align-items-center flex-row contact__section">
            <i className="fa-solid fa-phone"></i>
            <div>
              <p>1800-1091</p>
              <span>Thời gian làm việc: 8:00 - 22:00</span>
            </div>
          </div>

          <div className="contact__section ">
            <span>
              Theo dõi:
              <Link to="">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </span>
            <p>Khuyến mãi lên đến 15% cho lần đăng ký đầu tiên</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer