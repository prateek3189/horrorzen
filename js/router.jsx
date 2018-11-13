import React from 'react';
import { Route, Link, HashRouter, Switch } from 'react-router-dom'

class Main extends React.Component{
    render() {
        return <HashRouter>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </HashRouter>;
    }
}

module.exports = Main;

/*
    To Add a Route in this component proceed with following steps
    <Route exact path="/" component={Home} />
    Resulting URL: root/#/
    <Route exact path="/sample" component={Sample} />
    Resulting URL: root/#/sample
*/
