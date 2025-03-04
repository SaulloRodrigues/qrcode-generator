import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import { useTranslation } from "react-i18next";

const NavBar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <nav className="header__nav">
            <ul className="header__nav--list">
                <li className="header__nav--item"><Link to="/">{t("nav.home")}</Link></li>
                <li className="header__nav--item"><Link to="/about">{t("nav.about")}</Link></li>
                <li className="header__nav--item"><Link to="/contact">{t("nav.contact")}</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;