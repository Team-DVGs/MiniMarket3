import React, { useEffect, useState } from 'react'
import DealProduct from '../DealProduct';
import ProductSlider from '../ProductSlider';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchSales } from '../../store/features/Sales/salesSlice';
import { fetchProductSales } from '../../store/features/Sales/productsSalesSlice';
import { Link } from 'react-router-dom';
import ProductSkeleton from '../ProductSkeleton';
import  Skeleton  from 'react-loading-skeleton';



const DayDeals = () => {
  const loading = useAppSelector((state) => state.productsSales.loading);
  const sales = useAppSelector((state) => state.sales);
  const productsSales = useAppSelector((state) => state.productsSales);
  const dispatch = useAppDispatch();
  // New
  const [noSales, setNoSales] = useState<boolean>(false);
  // 
  const [salesTime, setSalesTime] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  }>({ days: "0", hours: "0", minutes: "0", seconds: "0" });
  useEffect(() => {
    dispatch(fetchSales());
    dispatch(fetchProductSales());
  }, []);
  useEffect(() => {
    var endDate = new Date(sales.data?.end_time).getTime();
    if (sales.data?.end_time){
      // New
      var now = new Date().getTime();
      if (now > endDate!) {
        setNoSales(true);
        return;
      }
      setNoSales(false);
      //
    }
    var x = setInterval(() => {
      var now = new Date().getTime();
      const distance = endDate! - now;
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
  }, [sales.loading]);

  return true ? (
    <div className="deals section-margin overflow-hidden">
      <div className="deals__header mb-2 d-flex align-items-center justify-content-between">
        <div className="deals__header-title mb-2">
          <h2 className="">{sales.data.name || <Skeleton width={200} />}</h2>
          <span>{sales.data.description || <Skeleton width={300} />}</span>
        </div>
        <div className="deals__header-time mb-2 d-flex align-items-center">
          {!sales.loading && (
            <>
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
            </>
          )}
        </div>
        <Link to="/search?keyword=sales" className="deals__header-all mb-1">
          Xem tất cả ưu đãi
        </Link>
      </div>
      <div className="deals__list-container">
        <ProductSlider
          id={1}
          length={productsSales.data.length}
          numberShown={[2, 3, 4]}
          productsJSX={
            <>
              {loading
                ? Array(4)
                    .fill(0)
                    .map((el) => (
                      <div className="px-1">
                        <ProductSkeleton />
                      </div>
                    ))
                : productsSales.data.map((productItem) => (
                    <div className="px-1" key={productItem.id}>
                      <DealProduct
                        dealproduct={productItem}
                        quantity={productItem.quantity}
                        remaining={
                          productItem?.remaining || productItem.quantity
                        }
                      />
                    </div>
                  ))}
            </>
          }
          sliding={false}
          loading={productsSales.loading}
        />
        {/* <ul className="deals__list list-unstyled">
        </ul> */}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default DayDeals