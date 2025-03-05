import React from 'react';
import styles from '@/pages/Home/Home.module.css';
import { useTranslation, Trans } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import AppIllustration from '@/assets/app_illustration.svg';
import QrCodeGen from '@/components/QrCodeGen/QrCodeGen';

const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.home}>
            <div className={styles.home__intro}>
                <h1 className={styles.home__intro_title}>
                    <Trans i18nKey={"homePage.main.title"}>
                        <strong className={styles.home__intro_highlight}>QRCODE</strong>
                    </Trans>
                </h1>
                <ReactSVG beforeInjection={(svg) => svg.classList.add(styles.home__intro_appIllustration)} src={AppIllustration} />
            </div>
            <div className={styles.home__gen}>
                <QrCodeGen />
            </div>
        </section >
    );
};

export default Home;