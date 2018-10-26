import React, { Component } from 'react';
import './SectionOrder.css';

export default class SectionOrder extends Component{
    constructor(props){
        super(props);
        this.handlePrintOrder = this.handlePrintOrder.bind(this);
    }

    handlePrintOrder(){
        
    }

    componentDidUpdate(){
        console.log(this.props.order);
        
    }

    render(){
        return(
            <section className="col-md-5">
                <div className="section-order">
                    
                </div>
                
            </section>
        );
    }
}