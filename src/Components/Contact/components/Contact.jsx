import React, { useState, useEffect } from 'react';
import Footer from '../../Footer/components/Footer';
import '../styles/style.css';
import Act_Img1 from '../assets/Logos ACNDC.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// Initialize emailjs with your public key
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY');

function Contact() {
    const { t } = useTranslation();
    const [selectedPayment, setSelectedPayment] = useState('mobile-money');
    const [donationMode, setDonationMode] = useState(null);
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [selectedPaymentDetail, setSelectedPaymentDetail] = useState(null);
    const [isDonationConfirmed, setIsDonationConfirmed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        country: '',
        organization: '',
        phone: ''
    });

    const monthlyAmounts = [10, 20, 50, 100];
    const oneTimeAmounts = [25, 50, 100, 250];

    const mobileMoneyAccounts = [
        { provider: 'Airtel Money', number: '+243 81 234 5678', name: 'ACNDC' },
        { provider: 'Vodacom Money', number: '+243 89 765 4321', name: 'ACNDC' },
        { provider: 'Orange Money', number: '+243 85 348 6521', name: 'ACNDC' }
    ];

    const cardPaymentInfo = [
        {
            cardNumber: '1234 5678 9012 3456',
            cardHolder: 'ACNDC',
            expiry: '12/25',
            bank: 'Rawbank',
            branch: 'DRC, North-Kivu, Goma Branch'
        },
        {
            cardNumber: '1234 5678 9012 3456',
            cardHolder: 'ACNDC',
            expiry: '12/25',
            bank: 'Ecobank',
            branch: 'DRC, North-Kivu, Goma Branch'
        },
    ];

    const handlePaymentSelect = (method) => {
        setSelectedPayment(method);
        setSelectedPaymentDetail(null); // Reset selected payment detail when switching methods
    };

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        if (!isDonationConfirmed) {
            setIsDonationConfirmed(true);
            // Scroll to the donation summary after a short delay
            setTimeout(() => {
                document.querySelector('.confirmed_donation_summary')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        // Validate personal information
        if (!formData.name.trim()) {
            newErrors.name = t('validation_name_required');
        }
        
        if (!formData.email.trim()) {
            newErrors.email = t('validation_email_required');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('validation_email_invalid');
        }
        
        // Validate donation selection
        if (!donationMode) {
            newErrors.donationMode = t('validation_donation_mode_required');
        }
        
        if (!selectedAmount) {
            newErrors.amount = t('validation_amount_required');
        }
        
        // Validate payment method and details
        if (!selectedPayment) {
            newErrors.paymentMethod = t('validation_payment_method_required');
        }
        
        if (!selectedPaymentDetail) {
            newErrors.paymentDetail = t('validation_payment_detail_required');
        }
        
        // Validate terms acceptance
        if (!termsAccepted) {
            newErrors.terms = t('validation_terms_required');
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Real-time validation to show errors as user interacts
    const showValidationErrors = () => {
        const newErrors = {};
        
        // Validate personal information
        if (!formData.name.trim()) {
            newErrors.name = t('validation_name_required');
        }
        
        if (!formData.email.trim()) {
            newErrors.email = t('validation_email_required');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('validation_email_invalid');
        }
        
        // Validate donation selection
        if (!donationMode) {
            newErrors.donationMode = t('validation_donation_mode_required');
        }
        
        if (!selectedAmount) {
            newErrors.amount = t('validation_amount_required');
        }
        
        // Validate payment method and details
        if (!selectedPayment) {
            newErrors.paymentMethod = t('validation_payment_method_required');
        }
        
        if (!selectedPaymentDetail) {
            newErrors.paymentDetail = t('validation_payment_detail_required');
        }
        
        // Validate terms acceptance
        if (!termsAccepted) {
            newErrors.terms = t('validation_terms_required');
        }
        
        setErrors(newErrors);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Show validation errors and check if form is valid
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // In a real implementation, you would integrate with your email service here
            // For now, we'll just show a success message
            const paymentDetailText = selectedPayment === 'mobile-money'
                ? `${selectedPaymentDetail.provider}: ${selectedPaymentDetail.number}`
                : `${selectedPaymentDetail.bank} - Account: ${selectedPaymentDetail.cardNumber}`;

            alert(`Thank you for your donation of $${selectedAmount}${donationMode === 'monthly' ? '/month' : ''}!\n\n` +
                `Payment Method: ${selectedPayment === 'mobile-money' ? 'Mobile Money' : 'Bank Transfer'}\n` +
                `Payment Details: ${paymentDetailText}\n` +
                'We will contact you shortly with payment instructions.');

            // Reset form
            setFormData({
                name: '',
                email: '',
                country: '',
                organization: '',
                phone: ''
            });
            setSelectedAmount(null);
            setDonationMode(null);
            setSelectedPayment('mobile-money');
            setIsDonationConfirmed(false);
            setSelectedPaymentDetail(null);
            setTermsAccepted(false);
            setErrors({});
        } catch (error) {
            console.error('Error processing donation:', error);
            alert('There was an error processing your donation. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Show errors when user interacts with form
    const handleFormInteraction = () => {
        showValidationErrors();
    };

    return (
        <div className="Contact_container">

            <div className="checkout_page_container">
                <div className="checkout_page">

                    {/* Left Side - Checkout Form */}
                    <form className="checkout_form_section" onSubmit={handleSubmit}>
                        <Link className="contact-home-link" onClick={() => { window.location.href = "/" }}>
                            <i className="fas fa-home"></i>
                        </Link>
                        <h1 className="checkout_title">{t('checkout_title')}</h1>
                        <p className="checkout_subtitle">{t('checkout_subtitle')}</p>

                        {/* Personal Information */}
                        <div className="form_group">
                            <label>{t('form_name_label')} *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder={t('form_name_placeholder')}
                                value={formData.name}
                                onChange={handleInputChange}
                                className={errors.name ? 'error' : ''}
                                required
                            />
                            {errors.name && <span className="error_message">{errors.name}</span>}
                        </div>
                        <div className="form_group">
                            <label>{t('form_email_label')} *</label>
                            <input
                                type="email"
                                name="email"
                                placeholder={t('form_email_placeholder')}
                                value={formData.email}
                                onChange={handleInputChange}
                                className={errors.email ? 'error' : ''}
                                required
                            />
                            {errors.email && <span className="error_message">{errors.email}</span>}
                        </div>
                        <div className="form_row">
                            <div className="form_group">
                                <label>{t('form_country_label')}</label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder={t('form_country_placeholder')}
                                    value={formData.country}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form_group">
                                <label>{t('form_organization_label')}</label>
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder={t('form_organization_placeholder')}
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Payment Method Selector */}
                        <h3 className="section_title">{t('payment_method_title')}</h3>
                        <div className="payment_methods_selector">
                            <div
                                className={`payment_option ${selectedPayment === 'mobile-money' ? 'active' : ''}`}
                                onClick={() => handlePaymentSelect('mobile-money')}
                            >
                                <i className="fas fa-mobile-alt"></i>
                                <p>{t('payment_mobile_money')}</p>
                            </div>
                            <div
                                className={`payment_option ${selectedPayment === 'card' ? 'active' : ''}`}
                                onClick={() => handlePaymentSelect('card')}
                            >
                                <i className="fas fa-university"></i>
                                <p>{t('payment_bank_transfer')}</p>
                            </div>
                        </div>

                        {/* Card Payment Form - Removed as we're only showing bank transfer details */}

                        {/* Mobile Money Payment Info */}
                        {selectedPayment === 'mobile-money' && (
                            <div className="payment_info_section">
                                <h4>{t('payment_mobile_title')}</h4>
                                <p>{t('payment_mobile_instruction')}</p>
                                <div className="payment_details">
                                    {mobileMoneyAccounts.map((account, index) => (
                                        <div
                                            key={index}
                                            className={`payment_detail_item ${selectedPaymentDetail?.provider === account.provider ? 'selected' : ''}`}
                                            onClick={() => setSelectedPaymentDetail(account)}
                                        >
                                            <div className="payment_provider">{account.provider}</div>
                                            <div className="payment_number">{account.number}</div>
                                            <div className="payment_name">Name: {account.name}</div>
                                            {selectedPaymentDetail?.provider === account.provider && (
                                                <div className="selected_indicator">
                                                    <i className="fas fa-check-circle"></i> {t('payment_selected')}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="payment_note">
                                    {t('payment_note')}
                                </p>
                            </div>
                        )}

                        {/* Bank Transfer Info */}
                        {selectedPayment === 'card' && (
                            <div className="payment_info_section">
                                <h4>{t('payment_bank_title')}</h4>
                                <p>{t('payment_bank_instruction')}</p>
                                <div className="payment_details">
                                    {cardPaymentInfo.map((info, index) => (
                                        <div
                                            key={index}
                                            className={`payment_detail_item ${selectedPaymentDetail?.bank === info.bank ? 'selected' : ''}`}
                                            onClick={() => setSelectedPaymentDetail(info)}
                                        >
                                            <div className="payment_provider">{info.bank}</div>
                                            <div className="payment_number">Account: {info.cardNumber} </div>
                                            <div className="payment_expiry">Expiry: {info.expiry}</div>
                                            <div className="payment_name">Name: {info.cardHolder}</div>
                                            <div className="payment_branch">Branch: {info.branch}</div>
                                            {selectedPaymentDetail?.bank === info.bank && (
                                                <div className="selected_indicator">
                                                    <i className="fas fa-check-circle"></i> {t('payment_selected')}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <p className="payment_note">
                                    {t('payment_note')}
                                </p>
                            </div>
                        )}

                        {/* Terms and Submit */}
                        <div className="terms_section">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                checked={termsAccepted}
                                onChange={(e) => {
                                    setTermsAccepted(e.target.checked);
                                    if (errors.terms) {
                                        setErrors(prev => ({ ...prev, terms: '' }));
                                    }
                                }}
                                className={errors.terms ? 'error' : ''}
                            />
                            <label htmlFor="terms" className={errors.terms ? 'error' : ''}>
                                {t('terms_label')} <Link to="/terms" target="_blank" rel="noopener noreferrer">{t('terms_link')}</Link> {t('and')} <Link to="/privacy" target="_blank" rel="noopener noreferrer">{t('privacy_link')}</Link>
                            </label>
                            {errors.terms && <span className="error_message">{errors.terms}</span>}
                        </div>

                    </form>

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
                                            onClick={() => handleAmountSelect(amount)}
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
                                            onClick={() => handleAmountSelect(amount)}
                                        >
                                            <span className="amount_value">${amount}</span>
                                            {/* <span className="amount_period">Once</span> */}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Confirmed Donation Summary */}
                        {isDonationConfirmed && selectedAmount && (
                            <div className="confirmed_donation_summary">
                                <h3 className="section_title">{t('donation_summary_title')}</h3>
                                <div className="donation_summary">
                                    <div className="summary_item">
                                        <span className="summary_label">{t('summary_amount_label')}</span>
                                        <span className="summary_value">
                                            ${selectedAmount}
                                            {donationMode === 'monthly' && <span className="period">/month</span>}
                                        </span>
                                    </div>
                                    <div className="summary_item">
                                        <span className="summary_label">{t('summary_type_label')}</span>
                                        <span className="summary_value">
                                            {donationMode === 'monthly' ? t('summary_monthly_donation') : t('summary_onetime_donation')}
                                        </span>
                                    </div>
                                    {selectedPayment && (
                                        <div className="summary_item">
                                            <span className="summary_label">{t('summary_payment_method_label')}</span>
                                            <span className="summary_value">
                                                {selectedPayment === 'mobile-money' ? t('payment_mobile_money') : t('payment_bank_transfer')}
                                            </span>
                                        </div>
                                    )}
                                    {selectedPaymentDetail && (
                                        <div className="summary_item">
                                            <span className="summary_label">{t('summary_payment_details_label')}</span>
                                            <span className="summary_value">
                                                {selectedPayment === 'mobile-money'
                                                    ? `${selectedPaymentDetail.provider}: ${selectedPaymentDetail.number}`
                                                    : `${selectedPaymentDetail.bank}: ${selectedPaymentDetail.cardNumber}`
                                                }
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}


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

                
                {/* Full Width Submit Button */}
                <div className="full_width_submit_section">
                    {/* Donation Mode Error */}
                    {errors.donationMode && (
                        <div className="error_message_section">
                            <span className="error_message">{errors.donationMode}</span>
                        </div>
                    )}
                    
                    {/* Amount Error */}
                    {errors.amount && (
                        <div className="error_message_section">
                            <span className="error_message">{errors.amount}</span>
                        </div>
                    )}
                    
                    {/* Payment Method Error */}
                    {errors.paymentMethod && (
                        <div className="error_message_section">
                            <span className="error_message">{errors.paymentMethod}</span>
                        </div>
                    )}
                    
                    {/* Payment Detail Error */}
                    {errors.paymentDetail && (
                        <div className="error_message_section">
                            <span className="error_message">{errors.paymentDetail}</span>
                        </div>
                    )}
                    
                    <button
                        type="submit"
                        className="submit_btn full_width"
                        onMouseEnter={handleFormInteraction}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <span>{t('submit_processing')}</span>
                        ) : (
                            <>
                                <i className="fas fa-lock"></i> {t('submit_button')} ${selectedAmount}
                                {donationMode === 'monthly' && '/month'}
                            </>
                        )}
                    </button>
                </div>
            </div>

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
        </div >
    );
}

export default Contact;
