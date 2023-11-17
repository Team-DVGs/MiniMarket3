import React from 'react'
import Product from './Product';

interface popularProps {
  popProducts: {
    id: number;
    imgUrl: string;
    name: string;
    rating: number;
    price: number;
    oldPrice: number;
  }[];
};
const Popular = (props: popularProps) : JSX.Element => {
  return (
    <div className="popular section-margin">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="section-header">Popular Products</h1>
        <nav className="">
          <a href="#">All</a>
          <a href="#">Milk & Diaries</a>
          <a href="#">Coffees and Teas</a>
          <a href="#">Pet Foods</a>
          <a href="#">Meats</a>
        </nav>
      </div>
      {/* Product List */}
      <div className="row mt-2 gy-3">
        {props.popProducts.map(item => (
            <Product product={item}/>
        ))}
      </div>
    </div>
  );
}

export default Popular