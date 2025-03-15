import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import { useTranslation } from "react-i18next";
import { FaPaperPlane } from 'react-icons/fa6';

const NavBar: React.FC = () => {
    const { t } = useTranslation();
    return (
        <nav className="header__nav">
            <ul className="header__nav--list">
                <li id="home_link" className="header__nav--item"><Link to="/">{t("nav.home")}</Link></li>
                <li id="about_link" className="header__nav--item"><Link to="/about">{t("nav.about")}</Link></li>
                <li id="contact_link" className="header__nav--item"><a href={t("nav.contact.msg_link")}>{t("nav.contact.name")}<FaPaperPlane className="header__nav--icon"/></a></li>
            </ul>
        </nav>
    );
};

export default NavBar;