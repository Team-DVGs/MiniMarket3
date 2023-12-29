import React, {useEffect} from 'react'
import { JsxElement } from 'typescript';
import { priceFormatter, productHomeInterface } from '../utils';
import { Link } from 'react-router-dom';

export interface productsProps {
  product: productHomeInterface,
  children?: JSX.Element
}
const Product = (props: productsProps) : JSX.Element => {
  
  return (
    <Link
      to={`/sanpham/${props.product.id}`}
      className="product d-flex flex-column position-relative text-decoration-none"
    >
      {/* Sales Banner */}
      {Math.round(
        ((props.product.reg_price - props.product.discount_price) * 100) /
          props.product.reg_price
      ) > 0 && (
        <div className="product__banner position-absolute">
          -
          {Math.round(
            ((props.product.reg_price - props.product.discount_price) * 100) /
              props.product.reg_price
          )}
          %
        </div>
      )}

      <div className="product__img-container mb-2">
        <div
          className="product__img"
          style={{ backgroundImage: `url(${props.product.thumbnail})` }}
        ></div>
      </div>

      <div className="product__info d-flex flex-column">
        <span className="product__categories text-secondary my-1">
          {props.product.category_name}
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
          <span>{priceFormatter(props.product.discount_price)}đ</span>
          {props.product.discount_price < props.product.reg_price && (
            <s>{priceFormatter(props.product.reg_price)}đ</s>
          )}
        </div>
        <button className="product__btn">
          {/* <i className="fa-solid fa-cart-shopping"></i> */}
          <i className="fa-regular fa-eye"></i>
          Xem thêm
        </button>
      </div>
      {props.children}
    </Link>
  );
}

export default Product