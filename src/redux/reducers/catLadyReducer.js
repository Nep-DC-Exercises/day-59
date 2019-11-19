import {
    ACTION_SET_ACTIVITY,
    ACTION_SET_NAME,
    ACTION_ADD_CAT
} from "../actionTypes";

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
                    [id]: {
                        activity: activityValue
                    }
                }
            };
        }
        case ACTION_SET_NAME: {
            const { id, nameValue } = action.payload;
            return {
                ...state,
                name: nameValue
            };
        }
        case ACTION_ADD_CAT: {
            const { catName } = action.payload;
            return {
                ...state,
                name: catName
            };
        }
        default: {
            return state;
        }
    }
};

export default catLadyReducer;
