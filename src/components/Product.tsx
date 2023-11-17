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
    <div className="col-12 col-md-4 col-lg-2 product ">
      <div className="d-flex flex-column">
        <div
          className="product__img "
          style={{ backgroundImage: `url(${props.product.imgUrl})` }}
        ></div>
        <span className="product__name mt-2">{props.product.name}</span>
        <div className="product__rating d-flex align-items-center">
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
        <div className="product__price">
          <span>{props.product.price.toFixed(2)}$</span>
          <s>{props.product.oldPrice.toFixed(2)}</s>
        </div>
        <button className="product__btn btn btn-success">
          <i className="fa-solid fa-cart-shopping"></i>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product