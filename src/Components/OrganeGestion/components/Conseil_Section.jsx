import React from 'react'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'


function Conseil_Section() {

	const { t } = useTranslation();
	
	return (
		<div className="OrganeGestion_Conseil">
						<div className="OrganeGestion_Conseil_title">
							<h2>{t("organe_conseil_title")}</h2>
						</div>
						<div className="OrganeGestion_Conseil_Identity">


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_president")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_vice_president")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_sec")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_vice_sec")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>


							
							<div className="OrganeGestion_Exp">
								{/* <div className="OrganeGestion_Img">
									<img src={OrganeGestionImgs} alt="" />
								</div> */}
								<div className="OrganeGestion_Function">
									{/* <h3>Crispine Ngena</h3> */}
									<p>{t("organe_conseil_conseil")}</p>
								</div>						
							</div>

						</div>
					</div>
					
	)
}

export default Conseil_Section
