import React from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const Recruitment = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Tuyển dụng | GreenMart";
  }, []);
  return (
    <>
      <BreadCrumbs crumbTitles={["Tuyển dụng"]} />
      <div className="infopage">
        <div className="careers-page">
          <h1 className="mb-4">Tuyển Dụng</h1>
          <p>
            Chúng tôi luôn chào đón những tài năng mới và đam mê gia nhập đội
            ngũ của mình. Nếu bạn muốn trở thành một phần của chúng tôi và đóng
            góp vào sự phát triển, hãy xem các cơ hội tuyển dụng hiện tại của
            chúng tôi dưới đây.
          </p>

          <section className="current-openings my-4">
            <h1>Các Vị Trí Hiện Đang Mở</h1>
            <p>
              Tìm hiểu về các vị trí tuyển dụng hiện có tại chúng tôi và ứng
              tuyển để tham gia vào nhóm chuyên nghiệp và năng động của chúng
              tôi.
            </p>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Nhân Viên Bán Hàng:</strong> Chúng tôi đang tìm kiếm
                những người đam mê và năng động để gia nhập đội ngũ bán hàng của
                chúng tôi.
              </li>
              <li className="list-group-item">
                <strong>Kỹ Sư Phần Mềm:</strong> Nếu bạn có kỹ năng lập trình
                xuất sắc, hãy xem xét ứng tuyển vào vị trí kỹ sư phần mềm của
                chúng tôi.
              </li>
              {/* Thêm các vị trí khác tại đây */}
            </ul>
          </section>

          <section className="how-to-apply my-4">
            <h1>Cách Ứng Tuyển</h1>
            <p>
              Để ứng tuyển, hãy gửi hồ sơ cá nhân và thư xin việc của bạn đến
              địa chỉ email: careers@greenmart.com. Chúng tôi sẽ liên hệ lại với
              bạn nếu hồ sơ của bạn phù hợp với các vị trí hiện có hoặc sẽ giữ
              lại hồ sơ của bạn để xem xét cho các cơ hội tương lai.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Recruitment;
