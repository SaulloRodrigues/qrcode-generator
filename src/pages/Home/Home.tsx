import React from 'react';
import styles from '@/pages/Home/Home.module.css';
import { useTranslation } from 'react-i18next';
const Home: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("homePage.main.title")}</h1>
        </div>
    );
};

export default Home;