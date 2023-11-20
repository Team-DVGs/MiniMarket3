import React from 'react'
import Product from './Product'
import { JsxElement } from 'typescript';

interface dealProductProps {
  dealProduct: {
    id: number;
    imgUrl: string;
    name: string;
    rating: number;
    price: number;
    oldPrice: number;
  },
}

const DealProduct = (props :dealProductProps ): JSX.Element => {
  return (
    <>
        <Product product={props.dealProduct} children={
            (<div className='slider mt-2'>
                <span className='top-50 start-50 translate-middle'>Đã bán 173</span>
                <i className="fa-solid fa-fire-flame-curved"></i>
                <div className="slider-inner" style={{width: '70%'}}></div>
            </div>)
        }/>
    </>
  )
}

export default DealProduct