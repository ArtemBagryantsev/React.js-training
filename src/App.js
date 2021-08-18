import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import PersonPage from './Components/PersonPage/PersonPage';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <hr/>
        <Switch>

          <Route exact path='/' >
            <Home />
          </Route>

          <Route path='/page1'>
            <PersonPage />
          </Route>

        </Switch>
      </Router>
    </div>
  )
};

export default App;