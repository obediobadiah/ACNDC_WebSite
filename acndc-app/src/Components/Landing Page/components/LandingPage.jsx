import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import Intro from './Landing_Intro_Section'
import Slogan from './Slogan_Section'
import VisionMission from './VisionMission_Section'
import AboutSection from './About_Section'

function LandingPage() {
	return (
		<div className="Landing_container">
			<Header />
			<Intro />
			<Slogan />
			<VisionMission />
			<AboutSection />
			<Footer />
		</div>
	)
}

export default LandingPage
