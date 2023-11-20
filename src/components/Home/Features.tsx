import React , {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';


const Features = () => {
    const [index, setIndex] = useState<number>(0);
    const [numberShown, setNumberShown] = useState<number>(0);
    useEffect(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 767) setNumberShown(4);
        else if (screenWidth > 767 && screenWidth <= 991) setNumberShown(6);
        else setNumberShown(8);
    },[window.innerWidth])

    const handleClicked = (isRight: boolean) => {
      const n = categories.length - numberShown;
      if (n < 0) return;
      if (!isRight) {
        if (!index) setIndex(n);
        else setIndex((prev) => prev - 1);
      } else {
        if (index ===  n) setIndex(0);
        else setIndex((prev) => prev + 1);
      }
    };
    const categories = [
      {
        id: 1,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 2,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 3,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
      {
        id: 4,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 5,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 6,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
      {
        id: 7,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 8,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 9,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
      {
        id: 10,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/Picture1.png?v=1661419633&width=768",
        name: "Cake and Milk",
        n: 3,
      },
      {
        id: 11,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-12.webp?v=1663814824&width=768",
        name: "Organic Kiwi",
        n: 15,
      },
      {
        id: 12,
        imgUrl:
          "https://boostify-nesst.myshopify.com/cdn/shop/collections/cat-11.png?v=1661419091&width=768",
        name: "Peach",
        n: 5,
      },
    ];
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
            <Link className='text-decoration-none text-secondary me-4' to='danhmuc'>Xem tất cả</Link>
            <button className="arrow" onClick={() => handleClicked(false)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              className=" arrow top-50"
              onClick={() => handleClicked(true)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        {/* Features */}
        <div className="feature__content mt-2 d-flex overflow-hidden">
          {categories.map((item, idx) => (
            <div
              className="feature__item"
              style={{
                transform: `translateX(${-100 * index}%)`,
                minWidth: `calc(100% / ${numberShown})`,
              }}
              key={idx}
            >
              <div
                className="feature__item-inner d-flex flex-column"
                style={{
                  backgroundColor: `${
                    categoryColors[idx % categoryColors.length]
                  }`,
                }}
              >
                <img src={item.imgUrl} alt="" />
                <h3 className="text-center">{item.name}</h3>
                <span className="text-center">{item.n} items</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Items */}
        <div className="row mt-2 gy-3">
          {[
            {
              id: 1,
              title: "Everyday Fresh & Clean with Our Products",
              imgUrl:
                "https://boostify-nesst.myshopify.com/cdn/shop/files/banner-1.png?v=1659435495&width=768",
            },
            {
              id: 2,
              title: "Make your Breakfast Healthy and Easy",
              imgUrl:
                "https://boostify-nesst.myshopify.com/cdn/shop/files/banner-2.png?v=1659491181&width=768",
            },
            {
              id: 3,
              title: "The best organic products online",
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
                    Shop now
                    <i className="fa-solid fa-arrow-right top-50 translate-middle"></i>
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