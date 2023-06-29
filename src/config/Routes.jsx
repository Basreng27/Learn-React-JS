import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Login, Manga } from '../pages';
import Sidebar from '../components/Sidebar';

const Routes = () => {
  return (
    <Router>
      <Sidebar /> {/* Include the Sidebar component */}
      <Switch>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        {/* ...other routes */}
      </Switch>
    </Router>
  );
}

export default Routes;
