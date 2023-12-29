import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const Contact = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Liên hệ | GreenMart";
  }, []);
  return (
    <>
      <BreadCrumbs crumbTitles={["Thông tin liên hệ"]} />
      <div className="infopage">
        <div className="contact-info-page">
          <h1 className="mb-4">Thông Tin Liên Hệ</h1>
          <p>
            Chúng tôi luôn sẵn lòng lắng nghe và hỗ trợ bạn. Dưới đây là những
            thông tin liên hệ của chúng tôi. Đừng ngần ngại liên lạc nếu bạn có
            bất kỳ câu hỏi hoặc ý kiến đóng góp nào.
          </p>

          <section className="contact-details my-4">
            <h1>Thông Tin Liên Hệ</h1>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Địa Chỉ:</strong> 123 Đường ABC, Quận XYZ, Thành phố ABC
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> info@greenmart.com
              </li>
              <li className="list-group-item">
                <strong>Điện Thoại:</strong> +18001091
              </li>
            </ul>
          </section>

          <section className="working-hours my-4">
            <h1>Giờ Làm Việc</h1>
            <p>
              Chúng tôi có một đội ngũ nhân viên phục vụ bạn từ thứ Hai đến thứ
              Sáu, từ 8:00 sáng đến 10:00 tối. Nếu bạn cần hỗ trợ ngoài giờ làm
              việc, vui lòng để lại tin nhắn và chúng tôi sẽ liên hệ lại ngay
              khi có thể.
            </p>
          </section>

          <section className="customer-support my-4">
            <h1>Hỗ Trợ Khách Hàng</h1>
            <p>
              Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn sàng giải đáp mọi
              thắc mắc của bạn. Bạn có thể liên hệ qua email hoặc điện thoại để
              nhận được sự hỗ trợ tốt nhất.
            </p>
            <p>
              Chúng tôi cũng đánh giá cao ý kiến đóng góp của bạn để cải thiện
              dịch vụ của chúng tôi ngày càng tốt hơn.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
