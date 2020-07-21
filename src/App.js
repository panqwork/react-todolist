import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Todo} from './resources/features/index.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Todo/>
      </div>
    </Router>
  );
}

export default App;
