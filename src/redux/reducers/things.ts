import actions from "../actions";
import { ThingType } from "../../models/thing";

const things = (state: ThingType[] = [], action: any) => {
    const clone = [...state];

    switch (action.type) {
        case actions.ADD_THING:
            clone.push(action.thing);

            return clone;
        case actions.COMPLETE_THING:
            // DO STUFF

            return clone;
        default:
            return state;
    }
};

export default things;
