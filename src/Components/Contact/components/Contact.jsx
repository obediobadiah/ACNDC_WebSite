import React from 'react';
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import Act_Img1 from '../assets/Logos ACNDC.png'
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

function Contact() {

    const { t } = useTranslation();

    return(
        <div className="Contact_container">
			<div className="Contact_contents">
				<div className="Contact_detatils">
					<div className="Contact_color_top">
						
					</div>
					<div className="Contact_contents_container">
						<div className="contact_container_detail">
                            <div className="contact_img">
                            <Link onClick={() => {window.location.href="/"}} className="contact_logo">
                                <img src={Act_Img1} alt="Contact" />
                            </Link>
                            </div>
                            <div className="contact_address">
                                <p>{t("contact_address_south")} <br/>{t("contact_address_north")}<br/><br/>{t("contact_address_tel")}<br/>{t("contact_address_email")}</p>
                            </div>
                            <div className="contact_links">
                                <div className="contact_links_icons">
                                    <Link to="https://web.facebook.com/acndc.org" className="address_link_icon">
                                        <i class="fab fa-facebook"></i>
                                    </Link>
                                    <Link to="https://x.com/ACNDC_ASBL?t=jwMpjWhuT4ScZgeAIa8juA&s=08" className="address_link_icon">
                                        <i className="fab fa-twitter"/>
                                    </Link>
                                    <Link to="https://www.linkedin.com/company/acndc-asbl-organisation-f%C3%A9minine-de-base/" className="address_link_icon">
                                        <i className="fab fa-linkedin"/>
                                    </Link>
                                    <Link to="https://instagram.com/acndc_asbl?igshid=MzNlNGNkZWQ4Mg==" className="address_link_icon">
                                        <i className="fab fa-instagram"/>
                                    </Link>
                                </div>

                                <div className="contact_links_txt">
                                    <p>ACNCD</p>
                                    <p>Action pour la Conservation de la Nature et Developement Communautaire</p>
                                </div>
                            </div>
                        </div>

					</div>

                    <div className="Contact_color_bottom">
						
					</div>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Contact
