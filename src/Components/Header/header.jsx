import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ActivitesDropdown from './components/ActivitesDropdown'
import SommeNousDropdown from './components/SommeNousDropdown'
import './style.css'
import logoImg from './assets/Logos ACNDC.png'
import { useTranslation } from 'react-i18next'



function Header() {

	const [click, setClick] = useState(false);
	const [Actdropdown, setActDropdown] = useState(false);
	const [SomDropdown, setSomDropdown] = useState(false);
	const [hasBackground, setHasBackground] = useState(false);
	const [setLangDropdown] = useState(false);
	const handleClick = () => setClick(!click);

	const { t, i18n } = useTranslation();

	const handleChangeLang = (lng) => {
		i18n.changeLanguage(lng);
		localStorage.setItem("lng", lng);
	}



	const onMouseEnterAct = () => {
		if (window.innerWidth < 960) {
			setActDropdown(true);

		} else {
			setActDropdown(true);

		}
	};

	const onMouseLeaveAct = () => {
		if (window.innerWidth < 960) {
			setActDropdown(false);

		} else {
			setActDropdown(false);

		}
	};

	const onMouseEnterSom = () => {
		if (window.innerWidth < 960) {

			setSomDropdown(true);
		} else {

			setSomDropdown(true);
		}
	};

	const onMouseLeaveSom = () => {
		if (window.innerWidth < 960) {

			setSomDropdown(false);
		} else {

			setSomDropdown(false);
		}
	};


	const onMouseEnterLang = () => {
		if (window.innerWidth < 960) {

			setLangDropdown(true);
		} else {

			setLangDropdown(true);
		}
	};

	const onMouseLeaveLang = () => {
		if (window.innerWidth < 960) {

			setLangDropdown(false);
		} else {

			setLangDropdown(false);
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setHasBackground(true);
			} else {
				setHasBackground(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{/* Info Section */}
			<div className="header-info-section">
				<div className="header-logo">
					{/* <Link className="header-logo-link" onClick={() => { window.location.href = "/" }}> */}
						<img src={logoImg} alt="Site logo" className="logoimg" />
					{/* </Link> */}
				</div>

				<div className="header-contact-info">
					<div className="info-item">
						<div className="info-icon">

						</div>
						<div className="info-text">
							<p className="info-label">{t('header_info_call_label')}</p>
							<p className="info-value">{t('header_info_call_value')}</p>
						</div>
					</div>

					<div className="info-item">
						<div className="info-icon">

						</div>
						<div className="info-text">
							<p className="info-label">{t('header_info_opening_label')}</p>
							<p className="info-value">{t('header_info_opening_value')}</p>
						</div>
					</div>

					<div className="info-item">
						<div className="info-icon">

						</div>
						<div className="info-text">
							<p className="info-label">{t('header_info_email_label')}</p>
							<p className="info-value">{t('header_info_email_value')}</p>
						</div>
					</div>

				</div>
			</div>

			{/* Main Navigation Bar */}
			<div className="header">
				<div className={`header-details ${hasBackground ? 'scrolled' : ''}`}>
					{/* Logo appears on scroll */}
					{hasBackground && (
						<div className="header-logo">
							<img src={logoImg} alt="Site logo" className="logoimg" />
						</div>
					)}

					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<div className={`header-menu-content ${click ? 'active' : ''}`}>
						<ul className="header-menu">
							<li className="header-home-item">
								<Link className="header-home-link" onClick={() => { window.location.href = "/" }}>
									<i className="fas fa-home"></i>
								</Link>
							</li>

							<li className="header-item"
								onMouseEnter={onMouseEnterAct}
								onMouseLeave={onMouseLeaveAct}>
								<span className="header-links">
									{t("activity_menu_link")}{" "}
									<i className={`fas ${Actdropdown ? "fa-caret-up" : "fa-caret-down"}`} />
								</span>
								{Actdropdown && <ActivitesDropdown />}
							</li>

							<li className="header-item"
								onMouseEnter={onMouseEnterSom}
								onMouseLeave={onMouseLeaveSom}>
								<span className="header-links">
									{t("some_nous_menu_link")}{" "}
									<i className={`fas ${SomDropdown ? "fa-caret-up" : "fa-caret-down"}`} />
								</span>
								{SomDropdown && <SommeNousDropdown />}
							</li>

							<li className="header-item">
								<Link className="header-links" onClick={() => { window.location.href = "/Actualite" }}> {t("actuality_menu_link")} </Link>
							</li>

							{/* <li className="header-item">
								<Link className="header-links" onClick={() => { window.location.href = "/Contact" }}> {t("contact_menu_link")} </Link>
							</li> */}
						</ul>
					</div>

					<div className="header-actions">
						<select className="LanguageSelector" onChange={(val) => { handleChangeLang(val.target.value); window.location.reload(); }} value={i18n.language}>
							<option value="fr" >Fr</option>
							<option value="en">En</option>
						</select>

						<div className="donation_button">
							<Link onClick={() => { window.location.href = "/Contact" }}><p className="donation_btn"> {t("donate_button")} </p> </Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header