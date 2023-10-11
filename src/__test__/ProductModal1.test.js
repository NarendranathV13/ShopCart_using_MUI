import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductModal1 from '../Components/ProductComponents/ProductModal';

test('renders modal content correctly', () => {
  const selectedProduct = {
    id: 1,
    product_name: 'Product 1',
    image_url: 'image.jpg',
    product_price_inr: 100,
    description: 'Product description'
  };
  const showModal = true;
  const handleClose = jest.fn();

  render(<ProductModal1 selectedProduct={selectedProduct} showModal={showModal} handleClose={handleClose} />);

  // Check if modal content is rendered correctly
  expect(screen.getByText(selectedProduct.product_name)).toBeInTheDocument();
  expect(screen.getByText(`Price: ${selectedProduct.product_price_inr}`)).toBeInTheDocument();
  expect(screen.getByText(`Description: ${selectedProduct.description}`)).toBeInTheDocument();
});

test('closes modal when close button is clicked', () => {
    const selectedProduct = {
        id: 1,
        product_name: 'Product 1',
        image_url: 'image.jpg',
        product_price_inr: 100,
        description: 'Product description'
    };
    const showModal = true;
    const handleClose = jest.fn();

    render(<ProductModal1 selectedProduct={selectedProduct} showModal={showModal} handleClose={handleClose} />);

    // Check if modal is visible
    expect(screen.getByTestId('modal1')).toBeVisible();

    // Click on the close button
    fireEvent.click(screen.getByText('Close'));

    // Check if handleClose is called
    expect(handleClose).toHaveBeenCalled();
});
