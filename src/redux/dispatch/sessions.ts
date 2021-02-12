import { EDIT_THING, DELETE_THING, ADD_SESSION} from '../actions';
import {ThingType} from '../../models/thing';
import { SessionType } from '../../models/session';

export const sessionThing = (thing: SessionType) => {
  return {
    type: ADD_SESSION,
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
