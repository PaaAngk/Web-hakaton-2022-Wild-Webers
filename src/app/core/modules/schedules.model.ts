  export interface Schedules {
    id: number;
    type: number;
    day: number;
    pair:number;
    week_begining:string;
    groups: string;
    subgroup_number: number;
    discipline: string;
    teachers:[];
    auditories:[];
  }
  