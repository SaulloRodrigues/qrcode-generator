import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useMobile } from "@/contexts/MobileContext";
import SelectLang from "../SelectLang/SelectLang";

const NavBarMobile: React.FC = () => {
    const { isMenuOpened } = useMobile();
    const { t } = useTranslation();

    const navVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                height: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.5, delay: 0.1 }
            }
        },
        visible: {
            opacity: 1,
            height: "calc(100dvh - 10dvh)",
            transition: {
                height: { duration: 0.5, ease: "easeInOut" },
                opacity: { duration: 0.4, delay: 0.2 }
            }
        }
    };

    return (
        <AnimatePresence>
            {isMenuOpened && (
                <motion.nav
                    className="header__nav__mobile"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={navVariants}
                >
                    <ul className="header__nav__mobile--list">
                        <span>Routes</span>
                        <li id="home_link_mbl" className="header__nav__mobile--item">
                            <Link to="/">{t("nav.home")}</Link>
                        </li>
                        <li id="about_link_mbl" className="header__nav__mobile--item">
                            <Link to="/about">{t("nav.about")}</Link>
                        </li>
                        <div className="header__nav__mobile--langs">
                            <span>Languages</span>
                            <SelectLang mobileMode={true}></SelectLang>
                        </div>
                    </ul>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default NavBarMobile;
