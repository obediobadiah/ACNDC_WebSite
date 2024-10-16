import React, { useState } from 'react';
import '../styles/DropdownSom.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'

function SommeNousDropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const { t } = useTranslation();

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu-som clicked' : 'dropdown-menu-som'}
      >

        <li>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/VisionMission"}}
          >{t("vision_menu_link")}
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Objectifs"}}
          >{t("objectif_menu_link")}
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Approches"}}
          >{t("approches_menu_link")}
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Resultats"}}
          >{t("result_menu_link")}
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/OrganeGestion"}}
          >{t("organe_menu_link")}
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Partenaire"}}
          >{t("patner_menu_link")}
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Rapports"}}
          >Nos Rapports
          </Link>
          <Link
            className="dropdown-link"
            onClick={() => {window.location.href="/Plans"}}
          >Nos Plans
          </Link>
        </li>
      </ul>
    </>
  );
}

// export default SommeNousDropdown

// import React, { useState } from 'react';
// import '../styles/DropdownAct.css';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next'

// function SommeNousDropdown() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   const { t } = useTranslation();

//   return (
//     <>
//       <ul
//         onClick={handleClick}
//         className={click ? 'dropdown-menu-act clicked' : 'dropdown-menu-act'}
//       >
//         <li>
//         <li>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/VisionMission"}}
//           >{t("vision_menu_link")}
//           </Link>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/Objectifs"}}
//           >{t("objectif_menu_link")}
//           </Link>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/Approches"}}
//           >{t("approches_menu_link")}
//           </Link>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/Resultats"}}
//           >{t("result_menu_link")}
//           </Link>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/OrganeGestion"}}
//           >{t("organe_menu_link")}
//           </Link>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/Partenaire"}}
//           >{t("patner_menu_link")}
//           </Link>
//           <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/Rapports"}}
//           >Nos Rapports
//           </Link>
//            <Link
//             className="dropdown-link"
//             onClick={() => {window.location.href="/OutilsTravail"}}
//           >Nos Outils de travail
//           </Link>
//         </li>
//         </li>
//       </ul>
//     </>
//   );
// }

export default SommeNousDropdown
