import Skeleton from "@mui/material/Skeleton";
import Box from '@mui/material/Box';
import React from "react";

const Loader = () => {
    return (
        <>
            <div className=" row mt-3">
                <div className=" col-lg-4">
                    <Skeleton className=" rounded-5" variant="rectangular" animation='wave' width={300} height={400} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton className=" rounded-5" animation='wave' height={40} width="60%" />
                        <Skeleton className=" rounded-5" animation='wave' height={40} width="50%" />
                    </Box>
                </div>
                <div className=" col-lg-4">
                    <Skeleton className=" rounded-5" variant="rectangular" animation='wave' width={300} height={400} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton className=" rounded-5" animation='wave' height={40} width="60%" />
                        <Skeleton className=" rounded-5" animation='wave' height={40} width="50%" />
                    </Box>
                </div>
                <div className=" col-lg-4">
                    <Skeleton className=" rounded-5" variant="rectangular" animation='wave' width={300} height={400} />
                    <Box sx={{ pt: 0.5 }}>
                        <Skeleton className=" rounded-5" animation='wave' height={40} width="60%" />
                        <Skeleton className=" rounded-5" animation='wave' height={40} width="50%" />
                    </Box>
                </div>
            </div>
            <div className=" row my-3">
                <Skeleton className=" rounded-5" variant="rectangular" width="100%" height={100} />
            </div>
            <div className=" row my-3">
                <Skeleton className=" rounded-5" variant="rectangular" width="100%" height={100} />
            </div>
        </>

    )
}
export default Loader