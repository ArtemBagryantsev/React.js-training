import React from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';

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
            <Page1 />
          </Route>

          <Route path='/page2'>
            <Page2 />
          </Route>

        </Switch>
      </Router>
    </div>
  )
};

export default App;