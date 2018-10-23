import React, { Component } from 'react';
import './Breakfast.css';
import Data from '../Menu.json';

export default class Meal extends Component{
    constructor(props){
        super(props);

        this.handleChangeMenuMeal = this.handleChangeMenuMeal.bind(this);
    }

    handleChangeMenuMeal(){
        const menu = (Data.meal).map((item) => {
            return (
                <button type="button" className="btn btn-primary btn-lg btn-menu">{item.type}<br/>{item.price}</button>
            );
        });
        return menu;
    }
    render(){
        return(
            <section className="button-breakfast">
                <this.handleChangeMenuMeal />
            </section>
        );
    }
}