import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import Intro from './Landing_Intro_Section'
import Slogan from './Slogan_Section'
import VisionMission from './VisionMission_Section'
import AboutSection from './About_Section'
import BenefitsOfGiving from './BenefitsOfGiving_Section'
import ActualiteSection from './Actualite_Section'
import VideoSection from './video_section'
import Partners_Carousel from './Partners_Carousel'
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
			<Partners_Carousel />
			<NewsLetter />
			<Footer />
		</div>
	)
}

export default LandingPage
