import React from 'react'

const MailFeature = () => {
  return (
    <>
      {/* Mail form */}
      <div className="mailform d-flex p-5 section-margin">
        <div className="mailform__info my-auto">
          <h1 className="mb-3">
            Dịch vụ vận chuyển tại nhà nhanh chóng và tiện lợi
          </h1>
          <p className="text-secondary fw-italic mb-3">
            Cần hỗ trợ? Liên hệ hotline: 18001091
          </p>
          <div className="mailform__box">
            <i className="fa-solid fa-paper-plane mx-2 texts text-secondary"></i>
            <input
              type="text"
              className="mailform__box-input ms-1"
              placeholder="Email"
            />
            <button className="mailform__box-btn">Đăng ký</button>
          </div>
        </div>
      </div>
      <div className="services mt-4 section-margin">
        <div className="row gy-2">
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-tag"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">
                  Giá tốt và ưu đãi
                </p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Với đơn hàng từ 200.000đ
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-handshake"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">Miễn phí giao vận</p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Trong bán kính tới 5km
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-shield"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">Chất lượng đảm bảo</p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Hàng luôn mới và tươi ngon mỗi ngày
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-bolt-lightning"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">Nhanh chóng</p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Phản hồi và vận chuyển siêu tốc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MailFeature