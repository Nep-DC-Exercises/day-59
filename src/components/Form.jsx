import React, { Component } from "react";
import { connect } from "react-redux";
import { setActivity, setName } from "../redux/activity";
class Form extends Component {
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
        e.persist();
        e.preventDefault();
        this.props.setName(this.props.id, this.state.name);
        this.props.setActivity(this.props.id, this.state.activity);
    }

    render() {
        return (
            <div>
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

const mapDispatchToProps = dispatch => {
    return {
        setName: (id, name) => dispatch(setName(id, name)),
        setActivity: (id, activity) => dispatch(setActivity(id, activity))
    };
};

export default connect(null, mapDispatchToProps)(Form);
