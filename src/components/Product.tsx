import React, {useEffect} from 'react'
import { JsxElement } from 'typescript';

export interface productProps {
  id: number;
  thumbnail: string;
  name: string;
  rating: number;
  reg_price: number;
  discount_price: number;
  category: string
}
export interface productsProps {
  product: productProps,
  children?: JSX.Element
}
const Product = (props: productsProps) : JSX.Element => {
  
  return (
    <div className="product d-flex flex-column position-relative">
      {/* Sales Banner */}
      <div className="product__banner position-absolute">-{Math.round((props.product.reg_price - props.product.discount_price) * 100 / props.product.reg_price )}%</div>
      <div className="product__img-container mb-2">
        <div
          className="product__img"
          style={{ backgroundImage: `url(${props.product.thumbnail})` }}
        ></div>
      </div>

      <div className='product__info d-flex flex-column'>
        <span className="product__categories text-secondary my-1">
          {props.product.category}
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
          <span>{props.product.discount_price.toFixed(2)}$</span>
          <s>{props.product.reg_price.toFixed(2)}$</s>
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