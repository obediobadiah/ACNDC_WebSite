import React, { useState } from 'react';
import '../styles/DropdownSom.css';
import { Link } from 'react-router-dom';

function SommeNousDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >

        <li>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/VisionMission"}}
          >Notre Vision et Mission
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Objectifs"}}
          >Nos Objectifs
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Approches"}}
          >Nos Approches
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Resultats"}}
          >Nos Resultats
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/OrganeGestion"}}
          >Organe de Gestions
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Partenaire"}}
          >Nos Partenaires
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Rapports"}}
          >Nos Rapports
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/OutilsTravail"}}
          >Nos Outils de travail
          </Link>
        </li>
      </ul>
    </>
  );
}

export default SommeNousDropdown
