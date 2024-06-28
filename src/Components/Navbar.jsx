import React from "react";
import { IoSearchOutline } from 'react-icons/io5';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';


export default function NavbarComp() {
    const styled = {
        navbar: {
            height: "50px",
            backgroundColor: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        innerNavbar: {
            margin: '0 auto',
            padding: '0 20px',
            width: '100%', 
            maxWidth: '1200px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box',
            height: "50px",
        },
        headingContainer: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        linkContainer: {
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft: 'auto', 
        },
        navLink: {
            marginLeft: '50px', 
            textDecoration: 'none',
            color: '#333',
            transition: 'color 0.3s',
        },
        iconContainer: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto', // Push icons to the right on larger screens
        },
        icon: {
            marginLeft: '20px',
            color: '#333',
            cursor: 'pointer',
            transition: 'color 0.3s',
        },
         navbar: {
            '@media (maxWidth: 320px)': {
              width: '100%',
               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Make navbar full width on screens smaller than 320px
            },
          },
          linkContainer : {
            '@media (maxWidth: 320px)': {
              flexWrap: 'nowrap', // Prevent wrapping on smaller screens
            },
          },
    //     cartCount:{
    //         marginLeft:"10px",
    //     }
     };

    return (
        <div style={styled.navbar}>
            <div style={styled.innerNavbar}>
                <div style={styled.headingContainer}>Flatlogic</div>
                <div style={styled.linkContainer}>
                    <a href="/" style={styled.navLink}>Home</a>
                    <a href="/pages" style={styled.navLink}>Pages</a>
                    <a href="/services" style={styled.navLink}>Shops</a>
                    <a href="/contact" style={styled.navLink}>Blogs</a>
                </div>
                <div style={styled.iconContainer}>
                   <span style={styled.icon}><IoSearchOutline/></span>
                   <span  style={styled.icon}><FaUserCircle/></span>
                   <div style={styled.icon}><FaShoppingCart/><span style={styled.cartCount}>3</span></div>
                </div>
            </div>
        </div>
    );
}
