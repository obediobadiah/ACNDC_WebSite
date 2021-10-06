import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header/header'
import Footer from './Components/Footer/components/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  );
}

export default App;
