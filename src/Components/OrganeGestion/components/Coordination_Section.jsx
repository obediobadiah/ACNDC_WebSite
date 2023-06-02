import React from 'react'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'

function Coordination_Section() {

	const { t } = useTranslation();

	return (
		<div className="OrganeGestion_Coord">
						<div className="OrganeGestion_Conseil_title">
							<h2>{t("organe_coord_title")}</h2>
						</div>
						<div className="OrganeGestion_Conseil_Identity">


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_coordinatrice")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_admin")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_droit")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_entrepreneuriat")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_partenariat")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_partenariat")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_coord_conservation")}</p>
								</div>						
							</div>




						</div>
					</div>
	)
}

export default Coordination_Section
