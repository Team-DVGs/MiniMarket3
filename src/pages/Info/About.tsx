import React from 'react'
import BreadCrumbs from '../../components/BreadCrumbs'

const About = () => {
  // Set document title
  React.useEffect(() => {
    document.title = "Về chúng tôi | GreenMart";
  }, []);
  return (
    <>
      <BreadCrumbs crumbTitles={["Về chúng tôi"]} />
      <div className="infopage">
        <div className="row">
          <div className="col-12 col-md-6">
            <img
              src="https://boostify-nesst.myshopify.com/cdn/shop/files/about-1.png?v=1659491703&width=700"
              alt=""
              className="w-100 rounded-3"
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column">
            <h1>Chào mừng đến với cửa hàng GreenMart</h1>
            <p>
              Chào mừng bạn đến với GreenMart - điểm đến lý tưởng cho mọi nhu
              cầu mua sắm tiện lợi và đầy đủ bách hoá. GreenMart tự hào là cửa
              hàng tiện lợi và buôn bán thực phẩm sạch, nơi mang đến cho khách
              hàng không chỉ sự thuận tiện mà còn chất lượng đảm bảo trong từng
              sản phẩm.
            </p>
            <p>
              Tại GreenMart, chúng tôi chú trọng vào việc cung cấp một loạt sản
              phẩm thực phẩm đa dạng, từ rau củ, trái cây, thực phẩm đóng gói
              đến các sản phẩm chăm sóc sức khỏe. Chúng tôi đảm bảo mỗi sản phẩm
              đều được chọn lựa kỹ lưỡng để đáp ứng nhu cầu ẩm thực và dinh
              dưỡng của mọi gia đình.
            </p>
            <p>
              Với cam kết về chất lượng, nguồn gốc và giá trị, GreenMart mong
              muốn trở thành người bạn đồng hành đáng tin cậy trong hành trình
              mua sắm hàng ngày của bạn. Quý khách có thể thoải mái chọn lựa các
              sản phẩm chất lượng, đồng thời đảm bảo rằng chúng đến từ nguồn
              cung ổn định và bền vững.
            </p>
            <p>
              Hãy đến với GreenMart, nơi mà sự tiện lợi và chất lượng gặp nhau,
              để trải nghiệm một cách mới mẻ và thuận lợi trong việc mua sắm
              hàng ngày của bạn. Cảm ơn bạn đã chọn GreenMart là đối tác mua sắm
              đáng tin cậy của mình!
            </p>
          </div>
        </div>
        {/* <div className="row justify-content-center gap-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <h1>Giới thiệu</h1>
              <p>Chúng tôi là </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4"></div>
          <div className="col-12 col-md-6 col-lg-4"></div>
        </div> */}
        <section className="py-5">
          <div className="container text-center ">
            <h1 className="text-center mb-4">Về Chúng Tôi</h1>
            <p className="text-center">
              GreenMart là một cửa hàng tiện lợi chuyên cung cấp những sản phẩm
              hữu cơ và thực phẩm sạch nhằm đảm bảo sức khỏe và bảo vệ môi
              trường. Chúng tôi tự hào với lịch sử hình thành từ sự đam mê về
              sức khỏe và phong cách sống bền vững.
            </p>
            <p className="text-center">
              <strong>Lịch Sử Hình Thành:</strong> GreenMart được thành lập năm
              2022 bởi nhóm người yêu thiên nhiên và mong muốn mang đến cho cộng
              đồng những sản phẩm chất lượng và an toàn.
            </p>
            <p className="text-center">
              <strong>Nhiệm Vụ:</strong> Chúng tôi cam kết cung cấp những sản
              phẩm chất lượng cao, không chất béo, không hoá chất độc hại, và
              đồng thời hỗ trợ cộng đồng trong việc xây dựng lối sống lành mạnh
              và bền vững.
            </p>
            <img
              src="https://cdn.broadsheet.com.au/cache/e0/45/e04564c8962462968e3e36211ffe1c5d.jpg"
              alt=""
              className="width-100"
            />
          </div>
        </section>
        <div className="container text-center">
          <h1 className="mb-4">Thông Số</h1>
          <div className="row">
            <div className="col-md-4">
              <h3>Doanh số bán</h3>
              <p className="fs-3 text-success">1tr đơn hàng +</p>
            </div>
            <div className="col-md-4">
              <h3>Lượt theo dõi</h3>
              <p className="fs-3 text-success">4,2k+</p>
            </div>
            <div className="col-md-4">
              <h3>Đánh giá</h3>
              <p className="fs-3 text-success">4.8/5 sao</p>
            </div>
          </div>
        </div>
        <div className="row py-5">
          <div className="col-12 col-md-6 d-flex flex-column">
            <h1>
              Sản phẩm luôn được đảm bảo chất lượng và sự tươi mới mỗi ngày
            </h1>
            <p>
              Chúng tôi tại GreenMart cam kết mang đến cho quý khách hàng những
              sản phẩm với chất lượng tốt nhất và sự tươi mới đặc biệt hàng
              ngày. Điều này không chỉ là cam kết của chúng tôi mà còn là tầm
              nhìn quan trọng nhằm đảm bảo mỗi đợt mua sắm của bạn là một trải
              nghiệm thực sự đặc biệt.
            </p>
            <p>
              Chất Lượng Đỉnh Cao: GreenMart luôn ưu tiên việc chọn lựa các sản
              phẩm từ những nhà cung cấp đáng tin cậy và có uy tín cao. Mỗi sản
              phẩm trên kệ hàng của chúng tôi được kiểm định kỹ lưỡng để đảm bảo
              đạt đúng các tiêu chuẩn an toàn và chất lượng cao nhất.
            </p>
            <p>
              Nguồn Gốc Rõ Ràng: Chúng tôi đặt sự minh bạch và rõ ràng về nguồn
              gốc của sản phẩm lên hàng đầu. Bằng cách này, bạn có thể hoàn toàn
              yên tâm về việc mua sắm tại GreenMart, với sự hiểu biết rõ ràng về
              nơi mà từng sản phẩm được sản xuất.
            </p>
            <p>
              Sự Tươi Mới Hàng Ngày: Đội ngũ của chúng tôi liên tục theo dõi
              tình trạng của sản phẩm trong cửa hàng, đảm bảo rằng mọi thứ đều
              tươi mới và sẵn sàng để đến tay bạn. Chúng tôi không chỉ cung cấp
              thực phẩm sạch mà còn đem lại trải nghiệm mua sắm tuyệt vời, với
              sản phẩm luôn tươi mới và dinh dưỡng.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.webp?b=1&s=170667a&w=0&k=20&c=z50mfxjka1xM_pFCVsH8yoVpduUVCFvGiKA8t0O2rOo="
              alt=""
              className="w-100 rounded-3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About