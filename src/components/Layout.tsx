import React, {useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet, useLocation} from "react-router-dom"
import MailFeature from './Home/MailFeature'
import BreadCrumbs from './BreadCrumbs'


const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location])
  return (
    <div className="page">
        <Header />
        <div className='container-md'>
          <Outlet />
          <MailFeature />
        </div>
        <Footer />
    </div>
  )
}

export default Layout;