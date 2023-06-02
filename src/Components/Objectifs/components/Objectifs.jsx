import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Objectifs() {

	const { t } = useTranslation();

	return (
		<div className="Objectif_container">
			<Header />
			<div className="Objectif_contents">
				<div className="Objectif_detatils">
					<div className="Objectif_Intro">
						<h1>{t("objectif_intro_title")}</h1>
					</div>

					
					<div className="Objectif_textes_box">
						<div className="Objectif_textes">

							
							<div className="Objectif_1">
								<i class="fas fa-check-circle" />
								<p>{t("objectif_entreprendre")}</p>
							</div>


							<div className="Objectif_1">
								<i class="fas fa-check-circle" />
								<p>{t("objectif_introduire")}</p>
							</div>


							<div className="Objectif_1">
								<i class="fas fa-check-circle" />
								<p>{t("objectif_ameliorer")}</p>
							</div>

							
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Objectifs
