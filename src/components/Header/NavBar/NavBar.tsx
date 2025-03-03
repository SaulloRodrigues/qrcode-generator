import React from "react";
import { Link } from "react-router-dom";
import './index.css';

const NavBar: React.FC = () => {
    return (
        <nav>
            <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default NavBar;