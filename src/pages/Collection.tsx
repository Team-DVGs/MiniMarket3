import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchCategoryGroup } from '../store/features/Collection/categoryGroupSlice';
import BreadCrumbs from '../components/BreadCrumbs';
import Skeleton from 'react-loading-skeleton';


const Collection = () :JSX.Element => {
    const categoryGroup = useAppSelector(state => state.categoryGroup);
    const categories = useAppSelector(state =>state.categoryGroup.data);
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchCategoryGroup());
      document.title = `Các danh mục | GreenMart`;
    }, [])
  return (
    <>
      <BreadCrumbs crumbTitles={["Danh mục"]} />
      <div className="categories page-margin">
        {/* <div onClick={() => navigate(-1)} className='d-flex align-items-center'>
          <i className="fa-solid fa-arrow-left"></i>
          <p className="ms-3 mb-0">Trở về</p>
        </div > */}
        <h1 className="section-header text-center mb-4">Phân loại hàng</h1>
        <div className="row gy-3 justify-content-center">
          {categoryGroup.loading
            ? Array(12)
                .fill(0)
                .map((item) => (
                  <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                      <Skeleton height={200} />
                  </div>
                ))
            : categories?.map((item) => (
                <div className="col-6 col-md-4 col-lg-2" key={item.id}>
                  <Link
                    to={`${item.id}`}
                    className="categories__item rounded-3 overflow-hidden"
                  >
                    <div className="categories__item-imgcontainer">
                      <div
                        className="cateories__item-img"
                        style={{ backgroundImage: `url(${item.thumbnail})` }}
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <p className='mt-2'>{item.name}</p>
                    </div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default Collection