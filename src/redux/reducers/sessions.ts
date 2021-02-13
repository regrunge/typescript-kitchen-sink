import actions from '../actions';
import Session, { SessionType } from '../../models/session';
const uuid = require('react-native-uuid');

const sessions = (state: SessionType[] = [], action: any) => {
  const clone = [...state];

  switch (action.type) {
    case actions.ADD_SESSION:
      const newSession: SessionType = new Session(
        uuid.v4(),
        action.thingId,
        new Date(),
        0,
        false,
      );

      clone.push(newSession);

      return clone;
    case actions.EDIT_SESSION:
      const selectedSessionIndex = clone.findIndex(
          (s) => s.id === action.session.id,
      );

      clone.splice(selectedSessionIndex, 1, action.session);

      return clone;
    case actions.DELETE_SESSION:
      const selectedSessionIndexTBD = clone.findIndex((s) => s.id === action.id);
      clone.splice(selectedSessionIndexTBD, 1);

      return clone;
    case actions.RESET_SESSIONS:
      return [];
    default:
      return state;
  }
};

export default sessions;
