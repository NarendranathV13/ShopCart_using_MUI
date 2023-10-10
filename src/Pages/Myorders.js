import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';

const Myorders = () => {
    const orders = useSelector((state) => state.cart.orders);

    if (orders.length === 0) {
        return (
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <img src="https://cdn.dribbble.com/users/2059463/screenshots/4828452/polizas_gif.gif" alt="Empty orders" />
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 mt-3">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 750 }} size="large" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell  align="center"><strong className=" h4">Product List</strong></TableCell>
                                    <TableCell  align="center"><strong className=" h4">Price</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{order.product_name}</TableCell>
                                        <TableCell align="center">{order.product_price_inr}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default Myorders;
