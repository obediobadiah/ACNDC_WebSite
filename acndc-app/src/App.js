import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './Components/Landing Page/components/LandingPage'
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
import Rapports_Details from './Components/Rapports/components/Rapports_detail'
import OutilsTravail from './Components/OutilsTravail/components/OutilsTravail'

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
        <Route path="/Rapports_detail">
          <Rapports_Details />
        </Route>
        <Route path="/OutilsTravail">
          <OutilsTravail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
