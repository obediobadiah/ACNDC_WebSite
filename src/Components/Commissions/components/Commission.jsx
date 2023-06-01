import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Commission() {

	const { t } = useTranslation();
	
	return (
		<div className="commision_container">
			<Header />
			<div className="commissions_contents">
				<div className="commissionss_detatils">
					<div className="commissions_Intro">
						<h1>{t("commissions_intro_title")}</h1>
					</div>

						<div className="commissions_textes">
							<p>{t("commissions_textes_head")}</p>

							<h1>{t("commissions_textes_conservation")}</h1>

							<h1>{t("commissions_textes_development")}</h1>

							<h1>{t("commissions_textes_masculinite")}</h1>

							<h1>{t("commissions_textes_generation")}</h1>
							
							<h1>{t("commissions_textes_cooperation")}</h1>
						</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Commission
