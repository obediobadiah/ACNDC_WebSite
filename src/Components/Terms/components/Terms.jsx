import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../styles/Terms.css';

function Terms() {
    const { t } = useTranslation();

    return (
        <div className="terms_container">
            <div className="terms_header">
                <Link to="/contact" className="back_link">
                    <i className="fas fa-arrow-left"></i> {t('back_to_contact')}
                </Link>
                <h1 className="terms_title">{t('terms_page_title')}</h1>
                <p className="terms_subtitle">{t('terms_page_subtitle')}</p>
            </div>

            <div className="terms_content">
                <section className="terms_section">
                    <h2>{t('terms_acceptance_title')}</h2>
                    <p>{t('terms_acceptance_content')}</p>
                </section>

                <section className="terms_section">
                    <h2>{t('terms_donation_title')}</h2>
                    <p>{t('terms_donation_content')}</p>
                    <ul>
                        <li>{t('terms_donation_point1')}</li>
                        <li>{t('terms_donation_point2')}</li>
                        <li>{t('terms_donation_point3')}</li>
                        <li>{t('terms_donation_point4')}</li>
                    </ul>
                </section>

                <section className="terms_section">
                    <h2>{t('terms_payment_title')}</h2>
                    <p>{t('terms_payment_content')}</p>
                    <ul>
                        <li>{t('terms_payment_point1')}</li>
                        <li>{t('terms_payment_point2')}</li>
                        <li>{t('terms_payment_point3')}</li>
                    </ul>
                </section>

                <section className="terms_section">
                    <h2>{t('terms_privacy_title')}</h2>
                    <p>{t('terms_privacy_content')}</p>
                </section>

                <section className="terms_section">
                    <h2>{t('terms_limitation_title')}</h2>
                    <p>{t('terms_limitation_content')}</p>
                </section>

                <section className="terms_section">
                    <h2>{t('terms_contact_title')}</h2>
                    <p>{t('terms_contact_content')}</p>
                    <div className="contact_info">
                        <p><strong>{t('org_full_name')}</strong></p>
                        <p>Email: acndccongo@gmail.com</p>
                        <p>{t('contact_address_south')}</p>
                        <p>{t('contact_address_north')}</p>
                    </div>
                </section>

                <section className="terms_section">
                    <h2>{t('terms_modification_title')}</h2>
                    <p>{t('terms_modification_content')}</p>
                </section>
            </div>

            <div className="terms_footer">
                <p>{t('terms_footer_text')}</p>
                <p>{t('terms_effective_date')}</p>
            </div>
        </div>
    );
}

export default Terms;
