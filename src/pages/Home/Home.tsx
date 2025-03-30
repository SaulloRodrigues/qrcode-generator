import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa6';
import QrCodeGenerator from '@/components/QrCodeGenerator/QrCodeGenerator';
import '@/pages/Home/home.css'

const Home: React.FC = () => {
    const { i18n } = useTranslation();
    return (
        <section className="home">
            <div className="home__info">
                <FaSpinner />
                <span className="home__info_text">
                    <Trans i18n={i18n} i18nKey={"homePage.main.information"}>
                        <strong className="home_info_highlight">QRCODE</strong>
                    </Trans>
                </span>
            </div>
            <div className="home__title">
                <h1 className="home__title_text">
                    <Trans i18n={i18n} i18nKey={"homePage.main.title"}>
                        <strong className="home_highlight">QRCODE</strong>
                    </Trans>
                </h1>
            </div>
            <div className="home__description">
                <p>
                    <Trans i18n={i18n} i18nKey={"homePage.main.description"}>
                        <strong className="home_highlight">QR code</strong>
                    </Trans>
                </p>
            </div>
            <div className="home__gen">
                <QrCodeGenerator />
            </div>
        </section>
    );
};

export default Home;
