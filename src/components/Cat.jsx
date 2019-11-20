import React, { Component } from "react";
import Form from "./Form";

class Cat extends Component {
    render() {
        const cat = this.props.cat;
        
        return (
            <>
                <p>{cat.name}</p>
                <p>{cat.activity}</p>
                <Form id={this.props.id} data={cat}/>
            </>
        );
    }
}

export default Cat;