import React, {useEffect, useState} from 'react'
import BreadCrumbs from '../../components/BreadCrumbs';
import $ from "jquery";
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchCart } from '../../store/features/cartSlice';
import { priceFormatter } from '../../utils';

const Payment = () => {
    const cartData = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCart());
    },[])
    // Location API handling
    useEffect(() => {
        const host = "https://provinces.open-api.vn/api/";
        var callAPI = (api:string) => {
          return axios.get(api).then((response) => {
            renderData(response.data, "province");
          });
        };
        var callApiDistrict = (api:string) => {
          return axios.get(api).then((response) => {
            renderData(response.data.districts, "district");
          });
        };
        var callApiWard = (api:string) => {
          return axios.get(api).then((response) => {
            renderData(response.data.wards, "ward");
          });
        };
        callAPI("https://provinces.open-api.vn/api/?depth=1");
        var renderData = (array: {code: string, name:string}[], select:string) => {
          let row = `<option disable value="">${select==="province" ? "Tỉnh/TP" : (select==="district" ? "Quận/Huyện/Thị xã" : "Phường/Khóm/Ấp")}</option>`;
          if (array){
              array.forEach((element) => {
                row += `<option value="${element.code}">${element.name}</option>`;
              });
          }
          const item = document.querySelector("#" + select) as HTMLElement;
          if (item) {
            item.innerHTML = row;
          }
        };

        $("#province").change(() => {
          callApiDistrict(host + "p/" + $("#province").val() + "?depth=2");
          renderData([], "ward");
        });
        $("#district").change(() => {
          callApiWard(host + "d/" + $("#district").val() + "?depth=2");
        });
    }, [])
  return (
    <>
      <BreadCrumbs crumbTitles={["Giỏ hàng", "Thanh toán"]} />
      <div className="payment row">
        <div className="col-12 col-md-6 payment__shipinfo">
          <div className="payment__ship">
            <h1 className="section-header">Vận chuyển</h1>
            <p>Vui lòng chọn địa chỉ nhận hàng</p>
            <form action="" className="d-flex">
              <select name="" id="province"></select>
              <select name="" id="district">
                <option value="">Quận/Huyện/Thị xã</option>
              </select>
              <select name="" id="ward">
                <option value="">Phường/Khóm/Ấp</option>
              </select>
              <input type="text" placeholder="Nhập địa chỉ chi tiết" />
            </form>
          </div>
          <div className="payment__shiptype">
            <h1 className="section-header">Phương thức thanh toán</h1>
            <p>Thanh toán khi nhận hàng</p>
            <span>Hiện chưa hỗ trợ các hình thức thanh toán khác</span>
          </div>
          <div className="payment__shiptype mt-3">
            <h1 className="section-header">Thời gian nhận hàng</h1>
            <p>
              Thời gian giao hàng dự kiến trong 2 giờ sau khi đặt hàng. Tối đa 4
              tiếng.
            </p>
            <span>
              Thời gian dao động tuỳ thuộc vào thời điểm trong ngày cũng như mật
              độ lưu thông trên đường.
            </span>
          </div>
        </div>
        <div className="col-12 col-md-6 payment__info">
          <h1 className="section-header">Kiểm tra thông tin</h1>
          <ul>
            {cartData.info.list.map((item) => (
              <li>
                <div>
                  <img src={item.thumbnail} alt="" />
                  <span>{item.quanity}</span>
                </div>
                <p>{item.name}</p>
                <span>
                  đ{priceFormatter(item.quanity * item.discount_price)}
                </span>
              </li>
            ))}
          </ul>
          <h1 className='section-header mt-2'>Thông tin hoá đơn</h1>
          <div className='payment__info-final'>
            <span>Tiền hàng:</span>
            <span>đ{priceFormatter(cartData.info.total)}</span>
          </div>
          <div className='payment__info-final'>
            <span>Phí vận chuyển</span>
            <span>Miễn phí</span>
          </div>
          <div className='payment__info-final'>
            <span>Tổng tiền hàng:</span>
            <span>đ{priceFormatter(cartData.info.total)}</span>
          </div>
          <button className='w-100 btn-normal font-bold mt-3'>Xác nhận thanh toán</button>
        </div>
      </div>
    </>
  );
}

export default Payment