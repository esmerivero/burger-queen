import React, { Component } from 'react';
import Breakfast from './Breakfast';
import Meal from './Meal';

// manejar los props conditional render

export default class SectionMenu extends Component{

    componentDidMount(){
        console.log(this.props.mealOption);
        
    }

    render(){
        return(
            <section className="col-md-7">
                <Breakfast/>
                <Meal />
            </section>
        );
    }
}