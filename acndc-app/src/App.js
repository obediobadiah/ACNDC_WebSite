import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './Components/Landing Page/components/LandingPage'
import Programmes from './Components/Programmes/components/Programmes'

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
      </Switch>
    </Router>
  );
}

export default App;
