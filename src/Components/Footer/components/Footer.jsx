import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/Logos ACNDC.png'
import  '../styles/style.css'

function Footer() {
	return (
		<div className="footer_container">
			<div className="footer_contents">
				<div className="footer_details">
					<div className="acndc_logo">
						<div className="acndc_logo_img">
							<img src={logoImg} alt="footer logo" />
						</div>
						<div className="acndc_logo_text">
							<h2>Action pour la Conservation <br/>de la Nature et Developement <br/>Communautaire</h2>
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
								<h5>Restez avec nous via nos réseau sociaux</h5>
							</div>
							<div className="address_link_icons">
								<a href="#" className="address_link_icon">
									<i class="fab fa-facebook"></i>
								</a>
								<a href="#" className="address_link_icon">
									<i className="fab fa-twitter"/>
								</a>
								<a href="#" className="address_link_icon">
									<i className="fab fa-linkedin"/>
								</a>
								<a href="#" className="address_link_icon">
									<i className="fab fa-instagram"/>
								</a>
							</div>
						</div>
					</div>
					<div className="footer_links">
						<Link to="/" className="footer_link">
							Nos Résultats
						</Link><br/>
						<Link to="/" className="footer_link">
							Organe de Gestions
						</Link><br/>
						<Link to="/" className="footer_link">
							Nos Partenaire
						</Link><br/>
						<Link to="/" className="footer_link">
							Contactez-Nous
						</Link><br/>
						<Link to="/" className="footer_link">
							Donate
						</Link>
					</div>
				</div>
				<div className="alright">
					<h3>© 2021 Action Pour La Conservation de la Nature et Development Comminautaire, All Rights Reserved</h3>
				</div>
			</div>
		</div>
	)
}

export default Footer
