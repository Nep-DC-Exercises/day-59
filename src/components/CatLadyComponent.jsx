import React from "react";
import Cat from "./Cat";
import AddCatForm from "./AddCatForm";
import { connect } from "react-redux";

const CatLadyComponent = ({ catLady }) => {
    return (
        <>
            <ul>
                {Object.keys(catLady.cats).map(cat => {
                    return (
                        <li key={cat}>
                            <Cat id={cat} cat={catLady.cats[cat]} />
                        </li>
                    );
                })}
            </ul>
            <AddCatForm />
        </>
    );
};

const mapStateToProps = state => {
    const activity = state;
    return activity;
};

export default connect(mapStateToProps)(CatLadyComponent);
