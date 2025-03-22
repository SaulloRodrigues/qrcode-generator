import React from 'react';
import NavBar from '@/components/Header/NavBar/NavBar';
import Logo from '@/components/Header/Logo/Logo';
import '@/components/Header/index.css';
import SelectLang from './SelectLang/SelectLang';
import ButtonNavMobile from './ButtonNavMobile/ButtonNavMobile';
import NavBarMobile from './NavBarMobile/NavBarMobile';

const Header: React.FC = () => {

    return (
        <header className='header'>
            <Logo />
            <NavBar />
            <SelectLang />
            <ButtonNavMobile />
            <NavBarMobile />
        </header>
    );
};

export default Header;
