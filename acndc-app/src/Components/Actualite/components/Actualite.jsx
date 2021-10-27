import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { Drawer, Button } from 'antd';
// import 'antd/dist/antd.css';
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'
import '../styles/style.css'
import Act_Img1 from '../assets/IMG-20210701-WA0062.jpg'

function Actualite() {

	const [visible, setVisible] = useState(false);

	const showDrawer = () => {
	  setVisible(true);
	};
  
	const onClose = () => {
	  setVisible(false);
	};


	return (
		<div className="Actualite_container">
			<Header />
			<div className="Actualite_contents">
				<div className="Actualite_detatils">
					<div className="Actualite_Intro">
						<h1>NOS OUTILS DE TRAVAIL</h1>
					</div>
				</div>

				<Button type="primary" onClick={showDrawer}>
					Open
				</Button>
				<Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>


				<div className="Actualite_comp">
					<div className="Actualite_comp_exp">
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
					</div>
				</div>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default Actualite
