import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const Delivery = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Chính sách vận chuyển | GreenMart";
  }, []);
  return (
    <>
      <BreadCrumbs crumbTitles={["Thông tin vận chuyển"]} />
      <div className="infopage">
        <div className="shipping-info-page">
          <h1 className="mb-4">Thông Tin Vận Chuyển</h1>
          <p>
            Chào mừng bạn đến với trang thông tin vận chuyển. Tại đây, bạn sẽ
            tìm thấy tất cả những thông tin quan trọng về việc vận chuyển sản
            phẩm của chúng tôi. Hãy cùng khám phá chi tiết hơn về các dịch vụ và
            tiện ích mà chúng tôi cung cấp dưới đây.
          </p>

          <section className="shipping-options my-4">
            <h1>Phương Thức Vận Chuyển</h1>
            <p>
              Chúng tôi cung cấp nhiều phương thức vận chuyển để đáp ứng nhu cầu
              đa dạng của khách hàng. Quý khách có thể lựa chọn giữa vận chuyển
              tiêu chuẩn, vận chuyển nhanh chóng hoặc thậm chí là dịch vụ vận
              chuyển quốc tế nếu bạn ở xa.
            </p>
            <ul className="list-group">
              <li className="list-group-item">Vận chuyển tiêu chuẩn</li>
              <li className="list-group-item">Vận chuyển nhanh chóng</li>
              <li className="list-group-item">Vận chuyển quốc tế</li>
            </ul>
          </section>

          <section className="delivery-times my-4">
            <h1>Thời Gian Giao Hàng Dự Kiến</h1>
            <p>
              Chúng tôi cam kết giao hàng nhanh chóng và đúng hẹn. Thời gian
              giao hàng có thể thay đổi tùy thuộc vào địa chỉ nhận hàng và
              phương thức vận chuyển bạn chọn. Bạn có thể kiểm tra thời gian
              giao hàng cụ thể khi hoàn tất đơn hàng của mình.
            </p>
            <p>
              Ngoài ra, chúng tôi cung cấp dịch vụ đặc biệt cho những đơn hàng
              ưu tiên, giúp bạn nhận được sản phẩm mình mong đợi trong thời gian
              ngắn nhất.
            </p>
          </section>

          <section className="tracking my-4">
            <h1>Theo dõi Đơn Hàng</h1>
            <p>
              Khi đơn hàng của bạn đã được xác nhận và vận chuyển, bạn có thể sử
              dụng số theo dõi để theo dõi tình trạng của đơn hàng qua trang web
              hoặc ứng dụng theo dõi của chúng tôi. Bạn sẽ nhận được cập nhật
              thông tin chi tiết về quá trình giao hàng của bạn.
            </p>
            <p>
              Chúng tôi hiểu rằng việc biết được nơi đơn hàng của mình đang ở có
              ý nghĩa lớn, và chúng tôi cam kết cung cấp thông tin chính xác và
              đầy đủ cho bạn.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Delivery;
