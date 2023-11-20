import React from 'react'

const Header = () => {
  return (
    <div className="nav header">
      <div className="top-bar">
        <div className="top-bar-left">
          <a href="#!">
            <span>About Us</span>
          </a>
          <a href="#!">
            <span>My Account</span>
          </a>
          <a href="#!">
            <span>Wishlist</span>
          </a>
          <a href="#!">
            <span>Order Tracking</span>
          </a>
        </div>
        <div className="top-bar-center">
          <p>100% Secure delivery without contacting the courier</p>
        </div>
        <div className="top-bar-right">
          <span className="seperator">Need help? Call Us:+ 1800 900</span>
          <form action="" style={{ display: "inline" }}>
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
          </form>
        </div>
      </div>
      <header>
        <div className="header-inner container-md">
          <div className="header-inner-left">
            <form
              action="https://www.google.com/search"
              method="GET"
              className="search-bar"
            >
              <input
                type="text"
                name="q"
                id="search-product"
                placeholder="Search for product"
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
          <div className="header-inner-center">
            <a href="index.html">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/brand-logo.png"}
                alt="Green Mart logo"
                width="100"
              />
            </a>
          </div>
          <div className="header-inner-right">
            <a href="#!">
              <i className="header-inner-right-icon fa-solid fa-scale-unbalanced"></i>
              <span>Compare</span>
            </a>
            <a href="#!">
              <i className="header-inner-right-icon fa-regular fa-heart"></i>
              <span>Wishlist</span>
            </a>
            <a href="#!">
              <i className="header-inner-right-icon fa-solid fa-cart-shopping"></i>
              <span>Cart</span>
            </a>
            <a href="#!">
              <i className="header-inner-right-icon fa-regular fa-user"></i>
              <span>Login</span>
            </a>
          </div>
        </div>
        <nav className="nav-bar">
          <ul className="header-navigation">
            <li className="menu-item">
              <a className="menu-item-link" href="#!">
                <span className="menu-text">Home</span>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="#!">
                <span className="menu-text">Blog</span>
                {/* <i className="menu-arrow fa-solid fa-chevron-down"></i> */}
              </a>
              {/* <ul className="sub-menu">
                <li>
                  <a href="#!">Blog Category Grid</a>
                </li>
                <li>
                  <a href="#!">Blog Category List</a>
                </li>
                <li>
                  <a href="#!">
                    <span>Blog Category Big</span>
                    <i className="menu-arrow fa-solid fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu sub-menu--sub">
                    <li>
                      <a href="#!">Blog 1</a>
                    </li>
                    <li>
                      <a href="#!">Blog 2</a>
                    </li>
                    <li>
                      <a href="#!">Blog 3</a>
                    </li>
                    <li>
                      <a href="#!">Blog 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Blog Category Wide</a>
                </li>
                <li>
                  <a href="#!">
                    <span>Single Post</span>
                    <i className="menu-arrow fa-solid fa-chevron-right"></i>
                  </a>
                  <ul className="sub-menu sub-menu--sub">
                    <li>
                      <a href="#!">Left Sidebar</a>
                    </li>
                    <li>
                      <a href="#!">Right Sidebar</a>
                    </li>
                    <li>
                      <a href="#!">No Sidebar</a>
                    </li>
                  </ul>
                </li>
              </ul> */}
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="#!">
                <span className="menu-text">Mega menu</span>
                <i className="menu-arrow fa-solid fa-chevron-down"></i>
              </a>
              <ul className="sub-menu sub-menu--mega">
                <li>
                  <a href="#!">Fruit & Vegetables</a>
                  <ul>
                    <li>
                      <a href="#!">Meat & Poultry</a>
                    </li>
                    <li>
                      <a href="#!">Fresh Vegetables</a>
                    </li>
                    <li>
                      <a href="#!">Herbs & Seasonings</a>
                    </li>
                    <li>
                      <a href="#!">Cuts & Sprouts</a>
                    </li>
                    <li>
                      <a href="#!">Exotic Fruits & Veggies</a>
                    </li>
                    <li>
                      <a href="#!">Packaged Produce</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Breakfast & Dairy</a>
                  <ul>
                    <li>
                      <a href="#!">Milk & Flavoured Milk</a>
                    </li>
                    <li>
                      <a href="#!">Butter and Margarine</a>
                    </li>
                    <li>
                      <a href="#!">Eggs Substitutes</a>
                    </li>
                    <li>
                      <a href="#!">Marmalades</a>
                    </li>
                    <li>
                      <a href="#!">Sour Cream</a>
                    </li>
                    <li>
                      <a href="#!">Cheese</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">Meat & Seafood</a>
                  <ul>
                    <li>
                      <a href="#!">Breakfast Sausage</a>
                    </li>
                    <li>
                      <a href="#!">Dinner Sausage</a>
                    </li>
                    <li>
                      <a href="#!">Chicken</a>
                    </li>
                    <li>
                      <a href="#!">Sliced Deli Meat</a>
                    </li>
                    <li>
                      <a href="#!">Wild Caught Fillets</a>
                    </li>
                    <li>
                      <a href="#!">Crab and Shellfish</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!">
                    <img
                      src="//boostify-nesst.myshopify.com/cdn/shop/files/mega-banner.jpg?v=1661418799&amp;width=540"
                      width="508px"
                      height="322px"
                    />
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="#!">
                <i className="menu-fire fa-solid fa-fire"></i>
                <span className="menu-text">Deals</span>
              </a>
            </li>
            <li className="menu-item">
              <a className="menu-item-link" href="#!">
                <span className="menu-text">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header