import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

interface breadcrumbsProps {
    crumbTitles: string[],
}
const BreadCrumbs = (props: breadcrumbsProps): JSX.Element=> {
    const location = useLocation();
    let currentLink = '';
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb!=='')
    .map((crumb, idx) => {
        currentLink += `/${crumb}`;
        return props.crumbTitles[idx] ? (
          <span key={idx}>
            <i className="fa-solid fa-chevron-left"></i>
            <Link to={currentLink} className={`${currentLink === location.pathname && "current-selected"}`}>
              {props.crumbTitles[idx]?.charAt(0).toUpperCase() +
                props.crumbTitles[idx]?.slice(1)}
            </Link>
          </span>
        ) : <></>;
    })
  return (
    <div className='breadcrumbs'>
      <Link to="/">
        <i className="fa-solid fa-house"></i>
        Trang chủ
      </Link>
      {crumbs}
    </div>
  );
}

export default BreadCrumbs