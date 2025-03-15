import React from 'react';
import styles from '@/pages/Home/Home.module.css';
import { useTranslation, Trans } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa6';
import QrCodeGen from '@/components/QrCodeGen/QrCodeGen';

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.home}>
            <div className={styles.home__info}>
                <FaSpinner></FaSpinner>
                <span className={styles.home__info_text}>
                    <Trans i18nKey={"homePage.main.information"}>
                        <strong className={styles.home_info_highlight}>QRCODE</strong>
                    </Trans>
                </span>
            </div>
            <div className={styles.home__title}>
                <h1 className={styles.home__title_text}>
                    <Trans i18nKey={"homePage.main.title"}>
                        <strong className={styles.home_highlight}>QRCODE</strong>
                    </Trans>
                </h1>
            </div>
            <div className={styles.home__description}>
                <p>
                    <Trans i18nKey={"homePage.main.description"}>
                        <strong className={styles.home_highlight}>QR code</strong>
                    </Trans>
                </p>
            </div>
            <div className={styles.home__gen}>
                <QrCodeGen />
            </div>
        </section >
    );
};

export default Home;