import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
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
import OutilsTravail from './Components/OutilsTravail/components/OutilsTravail'
import Actualite from './Components/Actualite/components/Actualite'
import Contact from './Components/Contact/components/Contact'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/Programmes">
          <Programmes />
        </Route>
        <Route path="/Commissions">
          <Commissions />
        </Route>
        <Route path="/ZoneIntervention">
          <ZoneIntervention />
        </Route>
        <Route path="/VisionMission">
          <VisionMission />
        </Route>
        <Route path="/Objectifs">
          <Objectifs />
        </Route>
        <Route path="/Approches">
          <Approches />
        </Route>
        <Route path="/Resultats">
          <Resultats />
        </Route>
        <Route path="/OrganeGestion">
          <OrganeGestion />
        </Route>
        <Route path="/Partenaire">
          <Partenaire />
        </Route>
        <Route path="/Rapports">
          <Rapports />
        </Route>
        <Route path="/Rapport_Detail_2020">
          <Rapports_Details_2020 />
        </Route>
        <Route path="/Rapport_Detail_2021">
          <Rapports_Details_2021 />
        </Route>
        <Route path="/Rapport_Detail_2022">
          <Rapports_Details_2022 />
        </Route>
        {/*<Route path="/OutilsTravail">
          <OutilsTravail />
        </Route> */}
        <Route path="/Actualite">
          <Actualite />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
