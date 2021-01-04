import { ADD_THING } from "../actions";
import {ThingType} from "../../models/thing";

export const addThing = (thing: ThingType) => {
    return {
        type: ADD_THING,
        thing,
    };
};
