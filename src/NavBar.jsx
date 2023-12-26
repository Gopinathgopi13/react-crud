import React from 'react'
import { Link } from 'react-router-dom'
import NavBarStyle from "./Navbar.module.css"
function NavBar({navPath}) {
  return (
    <nav className={NavBarStyle.navbar}>
            <Link to={navPath.url1}>Home</Link>
            <Link to={navPath.url2}>All Product</Link>
            <Link to={navPath.url3}>Add Product</Link>
            {/* <Link to={navPath.url4}>Update</Link> */}
    </nav>
  )
}

export default NavBar

{/* <nav className={NavBarStyle.navbar}>
    <Link to={navPath.url1}>Home</Link>
    <Link to={navPath.url2}>All Product</Link>
   </nav> */}