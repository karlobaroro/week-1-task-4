import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper" style={{backgroundColor:"#301E67"}}>
                    <a href="#" className="brand-logo center">Logo</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;