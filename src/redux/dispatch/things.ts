import { ADD_THING, EDIT_THING, DELETE_THING } from "../actions";
import {ThingType} from "../../models/thing";

export const addThing = (thing: ThingType) => {
    return {
        type: ADD_THING,
        thing,
    };
};

export const deleteThing = (id: string) => {
    return {
        type: DELETE_THING,
        id,
    };
};

export const editThing = (thing: ThingType) => {
    return {
        type: EDIT_THING,
        thing,
    };
};


// TODO: Seva! duplicte this file
