import { ADD_THING, ADD_COLORPICKER } from "../actions";
import {ThingType} from "../../models/thing";

export const addThing = (thing: ThingType) => {
    return {
        type: ADD_THING,
        thing,
    };
};

export const Picker = () => {
    return {
      type: ADD_COLORPICKER,
      color:''  
    };
};
    
