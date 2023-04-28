import React, { Component } from "react";
export class State extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }
    render(){
        return<div>
            <p>count:{this.state.count}</p>
            <button onClick={()=>this.setState({count:this.state.count+1})}>increment</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>decrement</button>
        </div>
    
    }
}
export default State;