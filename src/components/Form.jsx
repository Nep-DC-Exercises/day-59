import React, { Component } from "react";

export default class Form extends Component {
    state = {
        name: "",
        activity: ""
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.setName(this.state.name);
        this.props.setActivity(this.state.activity);
    }

    render() {
        return (
            <div>
                <h2>Change the state!</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Name:
                        <input
                            type="text"
                            onChange={e => this.handleInputChange(e)}
                            name="name"
                            placeholder="Change the name!"
                        />
                    </label>
                    <label>
                        Activity:
                        <input
                            type="text"
                            onChange={event => this.handleInputChange(event)}
                            name="activity"
                            placeholder="Change the activity!"
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
