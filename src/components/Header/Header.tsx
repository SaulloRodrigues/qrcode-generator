import React from 'react';
import NavBar from './NavBar/NavBar';

const Header: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
    return (
        <header {...props} >
            <NavBar />
        </header>
    );
};

export default Header;
