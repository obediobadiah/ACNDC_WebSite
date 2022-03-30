import React, { useState } from 'react';
import '../styles/DropdownAct.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu-act clicked' : 'dropdown-menu-act'}
      >
        <li>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Programmes"}}
          >Programmes
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Commissions"}}
          >Commissions
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/ZoneIntervention"}}
          >Zone d'Intervention
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown
