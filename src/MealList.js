import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';

class MealList extends Component {

    constructor(props) {
        super(props);
        this.state = {meals: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch("/meals").then(result=> result.json()).then(data=>this.setState({meals: data}))
    }

    async remove(id) {
    }

    render() {
        const {meals} = this.state;

        const mealList = meals.map(meal => {
            return <tr key={meal.id}>
                <td style={{whiteSpace: 'nowrap'}}>{meal.name}</td>
                <td>{meal.origin}</td>
                <td>{meal.price}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/meals/" + meal.id}>Edit</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
                <div>
                    <AppNavbar/>
                    <Container fluid>
                        <div className="float-right">
                            <Button color="success" tag={Link} to="/meals/new">Add meal</Button>
                        </div>
                        <h3>meals</h3>
                        <Table className="mt-4">
                            <thead>
                            <tr>
                                <th width="30%">Name</th>
                                <th width="30%">Origin</th>
                                <th width="30%">Price</th>
                                <th width="40%">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {mealList.map(meal=>{
                                <td>{meal.name}</td>
                                <td>{meal.origin}</td>
                                <td>{meal.price}</td>
                                <td>{meal.actions}</td>
                            })}
                            </tbody>
                        </Table>
                    </Container>
                </div>
        );
    }
}

export default MealList;
