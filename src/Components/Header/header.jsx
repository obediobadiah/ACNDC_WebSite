import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ActivitesDropdown from './components/ActivitesDropdown'
import SommeNousDropdown from './components/SommeNousDropdown'
import './style.css'
import logoImg from './assets/Logos ACNDC.png'



function Header() {

	const [click, setClick] = useState(false);
	const [Actdropdown, setActDropdown] = useState(false);
	const [SomDropdown, setSomDropdown] = useState(false);
	const handleClick = () => setClick(!click);



	const onMouseEnterAct = () => {
		if (window.innerWidth < 960) {
			setActDropdown(true);

		} else {
			setActDropdown(true);

		}
	};

	const onMouseLeaveAct = () => {
		if (window.innerWidth < 960) {
			setActDropdown(false);

		} else {
			setActDropdown(false);

		}
	};

	const onMouseEnterSom = () => {
		if (window.innerWidth < 960) {

			setSomDropdown(true);
		} else {

			setSomDropdown(true);
		}
	};

	const onMouseLeaveSom = () => {
		if (window.innerWidth < 960) {

			setSomDropdown(false);
		} else {

			setSomDropdown(false);
		}
	};

	return (
		<>
			<div className="header">
				{/* <div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times': 'fas fa-bars'} />
				</div> */}
				<div className="header-details">
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<div className="logo">
						<Link className="header-logo" onClick={() => {window.location.href="/"}}>
							<img src={logoImg} alt="Site logo" className="logoimg" />
						</Link>
					</div>
					<div className="header-menu-content">
						<ul className={click ? 'header-menu active' : 'header-menu'}>
							<li className="header-item"
								onMouseEnter={onMouseEnterAct}
								onMouseLeave={onMouseLeaveAct}>
								<span to="" className="header-links" >Nos Activités <i className="fas fa-caret-down" /></span>
								{Actdropdown && <ActivitesDropdown />}
							</li>

							<li className="header-item"
								onMouseEnter={onMouseEnterSom}
								onMouseLeave={onMouseLeaveSom}>
								<span className="header-links">Qui somme-nous? <i className="fas fa-caret-down" /></span>
								{SomDropdown && <SommeNousDropdown />}
							</li>


							<li className="header-item">
								<Link className="header-links" onClick={() => {window.location.href="/Actualite"}}>Nos Actualités </Link>
							</li>


							<li className="header-item">
								<Link className="header-links" onClick={() => {window.location.href="/Contact"}}>Contact </Link>
							</li>

						</ul>
					</div>
					<div className="Button-container">
						<Link onClick={() => {window.location.href="/Contact"}}><button className="btn">DONATION</button> </Link>

					</div>
				</div>
			</div>
		</>
	);
}

export default Header