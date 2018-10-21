import React, { Component } from 'react';
import Breakfast from './Breakfast';
import Meal from './Meal';

export default class SectionMenu extends Component{
    render(){
        return(
            <section className="col-md-7">
                <Breakfast/>
                {/* <Meal /> */}
            </section>
        );
    }
}