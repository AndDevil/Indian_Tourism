import React, { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage'; // Corrected component name
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [setLoginUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Homepage setLoginUser={setLoginUser} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
