import React, {useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './dashboard'
import About from './about'
import Contact from './contact'
import Error from './erro'
import Navbar from './navbar'

const paths=['/','/about','/contact']
function App() {
  const [currentPath, setCurrentPath] = useState('/')
  useEffect(() => {
   document.title = "Demo App"
  }, []);
  return (
    <Router>
      <Navbar currentPath={currentPath} paths={paths}/>
      <Switch>
        <Route exact path={paths[0]} >
          <Dashboard setPath={setCurrentPath}/>
        </Route>
        <Route exact path={paths[1]}>
          <About  setPath={setCurrentPath}/>
        </Route >
        <Route exact path={paths[2]}>
          <Contact  setPath={setCurrentPath}/>
        </Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
