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
    default:
      return state;
  }
};

export default sessions;
