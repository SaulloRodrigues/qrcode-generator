import React from 'react';
import { ReactSVG } from 'react-svg';
import IllustrationLearning from '@/assets/illustration_learning.svg';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaCode, FaPaperPlane } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import '@/pages/About/about.css';

const About: React.FC = () => {
    const { t } = useTranslation();

    const aboutLinks: { label: string, icon: IconType, url: string }[] = [
        { label: "Saullo Rodrigues", icon: FaGithub, url: "https://github.com/SaulloRodrigues" },
        { label: "Source Code", icon: FaCode, url: "https://github.com/SaulloRodrigues/qrcode-generator" },
        { label: "Contact me", icon: FaPaperPlane, url: t("nav.contact.msg_link") }
    ];

    return (
        <section className="about">
            <div className="about__illustrations">
                <ReactSVG src={IllustrationLearning}></ReactSVG>
            </div>
            <div className="about__prj">
                <div className="about__prj__topic topics">
                    <div className="about__topic__title titles">
                        <h1 className="about__topic__title_txt">{t("aboutPage.main.title")}</h1>
                        <p className="about__topic__subtitle_txt descriptions">{t("aboutPage.main.subtitle")}</p>
                    </div>
                    <div className="about__topic__des">
                        <p className="about__topic__des_txt paragraph__text">{t("aboutPage.main.first_paragraph")}</p>
                        <p className="about__topic__des_txt paragraph__text">{t("aboutPage.main.second_paragraph")}</p>
                        <p className="about__topic__des_txt paragraph__text">{t("aboutPage.main.third_paragraph")}</p>
                    </div>
                </div>
                <div className="about__prj__subtopic topics">
                    <div className="about__subtopic_title titles">
                        <h2 className="about__subtopic_title_txt">{t("aboutPage.main.subtopic.title")}</h2>
                        <p className="about__subtopic_subtitle_txt descriptions">{t("aboutPage.main.subtopic.subtitle")}</p>
                    </div>
                    <div className="about__subtopic_des">
                        <p className="about__subtopic_des_txt paragraph__text">{t("aboutPage.main.subtopic.description")}</p>
                    </div>
                </div>
                <div className="about__prj__btns">
                    {aboutLinks.map((item, index) => (
                        <ButtonLink key={index} className="about__prj_btn" url={item.url}>
                            <item.icon />
                            {item.label}
                        </ButtonLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
