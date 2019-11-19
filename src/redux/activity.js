import { ACTION_SET_ACTIVITY, ACTION_SET_NAME, ACTION_ADD_CAT } from "./actionTypes";

export const setActivity = (id, activityValue) => ({
    type: ACTION_SET_ACTIVITY,
    payload: {
        id,
        activityValue
    }
});

export const setName = (id, nameValue) => ({
    type: ACTION_SET_NAME,
    payload: {
        id,
        nameValue
    }
});
export const addCat = catName => ({
    type: ACTION_ADD_CAT,
    payload: {
        catName
    }
});
