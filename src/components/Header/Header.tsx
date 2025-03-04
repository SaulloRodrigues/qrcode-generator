import React from 'react';
import NavBar from '@/components/Header/NavBar/NavBar';
import Logo from '@/components/Header/Logo/Logo';
import '@/components/Header/index.css';
import SelectLang from './SelectLang/SelectLang';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <Logo />
            <NavBar />
            <SelectLang/>
        </header>
    );
};

export default Header;
