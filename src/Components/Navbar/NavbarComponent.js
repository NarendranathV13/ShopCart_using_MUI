import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Navbar/style.css'
import TopBar from './TopBar';
import SideBar from './SideBar';
import Swal from 'sweetalert2';

const NavbarComponent = React.memo(({ auth }) => {
    const cartCount = useSelector((state) => state.cart.cartCount);
    const savedData = JSON.parse(localStorage.getItem("formData"));
    const Username = savedData.username;
    const navigate = useNavigate();

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will be logged out',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, logout',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem("isAuth", "false");
                console.log("logout", localStorage.getItem("isAuth"));
                navigate("/Login");
                auth("false");
            }
        });
    };

    return (
        <>
            {/* Navbar starts */}
            <TopBar cartCount={cartCount} Username={Username} handleLogout={handleLogout} />
            {/* sidebar starts */}
           <SideBar cartCount={cartCount} Username={Username} />
        </>
    )
});

export default NavbarComponent;
