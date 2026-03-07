import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import Intro from './Landing_Intro_Section'
import VisionMission from './VisionMission_Section'
import AboutSection from './About_Section'
import BenefitsOfGiving from './BenefitsOfGiving_Section'
import ActualiteSection from './Actualite_Section'
import VideoSection from './video_section'
import PartnersCarousel from './Partners_Carousel'
import NewsLetter from '../../NewsLetter/components/NewsLetter_Page'

function LandingPage() {
	return (
		<div className="Landing_container">
			<Header />
			<Intro />
			{/* <Slogan /> */}
			<VisionMission />
			<AboutSection />
			<BenefitsOfGiving />
			<ActualiteSection />
			<VideoSection />
			<PartnersCarousel />
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default LandingPage
