import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import  '../styles/style.css'
import Act_Img1 from '../assets/IMG-20210701-WA0057.jpg'
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import { Progress } from 'antd';


function Actualite_Section() {


	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
	  setVisible(true);
	};
  
	const onClose = () => {
	  setVisible(false);
	};

	return (
		<div className="Actualite_container">
			<div className="Actualite_content">
				<div className="Actualite_details">
					<div className="Actualite_header">
						<h2>Nos dernières Actualité</h2>
						<p>Decouvrez ce que ACNDC et Nos partenaires bénéficiare ont fait</p>
					</div>
					<div className="Actualite_boxes">
						

				<Drawer placement="right" width="80%" onClose={onClose} visible={visible}>
				<div className="drawer_title">
						<h2>Actions pour la Conservation de la Nature et le Développement communautaire; ACNDC Actions pour la Conservation de la Nature.</h2>
					</div>
					<div className="drawer_contents_img">
						<img src={Act_Img1} alt="Drawer image" />
						<img src={Act_Img1} alt="Drawer image" />
						<img src={Act_Img1} alt="Drawer image" />
					</div>
					<div className="drawer_contents_det">
						<div className="drawer_contents_det_txt">

													
						<h1>Notre Vision</h1>
						<p>ACNDC devienne une alliance des groupes communautaire de base et ceux de la société civile actifs et agissant ensemble pour une conservation de la nature pourvoyeuse du développement durable en faveur des générations présentes et futures des femmes et des hommes par une juste (légale, transparente, redevable et distributive) exploitation, échange et utilisation des ressources naturelles sauvages floristiques et fauniques, domestiques zoologiques et botaniques et agricoles végétales et animales en filière technico-professionnelle et en chaîne des valeurs économiques accroissant des grandes quantités des récoltes semencières et vivrières ou des géniteurs et chairs dans les paniers des femmes productrices, circulant sur des infrastructures routières aménagées et fréquemment réhabilitées dans le cadre de la décentralisation de la gouvernance et aboutissant à des visibilités aux étalages des marchés et dans les assiettes des ménages tant ruraux qu'urbains.</p>


						<h1>Notre Mission</h1>
						<p> Il est d’encadrer l’autonomisation économique, socioculturelle et environnementale des femmes.</p>


						<h1>Historique</h1>
						<p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC
						ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles, celles coutumières et traditionnelles, des autorités locales et autres faiseurs d’opinions de proximité territoriale, sectorielle et populaire. A ce titre, elle fonctionne sur base de la légitimité communautaire et populaire. 
						C’est organisation féminine œuvrant pour la défense des droits des femmes autochtones et des groupes des personnes Marginalisées en RDC.
						</p>
						<p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles, celles coutumières et traditionnelles, des autorités locales et autres faiseurs d’opinions de proximité territoriale, sectorielle et populaire. A ce titre, elle fonctionne sur base de la légitimité communautaire et populaire.  C’est organisation féminine œuvrant pour la défense des droits des femmes autochtones, les femmes marginalisées et des groupes des personnes Marginalisées en RDC.
						</p>
						<p>Etant dans une vision rurale, la place de la femme est non considérée et suite à La prise totale de responsabilité de l’Etat en matière de développement continue à démontrer ses limites. Devant cette faible de prise de responsabilité de l’Etat, il devient impérieux la consolidation d’une souveraineté primaire communautaire et une délégation expressive, participative et représentative des aspirations locales et féministes. C’est ainsi que ACNDC fut créée en <strong>2009</strong> par une <strong>équipe des femmes autochtones Batwa</strong> par le conseil de <strong>Monsieur LUGENDO MUSOBOKELWA CESAR</strong> à Kasika, en Territoire de Mwenga au Sud-kivu, RDC.  ACNDC à travers des ponts qu’établissent les femmes en leur qualité d’unificatrices communautaires, de premières éducatrices et agents de santé et de régulatrices de balance économique et politique pour la création d’une société juste équitable pour les femmes marginalisées par la coutume.  
						</p>
						</div>
					</div>
				</Drawer>


						
					<div className="Actualite_box">
								<div className="Actualite_box_Img">
									<img src={Act_Img1} alt="Actualite" />
								</div>
								<div className="Actualite_box_text">
									<div className="Actualite_box_text_head">
										<p>Actualités</p>
									</div>
									<div className="Actualite_box_text_tit">
										<p>Actions pour la Conservation de la Nature et le Développement communautaire; ACNDC</p>
									</div>
									<div className="Actualite_box_text_cont">
										<p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles.</p>
									</div>
									<div className="Actualite_box_text_but">
										<button  className="SavoirPlus" onClick={showDrawer}>
											Savoir Plus
											<i class="fas fa-angle-right"></i>
										</button>
									</div>
								</div>
							</div>




							
							<div className="Actualite_box">
								<div className="Actualite_box_Img">
									<img src={Act_Img1} alt="Actualite" />
								</div>
								<div className="Actualite_box_text">
									<div className="Actualite_box_text_head">
										<p>Actualités</p>
									</div>
									<div className="Actualite_box_text_tit">
										<p>Actions pour la Conservation de la Nature et le Développement communautaire; ACNDC</p>
									</div>
									<div className="Actualite_box_text_cont">
										<p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles.</p>
									</div>
									<div className="Actualite_box_text_but">
										<button  className="SavoirPlus" onClick={showDrawer}>
											Savoir Plus
											<i class="fas fa-angle-right"></i>
										</button>
									</div>
								</div>
							</div>




							
							<div className="Actualite_box">
								<div className="Actualite_box_Img">
									<img src={Act_Img1} alt="Actualite" />
								</div>
								<div className="Actualite_box_text">
									<div className="Actualite_box_text_head">
										<p>Actualités</p>
									</div>
									<div className="Actualite_box_text_tit">
										<p>Actions pour la Conservation de la Nature et le Développement communautaire; ACNDC</p>
									</div>
									<div className="Actualite_box_text_cont">
										<p>Actions pour la Conservation de la Nature et le Développement communautaire, ACNDC est Organisation de base à vocation communautaire, une coordination des organisations communautaires de base familiales et tribalo-ethniques, celles sociales et professionnelles et scientifiques et intellectuelles.</p>
									</div>
									<div className="Actualite_box_text_but">
										<button  className="SavoirPlus" onClick={showDrawer}>
											Savoir Plus
											<i class="fas fa-angle-right"></i>
										</button>
									</div>
								</div>
							</div>
					</div>
					<div className="Actualite_Button">
						<Link to="/" className="Act_Button">
							Voir plus d'article
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Actualite_Section
