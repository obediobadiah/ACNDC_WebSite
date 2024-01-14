import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/Logos ACNDC.png'
import  '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Footer() {

	const { t } = useTranslation();

	return (
		<div className="footer_container">
			<div className="footer_contents">
				<div className="footer_details">
					<div className="acndc_logo">
						<div className="acndc_logo_img">
							<img src={logoImg} alt="footer logo" />
						</div>
						<div className="acndc_logo_text">
							<h2>Action pour la Conservation de la Nature et Developement Communautaire</h2>
						</div>
					</div>
					<div className="address">
						<div className="address_text">
							<h2>	
								<i className="fas fa-map-marker-alt"/><t/>		
								A Kasika (100 km),<br/>
								à Mwenga (130km) <br/>
								et à Kitutu (210 km) <br/>
								sur la route nationale 2 <br/>
								Bukavu-Kasongo
							</h2>
						</div>
						<div className="address_links">
							<div className="address_link_text">
								<h5> {t("footer_address_link_text")} </h5>
							</div>
							<div className="address_link_icons">
								<a href="https://web.facebook.com/acndc.org" className="address_link_icon">
									<i class="fab fa-facebook"></i>
								</a>
								<a href="https://twitter.com/crispine_ngena" className="address_link_icon">
									<i className="fab fa-twitter"/>
								</a>
								<a href="https://www.linkedin.com/in/acndc-organisation-communautaire-de-base-b11975211/" className="address_link_icon">
									<i className="fab fa-linkedin"/>
								</a>
								<a href="https://www.instagram.com/acndc_organisation_de_base/" className="address_link_icon">
									<i className="fab fa-instagram"/>
								</a>
							</div>
						</div>
					</div>
					<div className="footer_links">
						<Link onClick={() => {window.location.href="/Resultats"}} className="footer_link">
							{t("result_menu_link")}
						</Link><br/>
						<Link onClick={() => {window.location.href="/OrganeGestion"}} className="footer_link">
							{t("organe_menu_link")}
						</Link><br/>
						<Link onClick={() => {window.location.href="/Partenaire"}} className="footer_link">
							{t("patner_menu_link")}
						</Link><br/>
						<Link onClick={() => {window.location.href="/Contact"}} className="footer_link">
							{t("contact_menu_link")}
						</Link><br/>
						<Link onClick={() => {window.location.href="/Contact"}} className="footer_link">
							{t("donate_button")}
						</Link><br/>
						<Link onClick={() => {window.location.href="/Login"}} className="footer_link">
							Login
						</Link>
					</div>
				</div>
				<div className="alright">
					<h3>© 2023 Action Pour La Conservation de la Nature et Development Communautaire, All Rights Reserved</h3>
				</div>
			</div>
		</div>
	)
}

export default Footer
