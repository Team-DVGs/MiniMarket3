import React, {useEffect,  useRef} from 'react'
import BreadCrumbs from '../../components/BreadCrumbs';
import $ from "jquery";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchCart } from '../../store/features/Cart/cartSlice';
import { priceFormatter } from '../../utils';
import { addNewOrder } from '../../store/features/Orders/orderSlice';

const Payment = () => {
  const cartData = useAppSelector((state) => state.cart);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const provinceRef = useRef<HTMLSelectElement>(null);
  const districtRef = useRef<HTMLSelectElement>(null);
  const wardRef = useRef<HTMLSelectElement>(null);
  const detailRef = useRef<HTMLInputElement>(null);
  const noteRef = useRef<HTMLTextAreaElement>(null);

  function handleOrder() {
    if (
      provinceRef.current?.value &&
      districtRef.current?.value &&
      detailRef.current?.value
    ) {
      // const provice = provinceRef.current?.value.toString().split("-")[1];
      // const district = districtRef.current?.value.toString().split("-")[1];
      const provice = provinceRef.current?.value.toString();
      const district = districtRef.current?.value.toString();
      // const ward = wardRef.current?.value.toString().split("-")[1];
      const detail = detailRef.current?.value;
      const address = `${detail}, ${district}, ${provice}`;
      dispatch(
        addNewOrder({
          userId: user.data.id,
          address,
          note: noteRef.current?.value || "",
          payment_method: "COD",
        })
      ).then((res) => {
        if (res.payload) {
          alert("Đặt hàng thành công!");
          // console.log(res.payload);
          dispatch(fetchCart(user.data.cartId.toString()));
          navigate("/taikhoan/donhang/" + res.payload?.id);
        } else {
          alert("Đặt hàng không thành công! Vui lòng thử lại sau.");
        }
      });
    } else {
      alert("Vui lòng nhập đủ thông tin!");
    }
  }


  // function getString(str: string, isLeft: boolean) {
  //   if (isLeft) {
  //     return str.slice(0, str.indexOf("&"));
  //   }
  //   return str.slice(str.indexOf("&"));
  // }
  // Location API handling
  // useEffect(() => {
  //   const host = "https://provinces.open-api.vn/api/";
  //   var callAPI = (api: string) => {
  //     return axios.get(api).then((response) => {
  //       renderData(response.data, "province");
  //     });
  //   };
  //   var callApiDistrict = (api: string) => {
  //     return axios.get(api).then((response) => {
  //       renderData(response.data.districts, "district");
  //     });
  //   };
  //   var callApiWard = (api: string) => {
  //     return axios.get(api).then((response) => {
  //       renderData(response.data.wards, "ward");
  //     });
  //   };
  //   callAPI("https://provinces.open-api.vn/api/?depth=1");
  //   var renderData = (
  //     array: { code: string; name: string }[],
  //     select: string
  //   ) => {
  //     let row = `<option disable value="">${
  //       select === "province"
  //         ? "Tỉnh/TP"
  //         : select === "district"
  //         ? "Quận/Huyện/Thị xã"
  //         : "Phường/Khóm/Ấp"
  //     }</option>`;
  //     if (array) {
  //       array.forEach((element) => {
  //         row += `<option value="${element.code}-${element.name}" name="${element.name}">${element.name}</option>`;
  //       });
  //     }
  //     const item = document.querySelector("#" + select) as HTMLElement;
  //     if (item) {
  //       item.innerHTML = row;
  //     }
  //   };

  //   $("#province").change(() => {
  //     callApiDistrict(
  //       host +
  //         "p/" +
  //         $("#province").val()?.toString().split("-")[0] +
  //         "?depth=2"
  //     );
  //     renderData([], "ward");
  //   });
  //   $("#district").change(() => {
  //     callApiWard(
  //       host +
  //         "d/" +
  //         $("#district").val()?.toString().split("-")[0] +
  //         "?depth=2"
  //     );
  //   });
  // }, []);
  // Set document title
  React.useEffect(() => {
    document.title = "Đặt hàng | GreenMart";
  }, []);

  return (
    <>
      <BreadCrumbs crumbTitles={["Giỏ hàng", "Thanh toán"]} />
      <div className="payment row">
        <div className="col-12 col-md-6 payment__shipinfo">
          <div className="payment__ship">
            <h1 className="section-header">Vận chuyển</h1>
            <p>Vui lòng chọn địa chỉ nhận hàng</p>
            <form action="" className="d-flex">
            <select name="" id="province" ref={provinceRef} value="AAA" disabled>
              <option value="TP HCM">{"TP HCM (chưa hỗ trợ khu vực khác)"}</option>
            </select>
            <select name="" id="district" ref={districtRef}>
              <option value="">Quận/Huyện</option>
              <option value="Quận 1">Quận 1</option>
              <option value="Quận 2">Quận 2</option>
              <option value="Quận 3">Quận 3</option>
              <option value="Quận 4">Quận 4</option>
              <option value="Quận 5">Quận 5</option>
              <option value="Quận 6">Quận 6</option>
              <option value="Quận 7">Quận 7</option>
              <option value="Quận 8">Quận 8</option>
              <option value="Quận 9">Quận 9</option>
              <option value="Quận 10">Quận 10</option>
              <option value="Quận 11">Quận 11</option>
              <option value="Quận 12">Quận 12</option>
              <option value="Quận Bình Thạnh">Quận Bình Thạnh</option>
              <option value="Quận Gò Vấp">Quận Gò Vấp</option>
              <option value="Quận Phú Nhuận">Quận Phú Nhuận</option>
              <option value="Quận Tân Bình">Quận Tân Bình</option>
              <option value="Quận Tân Phú">Quận Tân Phú</option>
              <option value="Quận Thủ Đức">Quận Thủ Đức</option>
              <option value="Quận Bình Tân">Quận Bình Tân</option>
              <option value="Huyện Bình Chánh">Huyện Bình Chánh</option>
              <option value="Huyện Củ Chi">Huyện Củ Chi</option>
              <option value="Huyện Cần Giờ">Huyện Cần Giờ</option>
              <option value="Huyện Hóc Môn">Huyện Hóc Môn</option>
              <option value="Huyện Nhà Bè">Huyện Nhà Bè</option>              
            </select>

              {/* <select name="" id="ward" ref={wardRef}>
                <option value="">Phường/Khóm/Ấp</option>
              </select> */}
              <input
                ref={detailRef}
                type="text"
                placeholder="Nhập địa chỉ chi tiết"
              />
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
            {cartData.data.list.map((item) => (
              <li>
                <div>
                  <img src={item.thumbnail} alt="" />
                  <span>{item.quantity}</span>
                </div>
                <p className="m-0">{item.name}</p>
                <span>
                  đ{priceFormatter(item.quantity * item.discount_price)}
                </span>
              </li>
            ))}
          </ul>
          <h1 className="section-header mt-2">Thông tin hoá đơn</h1>
          <div className="message">
            <p>Tin nhắn cho người bán</p>
            <textarea name="" id="" ref={noteRef}></textarea>
          </div>
          <div className="payment__info-final">
            <span>Tiền hàng:</span>
            <span>đ{priceFormatter(cartData.data.total)}</span>
          </div>
          <div className="payment__info-final">
            <span>Phí vận chuyển</span>
            <span>Miễn phí</span>
          </div>
          <div className="payment__info-final">
            <span>Tổng tiền hàng:</span>
            <span>đ{priceFormatter(cartData.data.total)}</span>
          </div>
          <button
            onClick={handleOrder}
            className="w-100 btn-normal font-bold mt-3"
          >
            Xác nhận đặt hàng
          </button>
        </div>
      </div>
    </>
  );
}

export default Payment