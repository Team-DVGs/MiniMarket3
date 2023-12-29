import React from 'react'
import Product from './Product'
import { JsxElement } from 'typescript';
import { productHomeInterface } from '../utils';

interface dealProductsProps{
  dealproduct: productHomeInterface,
  quantity: number,
  remaining: number
}


const DealProduct = ( props :dealProductsProps ): JSX.Element => {
  return (
    <>
        <Product product={props.dealproduct} children={
            (<div className='slider mt-2'>
                <span className='top-50 start-50 translate-middle'>Còn {props.remaining} sp</span>
                <i className="fa-solid fa-fire-flame-curved"></i>
                <div className="slider-inner" style={{width: `${(props.remaining * 100 / props.quantity)}%`}}></div>
            </div>)
        }/>
    </>
  )
}

export default DealProduct