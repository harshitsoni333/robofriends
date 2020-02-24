import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox'; 
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';



class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json() )
        .then(users => this.setState({ robots: users}) );
    }

    onSearch = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearch}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} /> 
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}

export default App;
