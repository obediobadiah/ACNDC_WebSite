import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Privacy.css';

function Privacy() {
    const { t } = useTranslation();

    return (
        <div className="privacy_container">
            <div className="privacy_header">
                <Link to="/contact" className="back_link">
                    <i className="fas fa-arrow-left"></i> {t('back_to_contact')}
                </Link>
                <h1 className="privacy_title">{t('privacy_page_title')}</h1>
                <p className="privacy_subtitle">{t('privacy_page_subtitle')}</p>
            </div>

            <div className="privacy_content">
                <section className="privacy_section">
                    <h2>{t('privacy_introduction_title')}</h2>
                    <p>{t('privacy_introduction_content')}</p>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_information_collection_title')}</h2>
                    <p>{t('privacy_information_collection_content')}</p>
                    <ul>
                        <li>{t('privacy_info_point1')}</li>
                        <li>{t('privacy_info_point2')}</li>
                        <li>{t('privacy_info_point3')}</li>
                        <li>{t('privacy_info_point4')}</li>
                        <li>{t('privacy_info_point5')}</li>
                    </ul>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_information_usage_title')}</h2>
                    <p>{t('privacy_information_usage_content')}</p>
                    <ul>
                        <li>{t('privacy_usage_point1')}</li>
                        <li>{t('privacy_usage_point2')}</li>
                        <li>{t('privacy_usage_point3')}</li>
                        <li>{t('privacy_usage_point4')}</li>
                        <li>{t('privacy_usage_point5')}</li>
                    </ul>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_information_protection_title')}</h2>
                    <p>{t('privacy_information_protection_content')}</p>
                    <ul>
                        <li>{t('privacy_protection_point1')}</li>
                        <li>{t('privacy_protection_point2')}</li>
                        <li>{t('privacy_protection_point3')}</li>
                    </ul>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_cookies_title')}</h2>
                    <p>{t('privacy_cookies_content')}</p>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_third_party_title')}</h2>
                    <p>{t('privacy_third_party_content')}</p>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_user_rights_title')}</h2>
                    <p>{t('privacy_user_rights_content')}</p>
                    <ul>
                        <li>{t('privacy_rights_point1')}</li>
                        <li>{t('privacy_rights_point2')}</li>
                        <li>{t('privacy_rights_point3')}</li>
                        <li>{t('privacy_rights_point4')}</li>
                    </ul>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_contact_title')}</h2>
                    <p>{t('privacy_contact_content')}</p>
                    <div className="contact_info">
                        <p><strong>{t('org_full_name')}</strong></p>
                        <p>Email: acndccongo@gmail.com</p>
                        <p>{t('contact_address_south')}</p>
                        <p>{t('contact_address_north')}</p>
                    </div>
                </section>

                <section className="privacy_section">
                    <h2>{t('privacy_modification_title')}</h2>
                    <p>{t('privacy_modification_content')}</p>
                </section>
            </div>

            <div className="privacy_footer">
                <p>{t('privacy_footer_text')}</p>
                <p>{t('privacy_effective_date')}</p>
            </div>
        </div>
    );
}

export default Privacy;
