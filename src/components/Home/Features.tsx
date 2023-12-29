import React , {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCategoryGroup } from '../../store/features/Collection/categoryGroupSlice';
import Skeleton from 'react-loading-skeleton';


const Features = () => {
    const [index, setIndex] = useState<number>(0);
    const [numberShown, setNumberShown] = useState<number>(4);
    const categoryGroup = useAppSelector(state=>state.categoryGroup);
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchCategoryGroup());
    },[] )
    // useEffect(() => {
    //     const screenWidth = window.innerWidth;
    //     if (screenWidth < 767) setNumberShown(4);
    //     else if (screenWidth > 767 && screenWidth <= 991) setNumberShown(4);
    //     else setNumberShown(4);
    // },[window.innerWidth])

    // const handleClicked = (isRight: boolean) => {
    //   const n = categoryGroup.data.length - numberShown;
    //   if (n < 0) return;
    //   if (!isRight) {
    //     if (!index) setIndex(n);
    //     else setIndex((prev) => prev - 1);
    //   } else {
    //     if (index ===  n) setIndex(0);
    //     else setIndex((prev) => prev + 1);
    //   }
    // };
    
    const categoryColors: string[] = [
      "#F2FCE4",
      "#FFFCEB",
      "#FEEFEA",
      "#FFF3FF",
    ];
    return (
      <div className="feature section-margin">
        {/* Header and navigation */}
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="section-header">Danh mục</h1>
          <div>
            <Link className="text-decoration-none text-secondary" to="danhmuc">
              Xem tất cả
            </Link>
            {/* <button className="arrow" onClick={() => handleClicked(false)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className=" arrow top-50"
              onClick={() => handleClicked(true)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button> */}
          </div>
        </div>
        {/* Features */}
        <div className="feature__content mt-2 d-flex overflow-hidden">
          {categoryGroup.loading
            ? Array(4)
                .fill(0)
                .map((item) => (
                  <div
                    className="px-2"
                    style={{
                      width: `calc(100% / ${numberShown})`,
                      height: "500px",
                    }}
                  >
                    <Skeleton height={120} />
                  </div>
                ))
            : categoryGroup.data.map((item, idx) => (
                <Link
                  to={`danhmuc/${item.id}`}
                  className="feature__item text-decoration-none"
                  style={{
                    transform: `translateX(${-100 * index}%)`,
                    minWidth: `calc(100% / ${numberShown})`,
                  }}
                  key={idx}
                >
                  <div
                    className="feature__item-inner d-flex flex-column "
                    style={{
                      backgroundColor: `${
                        categoryColors[idx % categoryColors.length]
                      }`,
                    }}
                  >
                    <div
                      className="feature__item-inner-img border"
                      style={{ backgroundImage: `url(${item.thumbnail})`, borderColor: "#ececec" }}
                    ></div>
                    <h3 className="text-center mt-1">{item.name}</h3>
                    {/* <span className="text-center">{item.quantity} items</span> */}
                  </div>
                </Link>
              ))}
        </div>

        {/* Banner Items */}
        <div className="row mt-2 gy-3">
          {[
            {
              id: 1,
              title: "Mỗi ngày sống khoẻ với sản phẩm của chúng tôi",
              imgUrl:
                "https://boostify-nesst.myshopify.com/cdn/shop/files/banner-1.png?v=1659435495&width=768",
            },
            {
              id: 2,
              title: "Nguyên liệu cho một buổi sáng lành mạnh và dinh dưỡng",
              imgUrl:
                "https://boostify-nesst.myshopify.com/cdn/shop/files/banner-2.png?v=1659491181&width=768",
            },
            {
              id: 3,
              title: "Cung cấp các sản phẩm hữu cơ tốt nhất",
              imgUrl:
                "https://boostify-nesst.myshopify.com/cdn/shop/files/banner-3.png?v=1659491181&width=768",
            },
          ].map((item) => (
            <div
              className="banner-item col-12 col-md-6 col-lg-4 mx-auto"
              key={item.id}
            >
              <div
                className="d-flex flex-column justify-content-center p-3 rounded-3"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              >
                <div className="banner-item__info w-75">
                  <h3 className="">{item.title}</h3>
                  <button className="mt-2">
                    <Link
                      to={"/sanpham"}
                      className="text-decoration-none text-white"
                    >
                      Mua sắm ngay
                      <i className="fa-solid fa-arrow-right top-50 translate-middle"></i>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Features