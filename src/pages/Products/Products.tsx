import React, { useEffect } from 'react'
import Dropdown from '../../components/Products/Dropdown';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import Product from '../../components/Product';
import { useAppSelector, useAppDispatch } from '../../store';
import { fetchCategoryGroupProducts } from '../../store/features/Products/productListSlice';
import { fetchCategory } from '../../store/features/CategoryProducts/categorySlice';
import { fetchBrandCate, fetchBrandCateGroup } from '../../store/features/CategoryProducts/brandSlice';
import { useParams } from 'react-router-dom';
import PageNav from '../../components/Products/PageNav';
import Skeleton from 'react-loading-skeleton';
import { getNewSearchParamString } from '../../utils';
import { useDispatch } from 'react-redux';
import ProductSkeleton from '../../components/ProductSkeleton';
import CategoryGroupRight from '../../components/Products/CategoryGroupRight';
import BreadCrumbs from '../../components/BreadCrumbs';
const Products = () => {
  const productList = useAppSelector((state) => state.productList);
  const category = useAppSelector((state) => state.category);
  const brand = useAppSelector((state) => state.brand);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  function clearFilter() {
    setSearchParams({ page: "1" });
  }
  useEffect(() => {
    dispatch(fetchCategory(params.id || "0") as any);
  },[params.id])
  React.useEffect(() => {
    dispatch(
      fetchCategoryGroupProducts({
        id: parseInt(params.id || ""),
        query: searchParams.toString(),
      }) as any
    );
  }, [searchParams]);

  React.useEffect(() => {
    setSearchParams((prev) => {
      prev.delete("brand");
      return prev;
    });
    if (!searchParams.get("categoryId")) {
      dispatch(fetchBrandCateGroup(parseInt(params.id || "")) as any);
    } else {
      dispatch(fetchBrandCate(parseInt(params.id || "")) as any);
    }
  }, [searchParams.get("categoryId"), params.id]);

  // Set document title
  React.useEffect(() => {
    document.title = `Danh mục: ${
      category.data.categoryGroupName || "SP"
    } | GreenMart`;
  }, [category.data.categoryGroupName]);
  return (
    <>
      <BreadCrumbs
        crumbTitles={[
          "Danh mục",
          category.data.categoryGroupName || "Thông tin",
        ]}
      />
      <div className="products page-margin">
        {/* Header */}
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
            <h1>{category.data.categoryGroupName}</h1>
          </div>
        )}
        {/* Products and Sidebar */}
        <div className="row">
          <div className="col-12 col-lg-9">
            {category.loading ? (
              <Skeleton height={80} />
            ) : (
              <div className="products__categories">
                {category.data.list?.map((item) => (
                  <Link
                    className={`${
                      (searchParams.get("categoryId") || "") ===
                        item.id.toString() && "selected"
                    }`}
                    to={getNewSearchParamString(
                      "categoryId",
                      item.id.toString(),
                      searchParams.toString()
                    )}
                  >
                    <div
                      style={{
                        backgroundImage: `url(${item.thumbnail})`,
                      }}
                    ></div>
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
            )}
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
              {!brand.loading && (
                <Dropdown
                  dropDownInfo={{
                    icon: <i className="fa-solid fa-copyright"></i>,
                    title: "Thương hiệu",
                    queryType: "brand",
                    options: [
                      {
                        optionName: "Tất cả",
                        query: "",
                      },
                      ...brand.data?.map((brand) => ({
                        optionName: brand.name,
                        query: brand.id.toString(),
                      })),
                    ],
                  }}
                />
              )}

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
            {productList.data.page && (
              <PageNav
                total={productList.data.page || 0}
                current={parseInt(searchParams.get("page") || "1")}
                maxShown={5}
              />
            )}
          </div>
          {/* Categories Link Navs */}
          <div className="col-12 col-lg-3">
            <CategoryGroupRight />
          </div>
        </div>
      </div>
    </>
  );
}

export default Products