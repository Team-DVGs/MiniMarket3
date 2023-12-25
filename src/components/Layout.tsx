import React, {useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet, useLocation} from "react-router-dom"
import MailFeature from './Home/MailFeature'
import BreadCrumbs from './BreadCrumbs';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location])
  return (
    <SkeletonTheme baseColor="#f1f1f1" highlightColor="#cecece">
      <div className="page">
        <Header />
        <div className="container-md">
          <Outlet />
          <MailFeature />
        </div>
        <Footer />
      </div>
    </SkeletonTheme>
  );
}

export default Layout;