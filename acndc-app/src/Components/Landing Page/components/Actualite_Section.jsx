import React from 'react'
import {Link} from 'react-router-dom'
import  '../styles/style.css'
import Act_Img1 from '../assets/IMG-20210701-WA0057.jpg'

function Actualite_Section() {
	return (
		<div className="Actualite_container">
			<div className="Actualite_content">
				<div className="Actualite_details">
					<div className="Actualite_header">
						<h2>Nos dernières Actualité</h2>
						<p>Decouvrez ce que ACNDC et Nos partenaires bénéficiare ont fait</p>
					</div>
					<div className="Actualite_boxes">



						
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
									<Link to="/"  className="SavoirPlus">
										Savoir Plus
										<i class="fas fa-angle-right"></i>
									</Link>
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
									<Link to="/"  className="SavoirPlus">
										Savoir Plus
										<i class="fas fa-angle-right"></i>
									</Link>
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
									<Link to="/"  className="SavoirPlus">
										Savoir Plus
										<i class="fas fa-angle-right"></i>
									</Link>
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
