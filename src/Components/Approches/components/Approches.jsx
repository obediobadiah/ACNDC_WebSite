import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Approches() {

	const { t } = useTranslation();

	return (
		<div className="Approches_container">
			<Header />
			<div className="Approches_contents">
				<div className="Approches_detatils">
					<div className="Approches_Intro">
						<h1>{t("approche_intro_title")}</h1>
					</div>


					<div className="Approches_textes_box">



						<div className="Approches_box">
							<div className="numbers">
								<h1>1</h1>
							</div>
							<div className="Approche">
								<p>{t("approche_cyclique_h")}</p>
							</div>
							<div className="Approche_exp">
								<p>{t("approche_cyclique_p")}</p>
							</div>
						</div>



						<div className="Approches_box">
							<div className="numbers">
								<h1>2</h1>
							</div>
							<div className="Approche">
								<p>{t("approche_instit_h")}</p>
							</div>
							<div className="Approche_exp">
								<p>{t("approche_instit_p")}</p>
							</div>
						</div>



						<div className="Approches_box">
							<div className="numbers">
								<h1>3</h1>
							</div>
							<div className="Approche">
								<p>{t("approche_const_h")}</p>
							</div>
							<div className="Approche_exp">
								<p>{t("approche_const_p")}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Approches
