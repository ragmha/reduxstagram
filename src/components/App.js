import React from 'react';
import { Link } from 'react-router-dom';

const App = ({ children }) => (
  <div>
    <h1>
      <Link to="/">Reduxstagram</Link>
    </h1>
    {children}
  </div>
);

export default App;
