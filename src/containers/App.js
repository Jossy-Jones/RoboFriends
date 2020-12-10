import React from 'react';
import CardList from '../components/cardList';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll';
import { robots } from './robots';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchField: ""
        }
    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    render() {
        let { robots, searchField } = this.state;
        let filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ?
            <h1>Loading</h1> :
            <div className="App">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
    }
};

export default App;