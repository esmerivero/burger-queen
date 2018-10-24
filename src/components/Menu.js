import React, { Component } from 'react';
import Navbar from './Nabvar';
import SectionMenu from './SectionMenu';
import SectionOrder from './SectionOrder';
import './Menu.css'

export default class Menu extends Component{
    constructor(props){
        super(props);

        this.state = {
            breakfast:true,
            meal:false
        }
    }

    render(){
        return(
            <div className="container">
            <Navbar />
                <div className="content row">
                    <SectionMenu breakfasMenu={this.state.breakfast} mealMenu={this.state.meal}/>
                    <SectionOrder/>
                </div>
            </div>
        );
    }
}