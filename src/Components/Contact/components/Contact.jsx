import React, { useState } from 'react';
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import Act_Img1 from '../assets/Logos ACNDC.png'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

function Contact() {

    const { t } = useTranslation();
    const [selectedPayment, setSelectedPayment] = useState('mobile-money');
    const [formData, setFormData] = useState({
        cardholder: '',
        cardNumber: '',
        expiry: '',
        cvv: '',
        state: ''
    });
    const [donationMode, setDonationMode] = useState(null);
    const [selectedAmount, setSelectedAmount] = useState(null);

    const monthlyAmounts = [10, 20, 50, 100];
    const oneTimeAmounts = [25, 50, 100, 250];

    const handlePaymentSelect = (method) => {
        setSelectedPayment(method);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div className="Contact_container">

            <div className="checkout_page">

                {/* Left Side - Checkout Form */}
                <div className="checkout_form_section">
                    <Link className="contact-home-link" onClick={() => { window.location.href = "/" }}>
                        <i className="fas fa-home"></i>
                    </Link>
                    <h1 className="checkout_title">{t('checkout_title')}</h1>
                    <p className="checkout_subtitle">{t('checkout_subtitle')}</p>

                    {/* Payment Method Selector */}
                    <div className="payment_methods_selector">
                        <div
                            className={`payment_option ${selectedPayment === 'mobile-money' ? 'active' : ''}`}
                            onClick={() => handlePaymentSelect('mobile-money')}
                        >
                            <i className="fas fa-mobile-alt"></i>
                            <p>{t('payment_method_mobile')}</p>
                        </div>
                        <div
                            className={`payment_option ${selectedPayment === 'card' ? 'active' : ''}`}
                            onClick={() => handlePaymentSelect('card')}
                        >
                            <i className="fas fa-credit-card"></i>
                            <p>{t('payment_method_card')}</p>
                        </div>
                        <div
                            className={`payment_option ${selectedPayment === 'paypal' ? 'active' : ''}`}
                            onClick={() => handlePaymentSelect('paypal')}
                        >
                            <i className="fab fa-paypal"></i>
                            <p>{t('payment_method_paypal')}</p>
                        </div>
                        <div
                            className={`payment_option ${selectedPayment === 'gpay' ? 'active' : ''}`}
                            onClick={() => handlePaymentSelect('gpay')}
                        >
                            <i className="fab fa-google"></i>
                            <p>{t('payment_method_gpay')}</p>
                        </div>
                    </div>

                    {/* Card Payment Form */}
                    {selectedPayment === 'card' && (
                        <div className="payment_form">
                            <div className="form_group">
                                <label>{t('payment_form_cardholder')}</label>
                                <input
                                    type="text"
                                    name="cardholder"
                                    placeholder={t('payment_form_cardholder_placeholder')}
                                    value={formData.cardholder}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form_group">
                                <label>{t('payment_form_card_number')}</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder={t('payment_form_card_number_placeholder')}
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="form_row">
                                <div className="form_group">
                                    <label>{t('payment_form_expiry')}</label>
                                    <input
                                        type="text"
                                        name="expiry"
                                        placeholder={t('payment_form_expiry_placeholder')}
                                        value={formData.expiry}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form_group">
                                    <label>{t('payment_form_cvv')}</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder={t('payment_form_cvv_placeholder')}
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile Money Form */}
                    {selectedPayment === 'mobile-money' && (
                        <div className="payment_form">
                            <div className="form_group">
                                <label>{t('payment_form_phone')}</label>
                                <input
                                    type="tel"
                                    placeholder={t('payment_form_phone_placeholder')}
                                />
                            </div>
                            <div className="form_group">
                                <label>{t('payment_form_operator')}</label>
                                <select>
                                    <option>{t('payment_form_operator_mtn')}</option>
                                    <option>{t('payment_form_operator_vodacom')}</option>
                                    <option>{t('payment_form_operator_airtel')}</option>
                                </select>
                            </div>
                        </div>
                    )}

                    {/* PayPal Form */}
                    {selectedPayment === 'paypal' && (
                        <div className="payment_form">
                            <div className="form_group">
                                <label>{t('payment_form_paypal_email')}</label>
                                <input
                                    type="email"
                                    placeholder={t('payment_form_paypal_email_placeholder')}
                                />
                            </div>
                        </div>
                    )}

                    {/* Billing Details */}
                    <div className="billing_details_section">
                        <h3 className="section_title">{t('billing_details_title')}</h3>
                        <div className="form_group">
                            <label>{t('billing_state')}</label>
                            <input
                                type="text"
                                name="state"
                                placeholder={t('billing_state_placeholder')}
                                value={formData.state}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="terms_section">
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">
                            {t('terms_agree')} <a href="#terms">{t('terms_link')}</a> {t('terms_subscription')}
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button className="submit_btn">
                        <i className="fas fa-lock"></i> {t('review_button')}
                    </button>
                </div>

                {/* Right Side - Donation Plan */}
                <div className="order_summary_section">

                    <div className="logo_section">
                        <img src={Act_Img1} alt="ACNDC Logo" className="summary_logo" />
                    </div>

                    {/* Donation Importance Section */}
                    <div className="donation_importance_section">
                        <div className="importance_content">
                            <h2 className="importance_title">{t('donation_importance_title')}</h2>
                            <p className="importance_text">
                                {t('donation_importance_p1')}
                            </p>
                            <p className="importance_text">
                                {t('donation_importance_p2')}
                            </p>
                        </div>
                    </div>

                    <div className="donation_plan_section">
                        <h3 className="section_title">{t('donation_plan_title')}</h3>

                        {/* Donation Mode Buttons */}
                        <div className="donation_mode_buttons">
                            <button
                                className={`mode_btn ${donationMode === 'monthly' ? 'active' : ''}`}
                                onClick={() => {
                                    setDonationMode('monthly');
                                    setSelectedAmount(null);
                                }}
                            >
                                <i className="fas fa-calendar-alt"></i>
                                {t('donation_mode_monthly')}
                            </button>
                            <button
                                className={`mode_btn ${donationMode === 'onetime' ? 'active' : ''}`}
                                onClick={() => {
                                    setDonationMode('onetime');
                                    setSelectedAmount(null);
                                }}
                            >
                                <i className="fas fa-heart"></i>
                                {t('donation_mode_onetime')}
                            </button>
                        </div>

                        {/* Monthly Amounts */}
                        {donationMode === 'monthly' && (
                            <div className="amounts_grid">
                                {monthlyAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        className={`amount_btn ${selectedAmount === amount ? 'active' : ''}`}
                                        onClick={() => setSelectedAmount(amount)}
                                    >
                                        <span className="amount_value">${amount}</span> <span className="amount_period">/Mo</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* One-Time Amounts */}
                        {donationMode === 'onetime' && (
                            <div className="amounts_grid">
                                {oneTimeAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        className={`amount_btn ${selectedAmount === amount ? 'active' : ''}`}
                                        onClick={() => setSelectedAmount(amount)}
                                    >
                                        <span className="amount_value">${amount}</span>
                                        {/* <span className="amount_period">Once</span> */}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Selected Amount Display */}
                        {selectedAmount && (
                            <div className="selected_amount_display">
                                <div className="amount_info">
                                    <span className="label">
                                        {t('donation_selected')} {donationMode === 'monthly' ? t('donation_selected_monthly') : t('donation_selected_onetime')}
                                    </span>
                                    <span className="display_amount">
                                        ${selectedAmount}
                                        {donationMode === 'monthly' && <span className="period">/Month</span>}
                                    </span>
                                </div>
                                <button className="confirm_donation_btn">
                                    <i className="fas fa-check"></i> {t('donation_continue')}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Organization Info */}
                    <div className="org_info_section">
                        <h4>{t('org_about_title')}</h4>
                        <p>{t('org_full_name')}</p>
                        <div className="org_contact">
                            <p><strong>Address:</strong> {t("contact_address_south")}</p>
                            <p><strong>Email:</strong> acndccongo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Information Section Below */}
            <div className="contact_info_section">
                <h3 className="section_title">{t('contact_info_header')}</h3>
                <div className="contact_info_display">
                    <div className="contact_info_item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <p className="info_label">{t('contact_info_phone_label')}</p>
                            <p className="info_value">+243 976 154 547</p>
                        </div>
                    </div>
                    <div className="contact_info_item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <p className="info_label">{t('contact_info_email_label')}</p>
                            <p className="info_value">acndccongo@gmail.com, acndccbo@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact_info_item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <p className="info_label">{t('contact_info_address_label')}</p>
                            <p className="info_value">{t("contact_address_south")}</p>
                            <p className="info_value">{t("contact_address_north")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
