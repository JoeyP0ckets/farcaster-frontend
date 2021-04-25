import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";
import About from "./About";

const Navbar = () => {
  return(
  <div>
    <Router>
          <div className="navbar-container">
          <h1 className="navbar-logo">Farcaster Industries</h1>
          <Link to="/Login">Login/Signup</Link>&nbsp;&nbsp;&nbsp;
          <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
          <Link to="About">Samples List</Link>&nbsp;&nbsp;&nbsp;
          <Link to="Projects">Profile</Link>&nbsp;&nbsp;&nbsp;
          </div>
          <Switch>
          <Route exact path="/">
              <About/>
            </Route>
          </Switch>
     </Router> 
  </div>
  )
}


export default Navbar