import React, { Component } from 'react';
import './SectionOrder.css';

export default class SectionOrder extends Component{
    render(){
        return(
            <section className="col-md-5">
                <div>
                    <table className="table table-dark">
                    <tbody>
                        <tr>
                        <td>Café americano</td>
                        <td>5</td>
                        <td>icono</td>
                        </tr>
                        <tr>
                        <td>Café con leche</td>
                        <td>7</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                
            </section>
        );
    }
}