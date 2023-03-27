import { setValueFromPath } from "./StateUtil";

export const formReducer = (state: any, action: any) => {
    switch (action.type) {
        case "SET_VALUE":
            return setValueFromPath(state, action.payload.dataPath, action.payload.value);
        default:
            return state;
    }
};
