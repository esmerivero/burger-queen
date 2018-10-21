import React, { Component } from 'react';
import './Breakfast.css';
import Data from '../Menu.json';

export default class Breakfast extends Component{

    // componentDidMount(){
    //     console.log(Data);
    // }

    render(){        
        return(
            <section className="button-breakfast">
                <button type="button" className="btn btn-primary btn-lg btn-menu">Café americano<br/>$5.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Café con leche<br/>$7.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Emparedado<br/>Jamón con queso<br/>$10.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Jugo natural<br/>$7.00</button>
            </section>
        );
    }
}