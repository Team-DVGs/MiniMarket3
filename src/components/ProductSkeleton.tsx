import React, { useEffect } from "react";
import { JsxElement } from "typescript";
import Skeleton from "react-loading-skeleton";


const ProductSkeleton = (): JSX.Element => {
  return (
    <div className="product d-flex flex-column position-relative">
      <div className="product__img-container mb-2">
        {/* <div
          className="product__img"
          style={{ backgroundImage: `url(${props.product.thumbnail})` }}
        >
        </div> */}
        <Skeleton className="product__img" />
      </div>

      <div className="product__info d-flex flex-column">
        <span className="product__categories text-secondary my-1">
          <Skeleton />
        </span>
        <span className="product__name my-1">
            <Skeleton />
        </span>
        <div className="product__rating my-1 d-flex align-items-center">
            <Skeleton width={80}/>
          {/* <div className="product__rating-outer d-flex align-items-center">
            <div
              className="product__rating-inner"
            >
            </div>
          </div> */}
        </div>
        <div className="product__price my-1">
          <span className="w-50"><Skeleton /></span>
          <s className="w-50"><Skeleton /></s>
        </div>
        {/* <button className="product__btn">
          <i className="fa-solid fa-cart-shopping"></i>
          Add to cart
        </button> */}
      </div>
      {/* {props.children} */}
    </div>
  );
};

export default ProductSkeleton;
