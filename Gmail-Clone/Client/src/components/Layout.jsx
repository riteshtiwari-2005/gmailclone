import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom';
import SendEmail from './SendEmail';

const Layout = () => {
  return (
    <>
    <NavBar/>
    <div className="flex">
        <Sidebar/>
        <Outlet/>
        <SendEmail/>
    </div>
      
    </>
  )
}

export default Layout
