import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/style.css'
import Bailleur1Img from '../../Partenaire/assets/images (2).png'
import Bailleur3Img from '../../Partenaire/assets/logo crispine.png'
import Bailleur4Img from '../../Partenaire/assets/logo_MIC-300x300 Bailleur.png'
import Bailleur5Img from '../../Partenaire/assets/Purposeful Logo 2021 PINEAPPLE (2) Bailleur.png'
import Reaseau1Img from '../../Partenaire/assets/Engage.png'
import Reaseau2Img from '../../Partenaire/assets/Voice.png'
import Reaseau3Img from '../../Partenaire/assets/IMG_8068.jpg'
import Reaseau4Img from '../../Partenaire/assets/REJEFEMAC MOUVEMENT_n.jpg'
import Reaseau5Img from '../../Partenaire/assets/PHOTO-2025-03-31-22-45-46.jpg'

function Partners_Carousel() {

	const { t } = useTranslation();
	const [scrollPosition, setScrollPosition] = useState(0);

	const allLogos = [
		{ id: 1, src: Bailleur1Img, alt: 'Partner 1' },
		// { id: 2, src: Bailleur2Img, alt: 'Partner 2' },
		{ id: 3, src: Bailleur3Img, alt: 'Partner 3' },
		{ id: 4, src: Bailleur4Img, alt: 'Partner 4' },
		{ id: 5, src: Bailleur5Img, alt: 'Partner 5' },
		{ id: 6, src: Reaseau1Img, alt: 'Partner 6' },
		{ id: 7, src: Reaseau2Img, alt: 'Partner 7' },
		{ id: 8, src: Reaseau3Img, alt: 'Partner 8' },
		{ id: 9, src: Reaseau4Img, alt: 'Partner 9' },
		{ id: 10, src: Reaseau5Img, alt: 'Partner 10' }
	];

	const handlePrevClick = () => {
		if (scrollPosition > 0) {
			setScrollPosition(prev => prev - 1);
		}
	};

	const handleNextClick = () => {
		if (scrollPosition < allLogos.length - 1) {
			setScrollPosition(prev => prev + 1);
		}
	};

	return (
		<div className="partners_carousel_container">
			<div className="partners_carousel_content">
				<div className="partners_carousel_header">
					<h2>{t("partners_carousel_title")}</h2>
					<p>{t("partners_carousel_subtitle")}</p>
				</div>

				<div className="partners_carousel_wrapper">
					<button 
						className="partners_carousel_btn partners_carousel_btn_prev"
						onClick={handlePrevClick}
						disabled={scrollPosition === 0}
						aria-label="Previous partners"
					>
						<i className="fas fa-chevron-left"></i>
					</button>

					<div className="partners_carousel_track_container">
						<div 
							className="partners_carousel_track"
							style={{
								transform: `translateX(calc(-${scrollPosition * (200 + 20)}px))`
							}}
						>
							{/* Display logos once for manual carousel */}
							{allLogos.map((logo, index) => (
								<div key={index} className="partners_carousel_item">
									<img src={logo.src} alt={logo.alt} />
								</div>
							))}
						</div>
					</div>

					<button 
						className="partners_carousel_btn partners_carousel_btn_next"
						onClick={handleNextClick}
						disabled={scrollPosition === allLogos.length - 1}
						aria-label="Next partners"
					>
						<i className="fas fa-chevron-right"></i>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Partners_Carousel
