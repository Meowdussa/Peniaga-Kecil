import './App.css';
import home from './pages/home';

import Navbar from './components/Navbar';
//import { Router } from 'express';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  
  return (
    <div className="container">
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={home}/> //link to home page
      </Switch>
      </Router>
    </div>

      
  );
}

export default App;
