import React from 'react'
import Dropdown from '../../components/Products/Dropdown';
import { Link, NavLink } from 'react-router-dom';
import Product from '../../components/Product';

const Products = () => {
  return (
    <div className="products page-margin">
      <div
        className="products__header mb-3"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/img/bg/header-bg.webp"
          })`,
        }}
      >
        <h1>Sữa tươi</h1>
      </div>

      <div className="row">
        <div className="col-12 col-md-9">
          <div className="products__categories">
            <Link to="/">
              <div
                style={{
                  backgroundImage: `url('https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_103x103/https://cdn.tgdd.vn/Products/Images/8785/bhx/rau-cu-cac-loai-202209301506432108.png')`,
                }}
              ></div>
              <p>Củ quả</p>
            </Link>

            <Link to="/">
              <div
                style={{
                  backgroundImage: `url('https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_103x103/https://cdn.tgdd.vn/Products/Images/8785/bhx/rau-cu-cac-loai-202209301506432108.png')`,
                }}
              ></div>
              <p>Thịt cá trứng</p>
            </Link>
          </div>
          <div className="products__options d-flex py-2 align-items-center">
            <Dropdown
              dropDownInfo={{
                icon: <i className="fa-solid fa-sort"></i>,
                title: "Sắp xếp",
                options: [
                  {
                    optionName: "Bán chạy",
                    query: "bestseller",
                  },
                  {
                    optionName: "Theo tên từ A-Z",
                    query: "tenaz",
                  },
                  {
                    optionName: "Theo tên từ Z-A",
                    query: "tenza",
                  },
                  {
                    optionName: "Giá thấp",
                    query: "giathap",
                  },
                  {
                    optionName: "Giá cao",
                    query: "giacao",
                  },
                ],
              }}
            />

            <Dropdown
              dropDownInfo={{
                icon: <i className="fa-solid fa-copyright"></i>,
                title: "Thương hiệu",
                options: [
                  {
                    optionName: "Chinsu",
                    query: "chinsu",
                  },
                  {
                    optionName: "Cholimex",
                    query: "cholimex",
                  },
                ],
              }}
            />
            {/* show all  */}
            <p className="ms-auto">Show all 2 products</p>
            <p></p>
          </div>
          {/* Products */}
          <div className="products__list mt-3 row">
            <div className="col-6 col-md-4 col-lg-3">
              <Product
                product={{
                  id: 1,
                  thumbnail:
                    "https://boostify-nesst.myshopify.com/cdn/shop/products/product-5-2_ca6f1747-004b-474b-a977-0e0e954e9e35.jpg?v=1663051692&width=360",
                  name: "Modern Dadua Camera 4K 2022EF",
                  rating: 4.5,
                  discount_price: 43.28,
                  reg_price: 44,
                  category: "Trái cây"
                }}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <Product
                product={{
                  id: 1,
                  thumbnail:
                    "https://boostify-nesst.myshopify.com/cdn/shop/products/product-5-2_ca6f1747-004b-474b-a977-0e0e954e9e35.jpg?v=1663051692&width=360",
                  name: "Modern Dadua Camera 4K 2022EF",
                  rating: 4.5,
                  discount_price: 43.28,
                  reg_price: 44,
                  category: "Trái cây"
                }}
              />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <Product
                product={{
                  id: 1,
                  thumbnail:
                    "https://boostify-nesst.myshopify.com/cdn/shop/products/product-5-2_ca6f1747-004b-474b-a977-0e0e954e9e35.jpg?v=1663051692&width=360",
                  name: "Modern Dadua Camera 4K 2022EF",
                  rating: 4.5,
                  discount_price: 43.28,
                  reg_price: 44,
                  category: "Trái cây"
                }}
              />
            </div>
          </div>
        </div>
        {/* Categories Link Navs */}
        <div className="col-0 col-md-3">
          <div className="products__links box-shadow-style">
            <h1>Categories</h1>
            <div className="seperate"></div>
            <ul>
              <li>
                <Link to="/">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768")',
                    }}
                  ></div>
                  <span>Milks and Diaries</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768")',
                    }}
                  ></div>
                  <span>Milks and Diaries</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div
                    style={{
                      backgroundImage:
                        'url("https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768")',
                    }}
                  ></div>
                  <span>Milks and Diaries</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products