import React, { Component } from 'react';
class Data extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>
                <label htmlFor="title">{this.props.title}</label>
                <br/>
                <input id="title" style={{textAlign:'center'}}name="title" value={this.props.value}disabled/>
            </div>
        )
    }
}
export default Data;