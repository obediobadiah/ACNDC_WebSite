import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'
import IntroImg from '../assets/IMG-20210701-WA0042.jpg'
import Bailleur1Img from '../assets/images (2).png'
import Bailleur2Img from '../assets/lxoese.jpg'
import Bailleur3Img from '../assets/logo crispine.png'
import Bailleur4Img from '../assets/logo_MIC-300x300 Bailleur.png'
import Bailleur5Img from '../assets/Purposeful Logo 2021 PINEAPPLE (2) Bailleur.png'
import Reaseau1Img from '../assets/Engage.png'
import Reaseau2Img from '../assets/Voice.png'
import Reaseau3Img from '../assets/IMG_8068.jpg'
import Reaseau4Img from '../assets/REJEFEMAC MOUVEMENT_n.jpg'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import { useTranslation } from 'react-i18next'

function Partenaire() {

	const { t } = useTranslation();

	return (
		<div className="Partenaire_container">
			<Header />
			<div className="Partenaire_contents">
				<div className="Partenaire_detatils">
					<div className="Partenaire_Intro">
						<div className="Intro_text">
							<div className="Partenaire_Quote">
								<h1>{t("partenaire_intro_title")}</h1>
								<img src={IntroImg} alt="Intro Img" />
							</div>
						</div>
					</div>

					<div className="Partenaire_Comp">
						<div className="Partenaire_Exp">
							<h1>{t("partenaire_bailleur_h")}</h1>
							<p>{t("partenaire_bailleur_p")}</p>
							<div className="Partenaire_Exp_Img">
								<div><img src={Bailleur1Img} alt="" /></div>
								<div><img src={Bailleur2Img} alt="" /></div>
								<div><img src={Bailleur4Img} alt="" /></div>
								<div><img src={Bailleur5Img} alt="" /></div>
								<div>
									<img src={Bailleur3Img} alt="" />
									<h2>Alternatives Menages,<br/> Nature et <br/>Marché,  AMEN</h2>
								</div>
							</div>
						</div>


						<div className="Partenaire_Exp">
							<h1>{t("partenaire_reseau_h")}</h1>
							<p>{t("partenaire_reseau_p")}</p>
							<div className="Partenaire_Exp_Img">
								<div><img src={Reaseau1Img} alt="" /></div>
								<div>
									<img src={Reaseau2Img} alt="" />
									<h2>Nos voix comptent</h2>
								</div>
								<div><img src={Reaseau4Img} alt="" /></div>
								<div><img src={Reaseau3Img} alt="" /></div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="NewsLetter_Comp">
				<NewsLetter className="News" />
			</div>
			<Footer />
		</div>
	)
}

export default Partenaire
