import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListEntry extends Component{
    constructor(props){
        super(props);
        this.state = {entry: '', title: ''};
    }
    render(){
        return (
            <div className='ListEntry'>
                <div>
                    <h4 value ={this.state.entry}></h4>
                    <p value= {this.state.title}></p>
                </div>
            </div>
        );
    }
}
export default ListEntry;