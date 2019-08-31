import React from 'react';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
//import { Switch} from 'react-router';
import Home from './component/pages/Home/Home.jsx';
import Login from './component/pages/Login.jsx';
import './App.css';

function App() {
  return (
       <div className="App.css">
         <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/home" component={Home} />
            </Switch>
         </Router>
       </div>
  );
}

export default App;
