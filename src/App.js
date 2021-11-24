import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacto from './Contacto';
import Layout from './Layout';
import Navbar from './Navbar';
import Proyectos from './Proyectos';

export default function App() {
  return (
    <Router>
      <Route exact path={'/Contacto'} component={Contacto} />
      <Route exact path={'/'} component={Layout} />
      <Route exact path={'/Proyectos'} component={Proyectos} />
    </Router>
  );
}