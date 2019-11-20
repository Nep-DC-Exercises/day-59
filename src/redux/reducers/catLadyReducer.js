import {
    ACTION_SET_ACTIVITY,
    ACTION_SET_NAME,
    ACTION_ADD_CAT
} from "../actionTypes";

import nextId from "react-id-generator"

const initialState = {
    cats: {
        1001: {
            name: "Beans",
            activity: "meowing"
        },
        1002: {
            name: "Bandit",
            activity: "playing"
        }
    }
};


const catLadyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_ACTIVITY: {
            const { id, activityValue } = action.payload;
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]: {
                        ...state.cats[id],
                        activity: activityValue
                    }
                }
            };
        }
        case ACTION_SET_NAME: {
            const { id, nameValue } = action.payload;
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [id]: {
                        name: nameValue
                    }
                }
            };
        }
        case ACTION_ADD_CAT: {
            const { catName, activityValue } = action.payload;
            let randomId = nextId();
            return {
                ...state,
                cats: {
                    ...state.cats,
                    [randomId]: {
                        name: catName,
                        activity: activityValue
                    }
                }
            };
        }
        default: {
            return state;
        }
    }
};

export default catLadyReducer;
