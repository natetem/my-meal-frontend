import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';
import {Container} from 'reactstrap';
import logo from './meal.jpeg';

class Home extends Component {
    render() {
        return (
                <div>
                    <AppNavbar/>
                    <Container fluid>
                        <img class = "image" src={logo}/>
                        <Link to="/meals">
                            <button class="button button"> >
                                meals
                            </button>
                        </Link>
                    </Container>
                </div>
        );
    }
}

export default Home;
