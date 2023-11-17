import React from 'react'

const DayDeals = () => {
  return (
    <div className="deals section-margin">
      <div className="mb-2 d-flex align-items-center">
        <h2 className='section-header'>Deals of the day</h2>
        <a
          href="#"
          className="fs-5 text-decoration-none text-secondary ms-auto"
        >
          All deals
        </a>
      </div>
      <ul className="row deals__list list-unstyled">
        <li className="col-3 deals__item text-center">
          <div
            className="deals__item-img rounded-5"
            style={{
              backgroundImage: `url('https://boostify-nesst.myshopify.com/cdn/shop/products/product-17.jpg?v=1659061200&width=360')`,
            }}
          ></div>
          <div className="deals__item-info hover-animation text-start">
            <a
              href="#"
              className="mb-5 text-decoration-none fw-semibold text-decoration-none"
            >
              Seeds of Change Organic Quinoa Rice
            </a>
            <div className="deals__item-rating mb-2">
              <span className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="text-secondary ms-2">(50)</span>
            </div>
            <div className="deals__item-price mb-3">
              <span className="deals__item-price-first">$52.85</span>
              <span className="deals__item-price-second">$55.80</span>
            </div>
            <button className="btn btn-success ">
              <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </button>
          </div>
        </li>
        <li className="col-3 deals__item text-center">
          <div
            className="deals__item-img rounded-5"
            style={{
              backgroundImage:
                'url("https://boostify-nesst.myshopify.com/cdn/shop/products/product-18.jpg?v=1659061233&width=360")',
            }}
          ></div>
          <div className="deals__item-info hover-animation text-start">
            <a
              href="#"
              className="mb-5 text-decoration-none fw-semibold text-decoration-none"
            >
              Perdue Simply Smart Organics Gluten Free
            </a>
            <div className="deals__item-rating mb-2">
              <span className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="text-secondary ms-2">(50)</span>
            </div>
            <div className="deals__item-price mb-3">
              <span className="deals__item-price-first">$34.85</span>
              <span className="deals__item-price-second">$6.80</span>
            </div>
            <button className="btn btn-success ">
              <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </button>
          </div>
        </li>
        <li className="col-3 deals__item text-center">
          <div
            className="deals__item-img rounded-5"
            style={{
              backgroundImage: `url('https://boostify-nesst.myshopify.com/cdn/shop/products/product-19.jpg?v=1659061273&width=360')`,
            }}
          ></div>
          <div className="deals__item-info hover-animation text-start">
            <a
              href="#"
              className="mb-5 text-decoration-none fw-semibold text-decoration-none"
            >
              Signature Wood-Fired Mushroom Meals
            </a>
            <div className="deals__item-rating mb-2">
              <span className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="text-secondary ms-2">(50)</span>
            </div>
            <div className="deals__item-price mb-3">
              <span className="deals__item-price-first">$12.85</span>
              <span className="deals__item-price-second">$14.70</span>
            </div>
            <button className="btn btn-success ">
              <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </button>
          </div>
        </li>
        <li className="col-3 deals__item text-center">
          <div
            className="deals__item-img rounded-5"
            style={{
              backgroundImage:
                'url("https://boostify-nesst.myshopify.com/cdn/shop/products/product-20.jpg?v=1659061316&width=360")',
            }}
          ></div>
          <div className="deals__item-info hover-animation text-start">
            <a
              href="#"
              className="mb-5 text-decoration-none fw-semibold text-decoration-none"
            >
              Simply Lemonade with Raspberry Juice
            </a>
            <div className="deals__item-rating mb-2">
              <span className="text-warning">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <span className="text-secondary ms-2">(50)</span>
            </div>
            <div className="deals__item-price mb-3">
              <span className="deals__item-price-first">$15.85</span>
              <span className="deals__item-price-second">$17.80</span>
            </div>
            <button className="btn btn-success ">
              <i className="fa-solid fa-cart-shopping"></i> Add to cart
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DayDeals