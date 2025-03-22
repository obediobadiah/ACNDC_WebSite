import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Commission() {
	const { t } = useTranslation();
	
	return (
		<div className="commission_container">
			<Header />
			<div className="commissions_contents">
				<div className="commissions_intro">
					<h1>{t("commissions_intro_title")}</h1>
				</div>

				<div className="commissions_description">
					<p>{t("commissions_textes_head")}</p>
				</div>
				
				<div className="commissions_grid">
					<div className="commission_card">
						<div className="commission_icon">
							<i className="fas fa-tree"></i>
						</div>
						<p>{t("commissions_textes_conservation")}</p>
					</div>

					<div className="commission_card">
						<div className="commission_icon">
							<i className="fas fa-globe-africa"></i>
						</div>
						<p>{t("commissions_textes_development")}</p>
					</div>

					<div className="commission_card">
						<div className="commission_icon">
							<i className="fas fa-venus-mars"></i>
						</div>
						<p>{t("commissions_textes_masculinite")}</p>
					</div>

					<div className="commission_card">
						<div className="commission_icon">
							<i className="fas fa-users"></i>
						</div>
						<p>{t("commissions_textes_generation")}</p>
					</div>

					<div className="commission_card">
						<div className="commission_icon">
							<i className="fas fa-handshake"></i>
						</div>
						<p>{t("commissions_textes_cooperation")}</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Commission
