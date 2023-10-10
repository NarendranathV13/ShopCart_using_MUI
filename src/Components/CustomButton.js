import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ variant, color, onClick, children }) => {
  return (
    <Button className=' mx-2' variant={variant} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CustomButton;
