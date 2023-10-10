import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Customtoast = ({ show, message, color, onClose }) => {
  const [open, setOpen] = useState(show);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    onClose();
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={1000} // Auto-hide after 3 seconds 
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={color} // Adjust severity based on color
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Customtoast;
