import React from 'react'
import Product from '../Product';
import { productProps } from '../Product';

interface popularProps {
  popProducts: productProps[];
};
const Popular = (props: popularProps): JSX.Element => {
  return (
    <div className="popular section-margin">
      <div className="d-flex justify-content-between align-items-center header-margin">
        <h1 className="section-header">Sản phẩm phổ biến</h1>
        <nav className="">
          <a href="#">Tất cả</a>
          <a href="#">Sữa và phô mai</a>
          <a href="#">Cà phê và trà</a>
          <a href="#">Trái cây</a>
          <a href="#">Thịt</a>
        </nav>
      </div>
      {/* Product List */}
      <div className="row gy-3">
        {props.popProducts.map((item) => (
          <div className="col-6 col-md-4 col-lg-2" key={item.id}>
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular