import React from 'react'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import PresidentImg from '../assets/Paulette Gabriella Presidente.jpg'
import VicePresidentImg from '../assets/MALINGA MUGANZA vice presidente .jpg'
import RapporteuseImg from '../assets/Rapporteuse.jpg'
import ConseillereMitila from '../assets/Mitila Esperance conseillere .jpg'
import ConseillereEsther from '../assets/Esther Furaha conseillere.jpg'
import PersonPlaceholder from '../assets/svg/person-placeholder.svg'

function Conseil_Section() {

	const { t } = useTranslation();
	
	return (
		<div className="OrganeGestion_Conseil">
						<div className="OrganeGestion_Conseil_title">
							<h2>{t("organe_conseil_title")}</h2>
						</div>
						<div className="OrganeGestion_Conseil_Identity">

							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PresidentImg} alt="Presidente" />
								</div>
								<div className="OrganeGestion_Function">
									<h3>Paulette Gabriella</h3>
									<p>{t("organe_conseil_president")}</p>
								</div>						
							</div>

							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={VicePresidentImg} alt="Vice Presidente" />
								</div>
								<div className="OrganeGestion_Function">
									<h3>MALINGA MUGANZA</h3>
									<p>{t("organe_conseil_vice_president")}</p>
								</div>						
							</div>

							
							{/* <div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Secrétaire" />
								</div>
								<div className="OrganeGestion_Function">
									<h3>Cristine Ngena</h3>
									<p>{t("organe_conseil_sec")}</p>
								</div>						
							</div> */}

							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={RapporteuseImg} alt="Rapporteuse" />
								</div>
								<div className="OrganeGestion_Function">
									<h3>Crispine Ngena</h3>
									<p>{t("organe_conseil_vice_sec")}</p>
								</div>						
							</div>

							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={ConseillereMitila} alt="Conseillere" />
								</div>
								<div className="OrganeGestion_Function">
									<h3>Mitila Esperance</h3>
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>

							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={ConseillereEsther} alt="Conseillere" />
								</div>
								<div className="OrganeGestion_Function">
									<h3>Esther Furaha</h3>
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>

							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Conseillere" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Clémentine Ndolomo</h3> */}
									<p>{t("organe_conseil_conseil_tech")}</p>
								</div>						
							</div>


							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Conseillere" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Clémentine Ndolomo</h3> */}
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>

							
							{/* <div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Conseillere" />
								</div>
								<div className="OrganeGestion_Function">
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div> */}

						</div>
					</div>
					
	)
}

export default Conseil_Section
