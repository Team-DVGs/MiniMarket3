import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const Policies = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Điều khoản và chính sách | GreenMart";
  }, []);
  return (
    <>
      <BreadCrumbs crumbTitles={["Điều khoản và chính sách"]} />
      <div className="infopage">
        <div className="terms-policy-page">
          <h1 className="mb-4">Điều Khoản và Chính Sách</h1>
          <p>
            Chào mừng bạn đến với trang Điều Khoản và Chính Sách của chúng tôi.
            Đây là nơi chúng tôi chia sẻ những quy định và điều khoản quan trọng
            về việc sử dụng trang web và các dịch vụ của chúng tôi. Hãy đọc kỹ
            những điều khoản sau để đảm bảo bạn hiểu rõ và tuân theo chúng khi
            sử dụng trang web của chúng tôi.
          </p>

          <section className="terms-of-service my-4">
            <h1>Điều Khoản Dịch Vụ</h1>
            <p>
              Bằng cách sử dụng trang web của chúng tôi, bạn đồng ý tuân thủ
              theo các điều khoản và điều kiện mà chúng tôi đề ra. Điều này bao
              gồm quy định về việc sử dụng, quản lý tài khoản, và các điều khoản
              khác liên quan đến trải nghiệm của bạn trên trang web.
            </p>
          </section>

          <section className="privacy-policy my-4">
            <h1>Chính Sách Bảo Mật</h1>
            <p>
              Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn và duy trì một
              môi trường trực tuyến an toàn. Chính sách Bảo Mật của chúng tôi mô
              tả cách chúng tôi thu thập, lưu trữ và sử dụng thông tin cá nhân
              của bạn. Hãy đọc kỹ để hiểu rõ cách chúng tôi bảo vệ quyền riêng
              tư của bạn.
            </p>
          </section>

          <section className="refund-policy my-4">
            <h1>Chính Sách Hoàn Tiền</h1>
            <p>
              Chúng tôi đảm bảo rằng quy trình đổi trả và hoàn tiền là công bằng
              và minh bạch. Chính Sách Hoàn Tiền của chúng tôi mô tả các điều
              kiện và quy định liên quan đến việc đổi trả sản phẩm và yêu cầu
              hoàn tiền.
            </p>
          </section>

          <section className="cookie-policy my-4">
            <h1>Chính Sách Cookie</h1>
            <p>
              Chúng tôi sử dụng cookie để cải thiện trải nghiệm của bạn trên
              trang web. Chính Sách Cookie giải thích cách chúng tôi sử dụng
              cookie và quyền lực của bạn về việc quản lý cookie trên trình
              duyệt của mình.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Policies;
