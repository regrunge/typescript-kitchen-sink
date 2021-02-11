export interface SessionType {
  id: string;
  thingId: string;
  date: Date;
  elapsedMinutes: number;
  completed: boolean;
}

class Session implements SessionType {
  id: string;
  thingId: string;
  date: Date;
  elapsedMinutes: number;
  completed: boolean;

  constructor(
    id: string,
    thingId: string,
    date: Date,
    elapsedMinutes: number,
    completed: boolean,
  ) {
    this.elapsedMinutes = elapsedMinutes;
    this.id = id;
    this.thingId = thingId;
    this.date = date;
    this.completed = completed;
  }
}

// const session = new Session('random', 'pianoThingID', new Date(), 0, false);

export default Session;
