import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import '../styles/style.css'

function Approches() {
	return (
		<div className="Approches_container">
			<Header />
			<div className="Approches_contents">
				<div className="Approches_detatils">
					<div className="Approches_Intro">
						<h1>NOS APPROCHES</h1>
					</div>


					<div className="Approches_textes_box">



						<div className="Approches_box">
							<div className="numbers">
								<h1>1</h1>
							</div>
							<div className="Approche">
								<p>APPROCHE CYCLIQUE ET PERIODIQUE</p>
							</div>
							<div className="Approche_exp">
								<p>ACNDC travaille par activités (opérations/interventions). Celles-ci sont autant continues que discontinues, intégrées ou désintégrées les unes des autres. Suivant un processus cyclique périodique (échéancier), les activités commencent et se terminent. Il est ainsi mis en place un service de coordination et d’appui aux projets (SCAP).
								</p>
							</div>
						</div>



						<div className="Approches_box">
							<div className="numbers">
								<h1>2</h1>
							</div>
							<div className="Approche">
								<p>APPROCHE INSTITUTIONNELLE, ORGANISATIONNELLE ET STRUCTURELLE.</p>
							</div>
							<div className="Approche_exp">
								<p>
									Cette approche repose sur la cohérence de la structuration fonctionnelle (ressources), stratégiques et idéologiques à tous les niveaux centraux, intermédiaires et décentralisés. Les conseils d’administration et les commissions de conservation de la nature, de développement durable et celle de décentralisation disposent
									de leurs orientations, leurs gestions et de leurs résultats. A cet effet, chaque structure est une institution à part entière et est en relations hiérarchiques et de collaboration avec d’autres. ACNDC fonction ainsi en réseau et mouvement autonome.
								</p>
							</div>
						</div>



						<div className="Approches_box">
							<div className="numbers">
								<h1>3</h1>
							</div>
							<div className="Approche">
								<p>APPROCHE CONTEXTUELLE ET EVOLUTIVE (DYNAMIQUE).</p>
							</div>
							<div className="Approche_exp">
								<p>
								ACNDC surveille continuellement le contexte de sa zone d’action afin de se positionner et d’introduire des adaptations de mise en œuvre (innovation, extension, réplication, accélération, diversification) de ses activités.
								</p>
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
