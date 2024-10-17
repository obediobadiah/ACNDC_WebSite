import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import LandingPage from './Components/LandingPage/components/LandingPage'
import Programmes from './Components/Programmes/components/Programmes'
import Commissions from './Components/Commissions/components/Commission'
import ZoneIntervention from './Components/ZoneIntervention/components/ZoneIntervention'
import VisionMission from './Components/VisionMission/components/VisionMission'
import Objectifs from './Components/Objectifs/components/Objectifs'
import Approches from './Components/Approches/components/Approches'
import Resultats from './Components/Resultats/components/Resultats'
import OrganeGestion from './Components/OrganeGestion/components/OrganeGestion'
import Partenaire from './Components/Partenaire/components/Partenaire'
import Rapports from './Components/Rapports/components/Rapports'
import Rapports_Details_2020 from './Components/Rapports/components/RapportsAnnuel/Rapports_detail_2020'
import Rapports_Details_2021 from './Components/Rapports/components/RapportsAnnuel/Rapports_detail_2021'
import Rapports_Details_2022 from './Components/Rapports/components/RapportsAnnuel/Rapports_detail_2022'
import Rapports_Details_2023 from './Components/Rapports/components/RapportsAnnuel/Rapports_detail_2023'
import OutilsTravail from './Components/OutilsTravail/components/OutilsTravail'
import Plans from './Components/Plans/components/Plans'
import Actualite from './Components/Actualite/components/Actualite'
import Contact from './Components/Contact/components/Contact'
import Login from './Components/Admin/Login/components/Login'
import Dashboard from './Components/Admin/Dashboard/dashboard';
import ProtectedRoute from '../src/utils/ProtectedRoutes';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Programmes" element={<Programmes />} />
        <Route path="/Commissions" element={<Commissions />} />
        <Route path="/ZoneIntervention" element={<ZoneIntervention />} />
        <Route path="/VisionMission" element={<VisionMission />} />
        <Route path="/Objectifs" element={<Objectifs />} />
        <Route path="/Approches" element={<Approches />} />
        <Route path="/Resultats" element={<Resultats />} />
        <Route path="/OrganeGestion" element={<OrganeGestion />} />
        <Route path="/Partenaire" element={<Partenaire />} />
        <Route path="/Rapports" element={<Rapports />} />
        <Route path="/Rapport_Detail_2020" element={<Rapports_Details_2020 />} />
        <Route path="/Rapport_Detail_2021" element={<Rapports_Details_2021 />} />
        <Route path="/Rapport_Detail_2022" element={<Rapports_Details_2022 />} />
        <Route path="/Rapport_Detail_2023" element={<Rapports_Details_2023 />} />
        <Route path="/OutilsTravail" element={<OutilsTravail />} />
        <Route path="/Plans" element={<Plans />} />
        <Route path="/Actualite" element={<Actualite />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin-dashboard/*" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
