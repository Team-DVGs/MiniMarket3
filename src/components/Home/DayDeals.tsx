import React, { useEffect, useState } from 'react'
import DealProduct from '../DealProduct';
import ProductSlider from '../ProductSlider';
import { productProps } from "../Product";
import { useAppSelector } from '../../store';
interface daydealsProps {
  daydeals: productProps[];
}

const DayDeals = (props: daydealsProps) => {
  const loading = useAppSelector(state => state.productList.loading);
  const [salesTime, setSalesTime] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "0", hours: "0", minutes: "0", seconds: "0" });
  useEffect(() => {
    var endDate = new Date("Dec 30, 2023 00:00:00").getTime();
    var x = setInterval(() => {
      var now = new Date().getTime();
      const distance = endDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setSalesTime({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);
    return () => {
      clearInterval(x);
    };
  }, []);

  return (
    <div className="deals section-margin overflow-hidden">
      <div className="deals__header mb-2 d-flex align-items-center justify-content-between">
        <div className="deals__header-title mb-2">
          <h2 className="">Săn sale đón lễ</h2>
          <span>Hàng ngàn sản phẩm giảm giá diễn ra từ ngày 30/4 đến 30/6</span>
        </div>
        <div className="deals__header-time mb-2 d-flex align-items-center">
          <span>Kết thúc sau</span>
          <div className="deals__header-time-box mx-1">
            <p className="text-center">Ngày</p>
            <h4 className="text-center">{salesTime.days}</h4>
          </div>
          <div className="deals__header-time-box mx-1">
            <p className="text-center">Giờ</p>
            <h4 className="text-center">{salesTime.hours}</h4>
          </div>
          <div className="deals__header-time-box mx-1">
            <p className="text-center">Phút</p>
            <h4 className="text-center">{salesTime.minutes}</h4>
          </div>
          <div className="deals__header-time-box mx-2">
            <p className="text-center">Giây</p>
            <h4 className="text-center">{salesTime.seconds}</h4>
          </div>
        </div>
        <a className="deals__header-all mb-1">Xem tất cả ưu đãi</a>
      </div>
      <div className="deals__list-container">
        <ProductSlider
          length={props.daydeals.length}
          numberShown={[2, 3, 4]}
          productsJSX={
            <>
              {props.daydeals.map((product) => (
                <div className="px-1" key={product.id}>
                  <DealProduct product={product} />
                </div>
              ))}
            </>
          }
          sliding={true}
          loading={loading}
        />
        {/* <ul className="deals__list list-unstyled">
        </ul> */}
      </div>
    </div>
  );
};

export default DayDeals