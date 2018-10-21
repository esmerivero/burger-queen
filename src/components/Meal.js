import React, { Component } from 'react';
import './Breakfast.css';

export default class Meal extends Component{
    render(){
        return(
            <section className="button-breakfast">
                <button type="button" className="btn btn-primary btn-lg btn-menu">Hamburguesa simple<br/>$10.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Hamburguesa doble<br/>$15.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Papas fritas<br/>$5.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Aros de cebolla<br/>$5.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Agua 500ml<br/>$5.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Agua 750ml<br/>$8.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Refresco 500ml<br/>$7.00</button>
                <button type="button" className="btn btn-primary btn-lg btn-menu">Refresco 750ml<br/>$10.00</button>
            </section>
        );
    }
}