import React, { useState } from "react";
import "@/components/Header/SelectLang/index.css";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";
import { ReactSVG } from "react-svg";

import USFlag from "@/assets/flags/us_flag.svg";
import ESFlag from "@/assets/flags/es_flag.svg";
import BRFlag from "@/assets/flags/br_flag.svg";

interface SelectLangProps {
    mobileMode?: boolean;
}

const SelectLang: React.FC<SelectLangProps> = ({ mobileMode }) => {
    const { i18n } = useTranslation();

    const langs: Record<string, { name: string; flag: string }> = {
        en: { name: "English", flag: USFlag },
        es: { name: "Spanish", flag: ESFlag },
        ptBR: { name: "Português", flag: BRFlag }
    };

    const langList = (i18n.options.supportedLngs || []).filter(
        (lang) => lang !== i18n.language && lang !== "cimode"
    );

    const [hasListOpen, setHasListOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleList = () => {
        if (hasListOpen) {
            setIsClosing(true);
            setTimeout(() => {
                setHasListOpen(false);
                setIsClosing(false);
            }, 200)
        } else {
            setHasListOpen(true);
        }
    };

    const handleLangChange = (e: React.MouseEvent<HTMLLIElement>) => {
        const selectedLang = e.currentTarget.getAttribute("data-lang");
        if (selectedLang) {
            i18n.changeLanguage(selectedLang);
            toggleList();
        }
    };

    return (
        <>
            {!mobileMode ?
                (
                    <div className="header__select">
                        <button className={`header__select--button ${hasListOpen ? "list--active" : ""}`} onClick={toggleList}>
                            <ReactSVG className="header__select--flag" src={langs[i18n.language].flag} />
                            {langs[i18n.language].name}
                            <FaChevronDown />
                        </button>
                        <ul className={`header__select--list ${hasListOpen ? "active" : ""} ${isClosing ? "closing" : ""}`}>
                            {langList.map((lang) => (
                                <li key={lang} data-lang={lang} onClick={handleLangChange} className="header__select--lang">
                                    <ReactSVG className="header__select--flag" src={langs[lang].flag} />
                                    {langs[lang].name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="header__nav__mobile__select">
                        <ul className="header__nav__mobile__select--list">
                            {langList.map((lang) => (
                                <li key={lang} data-lang={lang} onClick={handleLangChange} className="header__nav__mobile__select--lang">
                                    <ReactSVG className="header__select--flag" src={langs[lang].flag} />
                                    {langs[lang].name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }


        </>
    );
};

export default SelectLang;
