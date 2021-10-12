import React from 'react'
import { Link } from 'react-router-dom'
import  '../styles/style.css'
import VisionImg from '../assets/Vision.png'
import MissionImg from '../assets/Mission.png'
import ObjectifImg from '../assets/Objectf.png'

function VisionMission_Section() {
	return (
		<div className="Vision_container">
			<div className="Vision_content">
				<div className="Vision_Boxes">
					<div className="Vision_Box" id="Vision">
						
						<div className="Vision_Img">
							<img 
								src={VisionImg} 
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>VISION</p>
						</div>
						<div className="Vision_detail">
							<p>Lorem ipsum dorot sit emet. At enim possimus 33Lorem ipsum dorot sit emet. At enim possimus 33</p>
						</div>
						<div className="Vision_link">
							<Link to="/" className="VisionMission_Link">
							Savoir Plus
							</Link>
						</div>					
					</div>


					<div className="Vision_Box" id="Mission">
						
						<div className="Vision_Img">
							<img 
								src={MissionImg} 
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>MISSION</p>
						</div>
						<div className="Vision_detail">
							<p>Lorem ipsum dorot sit emet. At enim possimus 33Lorem ipsum dorot sit emet. At enim possimus 33</p>
						</div>
						<div className="Vision_link">
							<Link to="/" className="VisionMission_Link">
							Savoir Plus
							</Link>
						</div>					
					</div>


					<div className="Vision_Box" id="Objectif">
						<div className="Vision_Img">
							<img 
								src={ObjectifImg} 
								alt="Vision images"
								className="img"
							/>
						</div>
						<div className="Vision_Title">
							<p>OBJECTIF</p>
						</div>
						<div className="Vision_detail">
							<p>Lorem ipsum dorot sit emet. At enim possimus 33Lorem ipsum dorot sit emet. At enim possimus 33</p>
						</div>
						<div className="Vision_link">
							<Link 
								to="/" 
								className="VisionMission_Link"
							>
								Savoir Plus
							</Link>
						</div>					
					</div>


				</div>
			</div>
		</div>
	)
}

export default VisionMission_Section