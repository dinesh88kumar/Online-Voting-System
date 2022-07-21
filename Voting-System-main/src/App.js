import Register from "./pages/registration";
import Login from "./pages/login";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from "react-dom";
import Landing from "./pages/landingpage";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import AdminLogin from "./pages/adminlogin";
import AdminPanel from "./pages/adminpanel";

import Election from "./pages/election";

function App() {

  return (



    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/registration" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route exact path="/adminpanel" component={AdminPanel} />

      </Switch>
    </Router>

  );
}

export default App;
