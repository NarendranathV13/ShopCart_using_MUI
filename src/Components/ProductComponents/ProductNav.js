import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const ProductNav = ({ onSearch, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // for filtering the product
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleSort = (criteria) => {
    onSort(criteria);
  };

  return (
    <AppBar position="sticky" className=' bg-dark rounded-5'>
      <Toolbar>
        <form className="d-flex mx-2">
          <InputBase
            className="form-control me-2 rounded-3"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button variant="outlined" color='success' className=' btn btn-outline-success' onClick={() => onSearch(searchTerm)}>Search</Button>
        </form>
        <div className="ms-auto mb-2 mb-lg-0">
          <Button className="btn-link nav-link"  color='success' onClick={() => handleSort('price_asc')}>
            <Typography>Price (Low to High)</Typography>
          </Button>
          <Button className="btn-link nav-link"  color='success' onClick={() => handleSort('price_desc')}>
          <Typography>Price (High to Low)</Typography>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default ProductNav;
