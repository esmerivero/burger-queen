import React, { Component } from 'react';
import Breakfast from './Breakfast';
import Meal from './Meal';

// manejar los props conditional render

export default class SectionMenu extends Component{
    constructor(props){
        super(props);

        this.handleChangeBreakfast = this.handleChangeBreakfast.bind(this);
        this.handleChangeMeal = this.handleChangeMeal.bind(this);

        this.state={
            breakfast:this.props.breakfasMenu,
            meal:this.props.mealMenu
        }
    }

    handleChangeBreakfast() {
        this.setState({breakfast:this.props.breakfasMenu, meal:this.props.mealMenu});
    }

    handleChangeMeal() {
        this.setState({breakfast:false, meal:true});
    }

    render(){
        if(this.state.breakfast){
            return(
                <section className="col-md-7">
    
                 <section className="mr-auto">
                    <button type="button" className="btn btn-primary btn-lg buttons" onClick={this.handleChangeBreakfast}>Desayuno</button>
                    <button type="button" className="btn btn-primary btn-lg buttons" onClick={this.handleChangeMeal}>Comida / cena</button>
                </section>
                    <Breakfast />
                </section>
            );
        }
        else{
            return(
                <section className="col-md-7">
    
                 <section className="mr-auto">
                    <button type="button" className="btn btn-primary btn-lg buttons" onClick={this.handleChangeBreakfast}>Desayuno</button>
                    <button type="button" className="btn btn-primary btn-lg buttons" onClick={this.handleChangeMeal}>Comida / cena</button>
                </section>
                    <Meal />
                </section>
            );
        }
    }
}