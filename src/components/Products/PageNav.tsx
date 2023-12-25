import React, {useEffect} from 'react';
import { Link, NavLink, useSearchParams } from 'react-router-dom';
import { getNewSearchParamString } from '../../utils';
import { current } from '@reduxjs/toolkit';
import { setServers } from 'dns';


interface pageNavProps {
    total: number,
    current: number,
    maxShown: number
}

const PageNav = (props : pageNavProps) : JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        // setSearchParams(prev => {
        //     prev.set('page',"1");
        //     return prev;
        // })
        // if (!searchParams.get('page') || parseInt(searchParams.get('page') || "0") < 1) setSearchParams(prev => {
        //     prev.set("page", "1");
        //     return prev;
        // })
    },[])
  return props.current > 0 ? (
    <nav className="pagenav">
      {props.current > 1 ? (
        <Link
          to={getNewSearchParamString(
            "page",
            (props.current - 1).toString(),
            searchParams.toString()
          )}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      ) : (
        <div></div>
      )}
      {Array(props.maxShown)
        .fill(0)
        .map((item, idx) => {
            const value = Math.floor(((props.current-1) / props.maxShown)) * props.maxShown + idx + 1;
            if (value>props.total) return <></>;
          return (
            <Link
              className={`${props.current === value && "selected"}`}
              to={getNewSearchParamString(
                "page",
                value.toString(),
                searchParams.toString()
              )}
            >
              {value}
            </Link>
          );
        })}
      {props.current < props.total ? (
        <Link
          to={getNewSearchParamString(
            "page",
            (props.current + 1).toString(),
            searchParams.toString()
          )}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      ) : (
        <div></div>
      )}
    </nav>
  ) : <></>;
}

export default PageNav