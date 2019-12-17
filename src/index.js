import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Productslist from './components/products/productslist';
import Registerlist from './components/registers/registerlist';
import Registration from './components/registration/registration';




export default class App extends Component {
    render() {
        return (
            <Switch>

                <Route exact path="/" render={() => (
                    <div>
                        <Registration />
                    </div>
                )} />            </Switch>
        )
    }
}
ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);


















// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
