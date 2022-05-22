  export interface Activities {
    id: number;
    dt: string;
    pair: number;
    description:string;
    groups:[];
    teachers: [];
    auditories:[];
    type: number;
    related_queries:[];
    affected_schedule_id?:number;
  }
  