import actions from '../actions';
import {ThingType} from '../../models/thing';

const things = (state: ThingType[] = [], action: any) => {
  const clone = [...state];

  switch (action.type) {
    case actions.ADD_THING:
      clone.push(action.thing);

      return clone;
    case actions.EDIT_THING:
      const selectedThingIndex = clone.findIndex(
        (t) => t.id === action.thing.id,
      );

      clone.splice(selectedThingIndex, 1, action.thing);

      return clone;
    case actions.DELETE_THING:
      const selectedThingIndexTBD = clone.findIndex((t) => t.id === action.id);
      clone.splice(selectedThingIndexTBD, 1);

      return clone;
    case actions.SESSION_THING:
      const selectedThingIndexDT = clone.findIndex((t) => t.id === action.id);
      clone.splice(selectedThingIndexDT, 1, action.thing);

      return clone;
    case actions.COMPLETE_THING:
      // DO STUFF

      return clone;
    default:
      return state;
  }
};

export default things;
// TODO: Seva! duplicte this file
