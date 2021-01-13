export interface ThingType {
  id: string;
  name: string;
  durationMinutes: number;
  weeklyRecurrence?: boolean[]; // [0,0,0,1,0,0,0] IF only on Thursday
  notificationTime?: number;
  color?: string;
}

class Thing implements ThingType {
    public durationMinutes: number;
    public id: string;
    public name: string;
    public color?: string;
    public notificationTime?: number;
    public weeklyRecurrence?: boolean[];

    constructor(
        durationMinutes: number,
        id: string,
        name: string,
        color?: string,
        notificationTime?: number,
        weeklyRecurrence?: boolean[]
    ){
        this.durationMinutes = durationMinutes;
        this.id = id;
        this.name = name;
        this.color = color;
        this.notificationTime = notificationTime || 0;
        this.weeklyRecurrence = weeklyRecurrence;
    }
}

export default Thing;
