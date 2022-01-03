import React, { Component } from "react";
import Cardlist from "../component/Cardlist";
import SearchBox from "../component/SearchBox";
import './App.css'
import Scroll from "../component/Scroll";
import Errorbounday from "../component/Errorboundary";

class App extends Component {

    constructor() {
        super();
        this.state =  {
            robots : [],
            searchfield : '',
        };
    }

    onTextChange = (event) => {
        this.setState({searchfield : event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase())
        })
        if (!robots.length){
            return (
                <h1 className='tc'>Loading...</h1>
                
            );
        } else {
            return (
                <div className = 'tc'> 
                    <h1 className='f1'> RoboFriends </h1>
                    <SearchBox textChange = {this.onTextChange} />
                    <Scroll>
                        <Errorbounday>
                          <Cardlist robots = {filteredRobot}/>
                        </Errorbounday>
                    </Scroll>
                </div>
                
            );
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>  {this.setState({robots : users})});
    }
    
}

export default App;