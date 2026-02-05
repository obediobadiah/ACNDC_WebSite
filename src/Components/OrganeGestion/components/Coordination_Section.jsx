import React from 'react'
import '../styles/style.css'
import { useTranslation } from 'react-i18next'
import PersonPlaceholder from '../assets/svg/person-placeholder.svg'
import CoordExe from '../assets/Crispine Ngena.JPG'
import AnimateurTerrain from '../assets/Amos Bahiya.JPG'
import ByamMAEC from '../assets/Byamungu Kakolela.JPG'
import ShaKam from '../assets/Shadrack kamwenge.JPG'
import EstFur from '../assets/Esther Furaha.JPG'
import JulBanzaNgoyi from '../assets/Julienne Banza Ngoyi.JPG'
import MariMuliro from '../assets/Marianna Muliro.JPG'
import JoseAmina from '../assets/Joséphine Amina.JPG'
import GayNgendo from '../assets/Gaylord Ngendo.JPG'

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
						<img src={CoordExe} alt="Coordinatrice" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Crispine Ngena</h3>
						<p>{t("organe_coord_coordinatrice")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={AnimateurTerrain} alt="Administratrice" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Amos Bahiya</h3>
						<p>{t("organe_coord_animateur_terrain")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={ByamMAEC} alt="Chargé des droits" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Byamungu Kakolela</h3>
						<p>{t("organe_coord_maec")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={MariMuliro} alt="Chargé de conservation" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Marianna Muliro</h3>
						<p>{t("organe_coord_programme_urgence")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={ShaKam} alt="Chargé entrepreneuriat" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Shadrack Kamwenge</h3>
						<p>{t("organe_coord_monitoring")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={EstFur} alt="Chargé de programme" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Esther Furaha</h3>
						<p>{t("organe_coord_assistante_mouvement")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={JulBanzaNgoyi} alt="Chargé de partenariat" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Julienne Banza Ngoyi</h3>
						<p>{t("organe_coord_psychologue")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={JoseAmina} alt="Chargé de partenariat" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Joséphine Amina</h3>
						<p>{t("organe_coord_assistante_plaidoyer")}</p>
					</div>
				</div>



				<div className="OrganeGestion_Exp">
					<div className="OrganeGestion_Img">
						<img src={GayNgendo} alt="Chargé de conservation" />
					</div>
					<div className="OrganeGestion_Function">
						<h3>Ir. Gaylord Ngendo</h3>
						<p>{t("organe_coord_conservation_paysage")}</p>
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
