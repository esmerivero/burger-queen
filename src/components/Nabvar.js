import React, { Component } from 'react';
import Logo from '../assets/bq-logo.png';
import './Navbar.css';
import ButtonLogout from './ButtonLogout';
import Meal from './Meal';

export default class Navbar extends Component{
    constructor(props){
        super(props);

        this.handleChangeBreakfast = this.handleChangeBreakfast.bind(this);
        this.handleChangeMeal = this.handleChangeMeal.bind(this);
    }

    handleChangeBreakfast() {
        console.log('Entraste a desayuno');
    }

    handleChangeMeal() {
        console.log('Entraste a comida');
    }

    render(){
        return(
            <header>
                <nav className="navbar navbar-light bg-light nav-pills">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="60" height="auto" alt="Logotipo de burger queen"/>
                    </a>

                    <section className="mr-auto">
                        <button type="button" className="btn btn-primary btn-lg buttons" onClick={this.handleChangeBreakfast}>Desayuno</button>
                        <button type="button" className="btn btn-primary btn-lg buttons" onClick={this.handleChangeMeal}>Comida / cena</button>
                    </section>

                    <ButtonLogout />
                </nav>
            </header>
        );
    }
}