import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Schedules} from '../modules/schedules.model'
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(): Observable<Schedules> {
    return this.apiService.get('/schedules')
      .pipe(map(data => data));
  }
  getGroup(group: string,week_begining:string): Observable<Schedules[]> {
    return this.apiService.get('/schedules?groups='+ group+"&week_begining="+week_begining+'&_sort=day,pair&_order=asc')
      .pipe(map((data: {schedules: Array<Schedules>}) => (data as any) as Array<Schedules>));
      
  }
  getTeachers(teachers: string,week_begining:string): Observable<Schedules[]> {
    return this.apiService.get('/schedules?teachers='+ teachers+"&week_begining="+week_begining+'&_sort=day,pair&_order=asc')
      .pipe(map((data: {schedules: Array<Schedules>}) => (data as any) as Array<Schedules>));
  }
  getAuditories(auditories: string,week_begining:string): Observable<Schedules[]> {
    return this.apiService.get('/schedules?auditories='+ auditories+"&week_begining="+week_begining+'&_sort=day,pair&_order=asc')
      .pipe(map((data: {schedules: Array<Schedules>}) => (data as any) as Array<Schedules>));
  }
  

}
