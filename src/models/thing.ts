export interface ThingType {
  name: string;
  durationMinutes: number;
  weeklyRecurrence?: number[];
  notificationTime?: number;
  color?: string;
}

class Thing implements ThingType {
    public durationMinutes: number;
    public name: string;
    public color?: string;
    public notificationTime?: number;
    public weeklyRecurrence?: number[];

    constructor(
        durationMinutes: number,
        name: string,
        color?: string,
        notificationTime?: number,
        weeklyRecurrence?: number[]
    ){
        this.durationMinutes = durationMinutes;
        this.name = name;
        this.color = color;
        this.notificationTime = notificationTime || 0;
        this.weeklyRecurrence = weeklyRecurrence;
    }

    public getHumanNotificationTime(): string {
        if(!this.notificationTime || this.notificationTime === 0) {
            return '-/-';
        }

        const date = new Date(this.notificationTime);

        return date.toLocaleDateString('en-US');
    }
}

export default Thing;