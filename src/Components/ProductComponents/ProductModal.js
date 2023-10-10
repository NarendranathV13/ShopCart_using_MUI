import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';

const ProductModal1 = ({ selectedProduct, showModal, handleClose }) => {
    return (
        <Dialog open={showModal} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogTitle>{selectedProduct && selectedProduct.product_name}</DialogTitle>
            <DialogContent>
                {selectedProduct && (
                    <>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6 mt-2">
                                    <img
                                        src={selectedProduct.image_url}
                                        className="img-fluid mb-3 rounded-5 "
                                        alt="Product"
                                    />
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <Typography variant="body1">
                                        <strong>Price:</strong> {selectedProduct.product_price_inr}
                                    </Typography>
                                    <Typography variant="body1">
                                        <strong>Description:</strong> {selectedProduct.description}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductModal1;
