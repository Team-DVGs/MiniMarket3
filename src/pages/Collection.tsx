import React, {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchCategoryGroup } from '../store/features/categoryGroupSlice';

const Collection = () :JSX.Element => {
    const categoryGroup = useAppSelector(state => state.categoryGroup);
    const categories = useAppSelector(state =>state.categoryGroup.list);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchCategoryGroup());
    }, [])
  return (
    <div className="categories page-margin">
      <div onClick={() => navigate(-1)} className='d-flex align-items-center'>
        <i className="fa-solid fa-arrow-left"></i>
        <p className="ms-3 mb-0">Trở về</p>
      </div >
      <h1 className="section-header text-center mb-4">Phân loại hàng</h1>
      <div className="row gy-3">
        {categories.map((item) => (
          <div className="col-6 col-md-4 col-lg-2" key={item.id}>
            <a href="#" className="categories__item">
              <div className="categories__item-imgcontainer">
                <div className="cateories__item-img" style={{backgroundImage: `url(${item.thumbnail})`}}/>
              </div>
              <div className="d-flex flex-column justify-content-between align-items-center">
                <p>{item.name}</p>
                <p>{3} products</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection