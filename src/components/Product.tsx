import React, {useEffect} from 'react'
import { JsxElement } from 'typescript';


interface productsProps {
  product: {
    id: number;
    imgUrl: string;
    name: string;
    rating: number;
    price: number;
    oldPrice: number;
  },
  children?: JSX.Element
}
const Product = (props: productsProps) : JSX.Element => {
  
  return (
    <div className="product d-flex flex-column position-relative">
      {/* Sales Banner */}
      <div className="product__banner position-absolute">-7%</div>
      <div className="product__img-container mb-2">
        <div
          className="product__img"
          style={{ backgroundImage: `url(${props.product.imgUrl})` }}
        ></div>
      </div>

      <div className='product__info d-flex flex-column'>
        <span className="product__categories text-secondary my-1">
          Trái cây, nước ngọt
        </span>
        <span className="product__name my-1">{props.product.name}</span>
        <div className="product__rating my-1 d-flex align-items-center">
          <div className="product__rating-outer d-flex align-items-center">
            <div
              className="product__rating-inner"
              style={{
                width: `${Math.round((props.product.rating * 20) / 10) * 10}%`,
              }}
            ></div>
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
      {props.children}
    </div>
  );
}

export default Product