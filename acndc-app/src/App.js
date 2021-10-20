import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './Components/Landing Page/components/LandingPage'
import Programmes from './Components/Programmes/components/Programmes'
import Commissions from './Components/Commissions/components/Commission'

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
      </Switch>
    </Router>
  );
}

export default App;
