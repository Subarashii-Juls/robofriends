import React, { Component } from "react";

class Errorbounday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError : true});
    }

    render(){
        if (this.state.hasError){
            return (
                <h1>Oooops! There is something wrong :(</h1>
            )
        }

        return (this.props.children)
        
    }
}

export default Errorbounday;