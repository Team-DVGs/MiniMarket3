import React, {useState, useEffect} from 'react'
import {Link, NavLink, useLocation} from "react-router-dom";
// import { fetchCart } from '../store/features/Cart/cartSlice';
import { fetchWishList, deleteItemWishList } from '../store/features/Products/wishlistSlice';
import { useAppSelector, useAppDispatch } from '../store';
import { priceFormatter } from '../utils';

import Modal from './Modal';
import SearchBox from './SearchBox';
import Skeleton from 'react-loading-skeleton';

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
      link: "/search?keyword=*",
      submenu: false,
      sublinks: [],
    },
    {
      name: "Danh mục",
      link: "/danhmuc",
      submenu: true,
      sublinks: [
        {
          head: "Thịt, Cá, Trứng",
          sublink: [
            {
              name: "Thịt heo",
              link: "/danhmuc/1?page=1&categoryId=1",
            },
            {
              name: "Thịt bò",
              link: "/danhmuc/1?page=1&categoryId=2",
            },
            {
              name: "Thịt gà",
              link: "/danhmuc/1?page=1&categoryId=3",
            },
            {
              name: "Thịt sơ chế",
              link: "/danhmuc/1?page=1&categoryId=4",
            },
            {
              name: "Trứng gà",
              link: "/danhmuc/1?page=1&categoryId=6",
            },
          ],
        },
        {
          head: "Rau củ, trái cây",
          sublink: [
            {
              name: "Trái cây",
              link: "/danhmuc/2?page=1&categoryId=8",
            },
            {
              name: "Rau củ làm sẵn",
              link: "/danhmuc/2?page=1&categoryId=9",
            },
            {
              name: "Rau lá",
              link: "/danhmuc/2?page=1&categoryId=11",
            },
            {
              name: "Củ quả",
              link: "/danhmuc/2?page=1&categoryId=12",
            },
            {
              name: "Nấm",
              link: "/danhmuc/2?page=1&categoryId=13",
            },
          ],
        },
        {
          head: "Kem, thực phẩm đông mát",
          sublink: [
            {
              name: "Kem cây",
              link: "/danhmuc/4?page=1&categoryId=25",
            },
            {
              name: "Bánh bao",
              link: "/danhmuc/4?page=1&categoryId=26",
            },
            {
              name: "Xúc xích",
              link: "/danhmuc/4?page=1&categoryId=27",
            },
            {
              name: "Chả lục",
              link: "/danhmuc/4?page=1&categoryId=28",
            },
            {
              name: "Mandu, há cảo",
              link: "/danhmuc/4?page=1&categoryId=31",
            },
          ],
        },
      ],
    },
    {
      name: "Sales",
      link: "/search?keyword=sales",
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
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");
  const [wishModal, setWishModal] = useState<boolean>(false);
  const user = useAppSelector(state => state.user);
  const wishlist = useAppSelector(state => state.wishlist)
  const getName = ():string => {
    const arrName = user.data.fullname.split(" ");
    return arrName[arrName.length - 1];
  }
  const closeWish = (): void => {
    setWishModal(false);
  }
  function handleDeleteWishList(productId: number){
    dispatch(deleteItemWishList({productId, userId: user.data.id}));
  }
  useEffect(() => {
    if (user.data.isLoggedIn){
      dispatch(fetchWishList(user.data.id.toString()));
    }
  },[user.data.isLoggedIn])
  // useEffect(() => {
  //   dispatch(fetchCart(user.data.cartId.toString()));
  //   return () =>{
  //   }
  // },[])
  
  

  return (
    <div className="nav header position-relative">
      {/* Top nav */}
      <div className="top-bar d-none d-lg-flex">
        <div className="top-bar-left">
          <Link to="/vechungtoi">
            <span>Về chúng tôi</span>
          </Link>
          <Link to="/taikhoan">
            <span>Tài khoản</span>
          </Link>
          <Link to="/chinhsach">
            <span>Chính sách</span>
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
            <SearchBox type="normal" />
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
            <Link to="#" onClick={() => setWishModal(true)}>
              <i className="header-inner-right-icon fa-regular fa-heart"></i>
              <span className="d-none d-lg-block">Yêu thích</span>
            </Link>
            {wishModal && (
              <Modal
                isOpen={wishModal}
                width={800}
                minHeight={500}
                onClose={closeWish}
                children={
                  <div className="cart__list d-flex flex-column h-100">
                    <h1 className="text-center section-header ">
                      Danh sách yêu thích
                    </h1>
                    <div className="flex-grow-1 overflow-y-auto overflow-x-hidden">
                      <table className="w-100">
                        <thead className="">
                          <tr>
                            <td>Sản phẩm</td>
                            <td>Giá</td>
                            <td>Xoá</td>
                          </tr>
                        </thead>
                        <tbody>
                          {wishlist.data.map((item) => (
                            <tr className="cart__product">
                              {/* Ten va anh*/}
                              <td className="cart__product-name row g-3">
                                {/* Holder */}
                                <div className="">
                                  <Link to={`/sanpham/${item.id}`}>
                                    <img
                                      className="w-100"
                                      src={item.thumbnail}
                                      alt=""
                                    />
                                  </Link>
                                  <div>
                                    <span>{item.name}</span>
                                  </div>
                                </div>
                              </td>
                              {/* Tong gia tien */}
                              <td className="cart__product-total">
                                <span>
                                  đ{priceFormatter(item.discount_price)}
                                </span>
                              </td>
                              <td className="cart__product-delete">
                                <div
                                  onClick={() => handleDeleteWishList(item.id)}
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
                  </div>
                }
              />
            )}
            {location.pathname !== "/giohang" && (
              <Link
                to={`${user.data.isLoggedIn ? "/giohang" : "/dangnhap"}`}
                className="position-relative header-inner-right-cartlink"
              >
                <i className="header-inner-right-icon fa-solid fa-cart-shopping"></i>
                <span className="d-none d-lg-block">Giỏ hàng</span>
                {/* Gio hang hover */}
                <div
                  className="header-inner-right-cart"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                  }}
                >
                  <p className="m-0">Giỏ hàng</p>
                  {user.data.isLoggedIn ? (
                    cartData.loading ? (
                      <ul>
                        <Skeleton height={50} className="my-2" />
                        <Skeleton height={50} className="my-2" />
                        <Skeleton height={50} className="my-2" />
                      </ul>
                    ) : cartData.data.list?.length ? (
                      <>
                        <ul>
                          {cartData.data.list.map((item) => (
                            <li className="row">
                              <div className="col-3">
                                <div
                                  style={{
                                    backgroundImage: `url(${item.thumbnail})`,
                                    backgroundSize: "contain",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                  }}
                                ></div>
                              </div>
                              <div className="col-9">
                                <h4>{item.name}</h4>
                                <div>
                                  <span>
                                    {item.quantity} x đ
                                    {priceFormatter(item.discount_price)}
                                  </span>
                                  <s>đ{priceFormatter(item.reg_price)}</s>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="">
                          <span>Tổng tiền</span>
                          <span>đ{priceFormatter(cartData.data.total)}</span>
                        </div>
                        <div>
                          <Link to="/giohang" className="btn-normal">
                            Xem giỏ hàng
                          </Link>
                          <Link to="/giohang/thanhtoan" className="btn-normal">
                            Thanh toán
                          </Link>
                        </div>
                      </>
                    ) : (
                      <span>Giỏ hàng trống</span>
                    )
                  ) : (
                    <span>Bạn chưa đăng nhập</span>
                  )}
                </div>
              </Link>
            )}
            {user.data.isLoggedIn ? (
              <Link to="/taikhoan">
                <i className="header-inner-right-icon fa-regular fa-user"></i>
                <span className="d-none d-lg-block">Xin chào, {getName()}</span>
              </Link>
            ) : (
              <Link to="/dangnhap">
                <i className="header-inner-right-icon fa-regular fa-user"></i>
                <span className="d-none d-lg-block">Đăng nhập</span>
              </Link>
            )}
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
      <SearchBox type="mobile" searchOpen={searchOpen} />

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