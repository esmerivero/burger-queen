import React, { Component } from 'react';
// import {ConfigFire} from '../firebase/Firebase';


export default class ButtonLogout extends Component{
    constructor(props){
        super(props);

        this.handleSendOrder = this.handleSendOrder.bind(this);

        this.state = {
            email: null,
            pass: '',
        };
    }

    handleSendOrder(){
        // ConfigFire.auth().signOut()
        // .then(
        //     this.props.history.replace('/signin')
        // )
        // .catch(function(error) {
        //     // An error happened.
        // });

        console.log('Se envió a cocina');
        
    }
    render(){
        return(
            <button type="button" className="btn btn-warning justify-content-center" onClick={this.handleSendOrder}>Enviar a cocina</button>
        );
    }
}