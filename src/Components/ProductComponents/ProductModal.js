import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import React from 'react';

const ProductModal1 = ({ selectedProduct,showModal, handleClose }) => {
    return (
        <Dialog data-testid="modal1" open={showModal} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{selectedProduct && selectedProduct.product_name}</DialogTitle>
        <DialogContent>
            {selectedProduct && (
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <img
                                src={selectedProduct.image_url}
                                className="img-fluid mb-3 rounded-5 "
                                alt="Product"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body1">
                                Price: {selectedProduct.product_price_inr}
                            </Typography>
                            <Typography variant="body1">
                                Description: {selectedProduct.description}
                            </Typography>
                        </Grid>
                    </Grid>
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
