import React from 'react';

import { BrowserRouter as Router, Routes, Route, Switch, useLocation, useParams }
    from 'react-router-dom';
import Vote from './vote';
import Dashboard from './dashboard';

import Navbar1 from '../components/navbar1';
import Voters from './voters';
import Candidate from './candidate';
import Election from './election';
import './landingpage.css';


function AdminPanel() {

    return (
        <Router>
            <Navbar1 />
            

            <Switch>


                <Route exact path="/voters" component={Voters} />
                <Route exact path="/candidates" component={Candidate} />
                <Route exact path="/Election" component={Election} />
            </Switch>
        </Router>
    );
}

export default AdminPanel;
