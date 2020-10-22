/**
 * Created by Saikat on 22-Oct-20.
 */
import React from 'react';
import './header.css'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

const Header =()=> (

<Router>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/browse_events">Browse Events</Link>
                </li>
                <li>
                    <Link to="/create_events"><i class="fas fa-plus"></i> Create Events</Link>
                </li>
                <li>
                    <Link to="/sign_sign_up">SinIn/SignUp</Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route exact={true} path="/browse_events">

            </Route>
            <Route exact={true} path="/create_events">

            </Route>
            <Route exact={true} path="/sign-in.js">

            </Route>
        </Switch>
    </div>

</Router>

)

export default Header;



