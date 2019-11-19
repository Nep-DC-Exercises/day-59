import React from "react";
import Cat from "./Cat";
import { connect } from "react-redux";

const CatLadyComponent = ({ catLady}) => {
    // console.log("Here's the catlady object", catLady.cats[1001])
    return (
        <>
            <h1>List of all cats</h1>
            <ul>
                {Object.keys(catLady.cats).map(cat => {
                    return (
                        <>
                            <li>
                                <Cat
                                    id={cat}
                                    cat={catLady.cats[cat]}
                                />
                            </li>
                        </>
                    );
                })}
            </ul>
        </>
    );
};

const mapStateToProps = state => {
    const activity = state;
    return activity;
};

export default connect(mapStateToProps)(CatLadyComponent);
