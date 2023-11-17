import React from 'react'

interface productsProps {
  product: {
    id: number;
    imgUrl: string;
    name: string;
    rating: number;
    price: number;
    oldPrice: number;
  };
}
const Product = (props: productsProps) => {
  return (
    
    <div className="product d-flex flex-column position-relative">
        {/* Sales Banner */}
        <div className="product__banner position-absolute">-7%</div>

        <div
          className="product__img my-1"
          style={{ backgroundImage: `url(${props.product.imgUrl})` }}
        ></div>
        <span className="product__name my-1">{props.product.name}</span>
        <div className="product__rating my-1 d-flex align-items-center">
          <div className="product__rating-stars d-flex align-items-center">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <span className="product__rating-score">
            ({props.product.rating})
          </span>
        </div>  
        <div className="product__price my-1">
          <span>{props.product.price.toFixed(2)}$</span>
          <s>{props.product.oldPrice.toFixed(2)}$</s>
        </div>
        <button className="product__btn">
          <i className="fa-solid fa-cart-shopping"></i>
          Add to cart
        </button>
      </div>
  );
}

export default Product