import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MealList from './MealList';
import MealEdit from "./MealEdit";

class App extends Component {
    render() {
        return (
                <Router>
                    <Switch>
                        <Route path='/' exact={true} component={Home}/>
                        <Route path='/meals' exact={true} component={MealList}/>
                        <Route path='/meals/:id' component={MealEdit}/>
                    </Switch>
                </Router>
        )
    }
}

export default App;
