import {ADD_SESSION, DELETE_SESSION, EDIT_SESSION, RESET_SESSIONS} from '../actions';
import {SessionType} from "../../models/session";

export const addSession = (thingId: string | number | null) => {
  return {
    type: ADD_SESSION,
    thingId,
  };
};

export const editSession = (session: SessionType) => {
  return {
    type: EDIT_SESSION,
    session,
  };
};

export const deleteSession = (id: string | number | null) => {
  return {
    type: DELETE_SESSION,
    id,
  };
};

export const resetSessions = () => {
  return {
    type: RESET_SESSIONS,
  };
};
