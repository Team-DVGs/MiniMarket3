import React from 'react'

const MailFeature = () => {
  return (
    <>
      {/* Mail form */}
      <div className="mailform d-flex p-5 section-margin">
        <div className="mailform__info my-auto">
          <h1 className="mb-3">
            Stay home and get your daily needs from our shop
          </h1>
          <p className="text-secondary fw-italic mb-3">
            Need help? Contact hotline: 18001091
          </p>
          <div className="mailform__box">
            <i className="fa-solid fa-paper-plane mx-2 texts text-secondary"></i>
            <input
              type="text"
              className="mailform__box-input ms-1"
              placeholder="Email"
            />
            <button className="mailform__box-btn">Subscribe</button>
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
                  Best prices and offers
                </p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Order $50 or more
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-handshake"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">Free Delivery</p>
                <p className="m-0 text-secondary fw-italic text-center">
                  24/7 amazing services
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-shield"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">Quality Secure</p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Ensure the best products
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 align-self-stretch">
            <div className="services__item h-100 px-3 py-4 d-flex align-items-center justify-content-center">
              <i className="fa-solid fa-bolt-lightning"></i>
              <div className="my-auto">
                <p className="fw-bold m-0 text-center">Fast forward</p>
                <p className="m-0 text-secondary fw-italic text-center">
                  Quick response and delivery
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