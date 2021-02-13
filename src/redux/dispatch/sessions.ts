import { ADD_SESSION } from '../actions';

export const addSession = (thingId: string | number | null) => {
  return {
    type: ADD_SESSION,
    thingId,
  };
};
