import React from 'react'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import PersonPlaceholder from '../assets/svg/person-placeholder.svg'

function Coordination_Section() {

	const { t } = useTranslation();

	return (
		<div className="OrganeGestion_Coord">
						<div className="OrganeGestion_Conseil_title">
							<h2>{t("organe_coord_title")}</h2>
						</div>
						<div className="OrganeGestion_Conseil_Identity">


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Coordinatrice" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Marie Bahati</h3> */}
									<p>{t("organe_coord_coordinatrice")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Administratrice" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Justine Kavugho</h3> */}
									<p>{t("organe_coord_admin")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Chargé des droits" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Jean-Pierre Lusenge</h3> */}
									<p>{t("organe_coord_droit")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Chargé entrepreneuriat" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Alphonse Bandu</h3> */}
									<p>{t("organe_coord_entrepreneuriat")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Chargé de programme" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Claire Mbilizi</h3> */}
									<p>{t("organe_coord_programme")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Chargé de partenariat" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>François Mulume</h3> */}
									<p>{t("organe_coord_partenariat")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								<div className="OrganeGestion_Img">
									<img src={PersonPlaceholder} alt="Chargé de conservation" />
								</div>
								<div className="OrganeGestion_Function">
									{/* <h3>Pascaline Furaha</h3> */}
									<p>{t("organe_coord_conservation")}</p>
								</div>						
							</div>

						</div>
					</div>
	)
}

export default Coordination_Section
