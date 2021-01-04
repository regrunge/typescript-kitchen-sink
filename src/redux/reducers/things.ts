import actions from "../actions";
import { ThingType } from "../../models/thing";

const things = (state: ThingType[] = [], action: any) => {
    switch (action.type) {
        case actions.ADD_THING:
            const clone = [...state];

            clone.push(action.thing);

            return clone;
        default:
            return state;
    }
};

export default things;
