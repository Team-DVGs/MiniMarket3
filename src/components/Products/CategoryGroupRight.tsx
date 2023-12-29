import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchCategoryGroupRand } from '../../store/features/CategoryProducts/categoryGroupRandSlice';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const CategoryGroupRight = () => {
  const categoryGroupRand = useAppSelector(state => state.categoryGroupRand);
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(fetchCategoryGroupRand(parseInt(params.id || "0")) as any);
  }, [])
  return (
    <div className="products__links box-shadow-style">
      <h1>Các danh mục khác</h1>
      <div className="seperate"></div>
      <ul>
        {categoryGroupRand.loading ? 
        Array(3).fill(0).map(item => <li><Skeleton height={60} /></li>)
        : 
        categoryGroupRand.data.map(item => 
          <li>
            <Link to={`/danhmuc/${item.id}?page=1`}>
              <div
                style={{
                  backgroundImage:
                    `url(${item.thumbnail})`,
                }}
              ></div>
              <span>{item.name}</span>
            </Link>
          </li>
          )
        }
      </ul>
    </div>
  );
}

export default CategoryGroupRight;