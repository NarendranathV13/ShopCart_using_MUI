import React from "react";
import { NavLink } from 'react-router-dom';
import Badge from '@mui/material/Badge';
const SideBar = ({ cartCount, Username }) => {
    return(
        <div className="sidebar pe-4 pb-3">
                <nav className="navbar  navbar-dark">
                    <a  className="navbar-brand mx-4 mb-3">
                        <h3 className="text-warning"><i class="fa-brands fa-shopify me-2"></i>Shop Cart</h3>
                    </a>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3 text-light ">
                            <span>Welcome</span>
                            <h5 className="text-light mb-0">{Username}</h5>
                        </div>
                    </div>
                    <div className="navbar-nav m-0 w-100">
                        <NavLink to="/" className="nav-item m-0 nav-link ">
                            <i className="fa fa-tachometer-alt me-2"></i>Dashboard
                        </NavLink>
                        <NavLink to="/Products" className="nav-item m-0 nav-link ">
                            <i class="fa-solid fa-store me-2"></i>Products
                        </NavLink>
                        <NavLink to="/Cart" className="nav-item m-0 nav-link ">
                            <i class="fa-solid fa-cart-shopping me-2"></i><span className=' mx-3'>Cart</span>  <Badge badgeContent={cartCount} color="success"></Badge>

                        </NavLink>
                        <NavLink to="/Myorders" className="nav-item m-0 nav-link ">
                            <i class="fa-solid fa-gift me-2"></i>Myorders
                        </NavLink>
                    </div>
                </nav>
            </div>
    )
}
export default SideBar