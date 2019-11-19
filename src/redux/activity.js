import { ACTION_SET_ACTIVITY, ACTION_SET_NAME } from "./actionTypes";

export const setActivity = activityValue => ({
    type: ACTION_SET_ACTIVITY,
    payload: {
        activityValue
    }
});

export const setName = nameValue => ({
    type: ACTION_SET_NAME,
    payload: {
        nameValue
    }
});
