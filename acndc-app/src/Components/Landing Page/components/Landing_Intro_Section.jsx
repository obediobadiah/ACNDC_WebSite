import React from 'react'
import  '../styles/style.css'
import img1 from '../assets/IMG-20210701-WA0043.jpg'
import img2 from '../assets/IMG-20210701-WA0028.jpg'

function LandingIntro() {
	return (
		<div className="Introduction_container">
			<div className="intro_contents">
				<div className="intro_details">
					<div className="intro_details_text">
						<div className="intro_text">
							<h1>Ensemble pour la justice du genre et la justice climatique.</h1>
							<p>La justice du genre, l’Egalite de sexe, la justice économique et la justice climatique notre travail auprès de la communauté </p>
							<button 
							className="Intro_button"
							>
								EN SAVOIR PLUS
							</button>
						</div>
					</div>
					<div className="intro_images">
						<img 
							src={img1} 
							alt="introductions images"
							className="intro_img_1"
						/>
						<img 
							src={img2}
							alt="introductions images"
							className="intro_img_2"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingIntro