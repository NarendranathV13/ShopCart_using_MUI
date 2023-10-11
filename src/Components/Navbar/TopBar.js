// NavigationBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import '../Navbar/style.css'

const TopBar = ({ cartCount, Username, handleLogout }) => {
  return (
    <AppBar position="sticky" className=' bg-dark'>
      <Toolbar>
        <NavLink className=' mx-3' to="/Products" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <i className="fa-solid fa-store"></i>
          </IconButton>
          Products
        </NavLink>

        <NavLink  className=' mx-3' to="/Cart" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <Badge badgeContent={cartCount}  color="success">
              <i className="fa-solid fa-cart-shopping"></i>
            </Badge>
          </IconButton>
          Cart
        </NavLink>

        <NavLink  className=' mx-3' to="/Myorders" style={{ textDecoration: 'none', color: 'inherit' }}>
          <IconButton color="inherit">
            <i className="fa-solid fa-gift"></i>
          </IconButton>
          My Orders
        </NavLink>

        <div style={{ marginLeft: 'auto' }}>
          <IconButton
            color="inherit"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            onClick={handleLogout}
          >
            {Username}
            <i class="fa-solid fa-arrow-right-to-bracket mx-2 "></i>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
