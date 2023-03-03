import React, { useState } from 'react';
import '../styles/DropdownAct.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { t, i18n } = useTranslation();

  const handleChangeLang = (lng) =>{
      i18n.changeLanguage(lng);
      localStorage.setItem("lng", lng);
  }

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu-act clicked' : 'dropdown-menu-act'}
      >
        <li>
          <p
            className="dropdown-link"
            onClick={() => handleChangeLang('fr')}
          >Francais
          </p>
          <p
            className="dropdown-link"
            onClick={() => handleChangeLang('en')}
          >English
          </p>
        </li>
      </ul>
    </>
  );
}

export default Dropdown
