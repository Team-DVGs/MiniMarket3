import React, {useState, useEffect} from 'react'
import {Link, NavLink} from "react-router-dom";
import { fetchCart } from '../store/features/cartSlice';
import { useAppSelector, useAppDispatch } from '../store';
import { priceFormatter } from '../utils';

const Header = (): JSX.Element=> {
  const links: {
    name: string;
    link: string;
    icon?: JSX.Element;
    submenu: boolean;
    sublinks: {
      head?: string;
      sublink: { name: string; link: string }[];
    }[];
  }[] = [
    {
      name: "Trang chủ",
      link: "/",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Các sản phẩm",
      link: "/danhmuc/suatuoi",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Danh mục",
      link: "/danhmuc",
      submenu: true,
      sublinks: [
        {
          head: "Rau củ",
          sublink: [
            {
              name: "Bắp cải",
              link: "/",
            },
            {
              name: "Cần tây",
              link: "/",
            },
            {
              name: "Hành lá",
              link: "/",
            },
            {
              name: "Các loại đậu",
              link: "/",
            },
            {
              name: "Đóng hộp",
              link: "/",
            },
          ],
        },
        {
          head: "Thịt cá trứng",
          sublink: [
            {
              name: "Thịt heo",
              link: "/",
            },
            {
              name: "Thịt bò",
              link: "/",
            },
            {
              name: "Thịt gà và ức",
              link: "/",
            },
            {
              name: "Các loại thịt khác",
              link: "/",
            },
            {
              name: "Đóng hộp",
              link: "/",
            },
          ],
        },
        {
          head: "Các loại bánh kẹo",
          sublink: [
            {
              name: "Bánh sữa",
              link: "/",
            },
            {
              name: "Kẹo trái cây",
              link: "/",
            },
            {
              name: "Thịt gà và ức",
              link: "/",
            },
            {
              name: "Các loại thịt khác",
              link: "/",
            },
            {
              name: "Đóng hộp",
              link: "/",
            },
          ],
        },
      ],
    },
    {
      name: "Sales",
      link: "/danhmuc/suatuoi",
      submenu: false,
      icon: <i className="menu-fire fa-solid fa-fire"></i>,
      sublinks: [],
    },
    {
      name: "Về greenmart",
      link: "/vechungtoi",
      submenu: true,
      sublinks: [
        {
          sublink: [
            {
              name: "Thông tin vận chuyển",
              link: "/vanchuyen",
            },
            {
              name: "Điều khoản và chính sách",
              link: "/chinhsach",
            },
            {
              name: "Hỗ trợ khách hàng",
              link: "/lienhe",
            },
            {
              name: "Tuyển dụng",
              link: "/tuyendung",
            },
          ],
        },
      ],
    },
  ];
  const cartData = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");
  useEffect(() => {
    dispatch(fetchCart());
    return () =>{
      console.log('unmount')
    }
  },[])
  return (
    <div className="nav header position-relative">
      {/* Top nav */} 
      <div className="top-bar d-none d-lg-flex">
        <div className="top-bar-left">
          <Link to="/vechungtoi">
            <span>Về chúng tôi</span>
          </Link>
          <Link to="/taikhoan/dangnhap">
            <span>Tài khoản</span>
          </Link>
          <Link to="/about">
            <span>Danh sách yêu thích</span>
          </Link>
        </div>
        <div className="top-bar-center">
          <p>Miễn phí vận chuyển, sản phẩm mới mỗi ngày</p>
        </div>
        <div className="top-bar-right">
          <span className="seperator">Cần hỗ trợ? Gọi hotline:+ 1800 900</span>
          {/* <form action="" style={{ display: "inline" }}> */}
          {/* <div className="seperator" style={{display: 'inline-block'}}>
                            <select name="language" id="language">
                                <option value="english" selected>English </option>
                                <option value="vietnamese">Tiếng Việt </option>
                            </select>
                        </div> */}
          {/* <select name="currency" id="currency">
                            <option value="usd" selected>
                                <img src={process.env.PUBLIC_URL + "/assets/img/america-flag.jpg"} alt="america flag" width="20" height="15"/>
                                USD
                            </option>
                            <option value="vnd">
                                <img src={process.env.PUBLIC_URL + "/assets/img/vietnam-flag.jpg"} alt="vietnam flag" width="20" height="15"/>
                                VND
                            </option>
                        </select> */}
          {/* </form> */}
        </div>
      </div>
      {/* Main nav */}
      <header className="border-bottom-1">
        {/* Center */}
        <div className="header-inner container-md">
          <div className="header-inner-left d-none d-lg-flex">
            <form
              action="https://www.google.com/search"
              method="GET"
              className="search-bar"
            >
              <input
                type="text"
                name="q"
                id="search-product"
                placeholder="Tìm kiếm sản phẩm"
              />
              <button type="submit">
                <img
                  width="23"
                  height="23"
                  src="https://img.icons8.com/ios/50/search--v1.png"
                  alt="search--v1"
                />
              </button>
            </form>
          </div>
          <div className="header-inner-left d-flex d-lg-none align-items-center">
            <div onClick={() => setMenuOpen((prev) => !prev)}>
              <i className="fa-solid fa-bars-staggered"></i>
            </div>
          </div>
          <div className="header-inner-center">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/brand-logo.png"}
                alt="Green Mart logo"
                width="100"
              />
            </Link>
          </div>
          <div className="header-inner-right">
            {/* <a href="#!">
              <i className="header-inner-right-icon fa-solid fa-scale-unbalanced"></i>
              <span>So sánh</span>
            </a> */}
            <a
              className="d-inline-flex d-lg-none"
              onClick={() => setSearchOpen((prev) => !prev)}
            >
              <i className="header-inner-right-icon fa-solid fa-magnifying-glass"></i>
            </a>
            <Link to="#!">
              <i className="header-inner-right-icon fa-regular fa-heart"></i>
              <span className="d-none d-lg-block">Yêu thích</span>
            </Link>
            <Link to="/giohang" className="position-relative header-inner-right-cartlink">
              <i className="header-inner-right-icon fa-solid fa-cart-shopping"></i>
              <span className="d-none d-lg-block">Giỏ hàng</span>
              {/* Gio hang hover */}
              <div className="header-inner-right-cart" onClick={(event) => {event.preventDefault(); event.stopPropagation()}}>
                <p className="m-0">Giỏ hàng</p>
                {cartData.info.list.length ? (
                  <>
                    <ul>
                      {cartData.info.list.map((item) => (
                        <li className="row">
                          <div className="col-3">
                            <div
                              style={{
                                backgroundImage: `url(${item.thumbnail})`,
                              }}
                            ></div>
                          </div>
                          <div className="col-9">
                            <h4>{item.name}</h4>
                            <div>
                              <span>
                                {item.quanity} x đ
                                {priceFormatter(item.discount_price)}
                              </span>
                              <s>đ{priceFormatter(item.reg_price)}</s>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="">
                      <span>Total</span>
                      <span>đ{priceFormatter(cartData.info.total)}</span>
                    </div>
                    <div>
                      <Link to="/giohang" className="btn-normal">
                        Xem giỏ hàng
                      </Link>
                      <Link to="/thanhtoan" className="btn-normal">
                        Thanh toán
                      </Link>
                    </div>
                  </>
                ) : (
                  <span>Giỏ hàng trống</span>
                )}
              </div>
            </Link>
            <Link to="/taikhoan/dangnhap">
              <i className="header-inner-right-icon fa-regular fa-user"></i>
              <span className="d-none d-lg-block">Đăng nhập</span>
            </Link>
          </div>
        </div>
        {/* Bottom */}
        <nav className="nav-bar d-none d-lg-block">
          <ul className="header-navigation">
            {links.map((linkItem) => (
              <li className="menu-item" key={linkItem.name}>
                <Link className="menu-item-link" to={linkItem.link}>
                  {linkItem.icon}
                  <span className="menu-text">{linkItem.name}</span>
                  {linkItem.submenu && (
                    <i className="menu-arrow fa-solid fa-chevron-down"></i>
                  )}
                </Link>
                {linkItem.submenu && (
                  <ul
                    className="sub-menu sub-menu--mega"
                    style={{
                      width: `${Math.min(
                        linkItem.sublinks.length * 20,
                        100
                      )}vw`,
                    }}
                  >
                    {linkItem.sublinks.map((subLink) => (
                      <li
                        className={`col-${12 / linkItem.sublinks.length}`}
                        key={subLink.head}
                      >
                        {subLink.head && <a href="#!">{subLink.head}</a>}
                        <ul>
                          {subLink.sublink.map((minilink) => (
                            <li key={minilink.name}>
                              <Link to={`${minilink.link}`}>
                                {minilink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {/* Mobile search */}
      <div
        className={`nav__mobile-search ${
          searchOpen && "nav__mobile-search-open"
        }`}
      >
        <form
          action="https://www.google.com/search"
          method="GET"
          className="search-bar"
        >
          <input
            type="text"
            name="q"
            id="search-product"
            placeholder="Tìm kiếm sản phẩm"
          />
          <button type="submit">
            <img
              width="23"
              height="23"
              src="https://img.icons8.com/ios/50/search--v1.png"
              alt="search--v1"
            />
          </button>
        </form>
      </div>

      {/* Mobile nav */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`nav__mobile-layer ${menuOpen && "nav__mobile-layer-open"}`}
      ></div>
      <div
        className={`nav__mobile-container ${
          menuOpen && "nav__mobile-container-open"
        }`}
      >
        <h3 className="">Green mart</h3>
        <ul className="flex-fill">
          {links.map((linkItem) => (
            <li
              onClick={() => {
                setHeading(linkItem.submenu ? linkItem.name : "");
              }}
            >
              <a href={`${linkItem.link}`}>{linkItem.name}</a>
              {linkItem.submenu && (
                <i className="fa-solid fa-chevron-right"></i>
              )}
            </li>
          ))}
          {/* Submenu */}
          <ul className={`h-100 ${heading && "open"}`}>
            {/* Back btn */}
            <li
              onClick={() => {
                setHeading("");
              }}
            >
              <i className="fa-solid fa-chevron-left"></i>
              <a>Trở lại</a>
            </li>
            {/* Sub links */}
            {heading &&
              links
                .find((linkItem) => linkItem.name === heading)
                ?.sublinks.map((sLink) => (
                  <>
                    {sLink.head && <h5>{sLink.head}</h5>}
                    {sLink.sublink.map((minilink) => (
                      <li>
                        <a href={minilink.link}>{minilink.name}</a>
                      </li>
                    ))}
                  </>
                ))}
          </ul>
        </ul>
        <button onClick={() => setMenuOpen(false)}>
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
}

export default Header