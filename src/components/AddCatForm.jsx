import React, { Component } from "react";
import { connect } from "react-redux";
import { addCat } from "../redux/activity";

class AddCatForm extends Component {
    state = {
        name: "Default Name",
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

        const { name, activity } = this.state;
        if (activity.length < 1) {
            this.props.addCat(name, 'meowing');
        } else {
            this.props.addCat(name, activity);
        }
        
    }

    render() {
        return (
            <div>
                <h3>Add a new cat!</h3>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label>
                        Name:
                        <input
                            type="text"
                            onChange={e => this.handleInputChange(e)}
                            name="name"
                            placeholder="Add the name of a new cat!"
                        />
                    </label>
                    <label>
                        Activity:
                        <input
                            type="text"
                            onChange={event => this.handleInputChange(event)}
                            name="activity"
                            placeholder="What's the activity gonna be?"
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
        addCat: (name, activity) => dispatch(addCat(name, activity))
    };
};

export default connect(null, mapDispatchToProps)(AddCatForm);
