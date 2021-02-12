import {ADD_THING, EDIT_THING, DELETE_THING, SESSION_THING} from '../actions';
import {ThingType} from '../../models/thing';
import { SessionType } from "../../models/session";

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
export const sessionThing = (thing: SessionType) => {
  return {
    type: SESSION_THING,
    thing,
  };
};

// TODO: Seva! duplicte this file
export class completeThing {
}
