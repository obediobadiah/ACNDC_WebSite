import React from 'react';
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './Components/Landing Page/components/LandingPage'
import Header from './Components/Header/header'
import Footer from './Components/Footer/components/Footer'
import NewsLetter from './Components/NewsLetter/components/NewsLetter_Page'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/footer">
          <Footer />
        </Route>
        <Route path="/NewsLetter_Page">
          <NewsLetter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
