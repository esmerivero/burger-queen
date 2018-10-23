import React, { Component } from 'react';
import './Breakfast.css';
import Data from '../Menu.json';

export default class Breakfast extends Component{
    constructor(props){
        super(props);

        this.handleMenuBreakfast = this.handleMenuBreakfast.bind(this);
    }

    handleMenuBreakfast(){
        const menu = (Data.breakfast).map((item) => {
            return (
                <button type="button" className="btn btn-primary btn-lg btn-menu">{item.type}<br/>{item.price}</button>
            );
        });
        return menu;
    }

    render(){        
        return(
            <section className="button-breakfast">
                <this.handleMenuBreakfast />
            </section>
        );
    }
}