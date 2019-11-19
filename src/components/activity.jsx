import React from "react";
import Form from "./Form"
import { connect } from "react-redux";
import { setActivity, setName } from "../redux/activity";

const Activity = ({ activity, setActivity, setName }) => {
    return (
        <>
            <div>
                <h1>Exercise 2</h1>
                <p>The cat's name is {activity.name}.</p>
                <p>Their current activity is {activity.activity}.</p>
            </div>
            <Form setActivity={setActivity} setName={setName} />
        </>
    );
};

const mapStateToProps = state => {
    const activity = state;
    return activity;
};

const mapDispatchToProps = dispatch => {
    return {
        setName: (name) => dispatch(setName(name)),
        setActivity: (activity) => dispatch(setActivity(activity))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Activity);
