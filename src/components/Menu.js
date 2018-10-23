import React, { Component } from 'react';
import Navbar from './Nabvar';
import SectionMenu from './SectionMenu';
import SectionOrder from './SectionOrder';
import './Menu.css'

export default class Menu extends Component{
    render(){
        return(
            <div className="container">
            <Navbar />
                <div className="content row">
                    <SectionMenu/>
                    <SectionOrder/>
                </div>
            </div>
        );
    }
}