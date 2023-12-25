import React, {useEffect, useState} from 'react';
import Product from '../Product';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchProductsPopular } from '../../store/features/Home/productsPopularSlice';
import { productHomeInterface } from '../../utils';
import Skeleton from "react-loading-skeleton";
import ProductSkeleton from '../ProductSkeleton';


const Popular = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [categorySelected, setCategorySelected] = useState<number>(-1);
  const productsPopular = useAppSelector(state => state.productsPopular);
  useEffect(() => {
    dispatch(fetchProductsPopular());
  }, [])
  useEffect(() => {
    setCategorySelected(productsPopular.data[0]?.categoryID || -1);
  }, [productsPopular.loading])
  
  const styles = {
    color: "#3BB77E",
    cursor: "pointer"
  };
  return (
    <div className="popular section-margin">
      <div className="d-flex justify-content-between align-items-center header-margin">
        <h1 className="section-header">Sản phẩm phổ biến</h1>
        <nav className="">
          {
            productsPopular.data.map(category => (
              <a onClick={() => setCategorySelected(category.categoryID)} className='cursor-pointer' style={(category.categoryID===categorySelected ) ? styles : {cursor: "pointer"}}>{category.name}</a>
            ))
          }
        </nav>
      </div>
      {/* Product List */}
      <div className="row gy-3">
        {productsPopular.loading
          ? Array(6)
              .fill(0)
              .map((item) => (
                <div className="col-6 col-md-4 col-lg-2" key={1}>
                  <ProductSkeleton />
                </div>
              ))
          : productsPopular.data.length!==0 &&
            productsPopular.data.find(category => category.categoryID === categorySelected)?.products.map((item) => (
              <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                <Product product={item} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Popular