import React, {useState} from "react";
import Dropdown from "../../components/Products/Dropdown";
import { Link, useSearchParams } from "react-router-dom";
import Product from "../../components/Product";
import { useAppSelector, useAppDispatch } from "../../store";
import { fetchProductsAll } from "../../store/features/Products/productListSlice";
import {
  fetchBrandCate,
  fetchBrandCateGroup,
} from "../../store/features/CategoryProducts/brandSlice";
import { useParams } from "react-router-dom";
import PageNav from "../../components/Products/PageNav";
import Skeleton from "react-loading-skeleton";
import { getNewSearchParamString } from "../../utils";
import { useDispatch } from "react-redux";
import ProductSkeleton from "../../components/ProductSkeleton";
import CategoryGroupRight from "../../components/Products/CategoryGroupRight";
import BreadCrumbs from "../../components/BreadCrumbs";

const AllProducts = () => {
  const productList = useAppSelector((state) => state.productList);
  const category = useAppSelector((state) => state.category);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [heading, setHeading] = useState<string>("Thông tin");
  const params = useParams();
  function clearFilter() {
    setSearchParams((prev) => {
      const keyword = prev.get("keyword");
      const newSearchParams = new URLSearchParams();
      newSearchParams.set("keyword", keyword || "");
      // newSearchParams.set('page', "1");
      return newSearchParams;
    });
  }
  React.useEffect(() => {
    dispatch(
      fetchProductsAll({
        query: searchParams.toString()
      }) as any
    );
    const keywordVal = searchParams.get("keyword");
    if (keywordVal === "*") {
      setHeading("Tất cả sản phẩm");
    } else if (keywordVal === "sales") {
      setHeading("Sales");
    } else {
      setHeading("Kết quả tìm kiếm: " + keywordVal);
    }
  }, [searchParams]);

  
  // Set document title
  React.useEffect(() => {
    document.title = heading + " | GreenMart";
  }, [heading]);

  return (
    <>
      <BreadCrumbs crumbTitles={[heading]} />
      <div className="products page-margin">
        {category.loading ? (
          <Skeleton height={70} className="mb-2" />
        ) : (
          <div
            className="products__header mb-3"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "/assets/img/bg/header-bg.webp"
              })`,
            }}
          >
            <h1>{heading}</h1>
          </div>
        )}

        <div className="row">
          <div className="col-12 col-md-9">
            <div className="products__options d-flex py-2 align-items-center">
              <Dropdown
                dropDownInfo={{
                  icon: <i className="fa-solid fa-sort"></i>,
                  title: "Sắp xếp",
                  queryType: "sort",
                  options: [
                    {
                      optionName: "Liên quan",
                      query: "",
                    },
                    {
                      optionName: "Bán chạy",
                      query: "banchay",
                    },
                    {
                      optionName: "Theo tên từ A-Z",
                      query: "tenaz",
                    },
                    {
                      optionName: "Theo tên từ Z-A",
                      query: "tenza",
                    },
                    {
                      optionName: "Giá thấp",
                      query: "giathap",
                    },
                    {
                      optionName: "Giá cao",
                      query: "giacao",
                    },
                  ],
                }}
              />
              <Dropdown
                dropDownInfo={{
                  icon: <i className="fa-solid fa-dollar-sign"></i>,
                  title: "Khoảng giá",
                  queryType: "range",
                  options: [
                    {
                      optionName: "Tất cả",
                      query: "",
                    },
                    {
                      optionName: "Dưới 50.000đ",
                      query: "0-50",
                    },
                    {
                      optionName: "Từ 50.000đ đến 100.000đ",
                      query: "50-100",
                    },
                    {
                      optionName: "Trên 100.000đ",
                      query: "100-00",
                    },
                  ],
                }}
              />
              {/* show all  */}
              <p
                onClick={clearFilter}
                className="ms-1 text-decoration-underline"
                style={{ cursor: "pointer" }}
              >
                Xoá bộ lọc
              </p>
            </div>
            {/* Products */}
            <div className="products__list mt-3 row gy-2">
              {productList.loading
                ? Array(8)
                    .fill(0)
                    .map((item) => (
                      <div className="col-6 col-md-4 col-lg-3">
                        <ProductSkeleton />
                      </div>
                    ))
                : productList.data?.data?.map((item) => (
                    <div className="col-6 col-md-4 col-lg-3">
                      <Product
                        product={{
                          id: item.id,
                          thumbnail: item.thumbnail,
                          name: item.name,
                          rating: item.rating,
                          discount_price: item.discount_price,
                          reg_price: item.reg_price,
                          category_name: item.category_name,
                        }}
                      />
                    </div>
                  ))}
            </div>

            {/* Pagination */}
            {
              productList.data.page && 
              <PageNav
                total={productList.data.page || 0}
                current={parseInt(searchParams.get("page") || "1")}
                maxShown={5}
              />
            }
          </div>
          {/* Categories Link Navs */}
          <div className="col-0 col-md-3">
            <CategoryGroupRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
