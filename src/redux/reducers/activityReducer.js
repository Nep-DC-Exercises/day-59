import { ACTION_SET_ACTIVITY, ACTION_SET_NAME } from "../actionTypes";

const initialState = {
    name: "Guster",
    activity: "blep"
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_ACTIVITY: {
            const { activityValue } = action.payload;
            console.log("action set activity fired")

            return {
                ...state,
                activity: activityValue
            };
        }
        case ACTION_SET_NAME: {
            const { nameValue } = action.payload;
            console.log("action set name fired")

            return {
                ...state,
                name: nameValue
            };
        }
        default: {
            return state;
        }
    }
};

export default activityReducer;
