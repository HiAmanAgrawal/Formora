import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Feedback from './pages/Feedback';
import LandingPage from './pages/LandingPage'; 

function App() {
  const location = useLocation();
  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
         <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/landingpage" element={<LandingPage />} /> 
      </Routes>
    </>
  );
}

export default App;