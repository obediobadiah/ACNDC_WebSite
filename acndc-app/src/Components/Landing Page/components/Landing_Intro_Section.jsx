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
							<h1>Lorem ipsum <br/>dolor sit amet. </h1>
							<p>Lorem ipsum dolor sit amet. At enim possimus. <br/>Alias inventore ab nobis iure et accusamus nisi.</p>
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