import React from 'react'
import Header from '../../Header/header'
import Footer from '../../Footer/components/Footer'
import Intro from './Landing_Intro'

function LandingPage() {
	return (
		<div className="Landing_container">
			<Header />
			<Intro />
			<Footer />
		</div>
	)
}

export default LandingPage
