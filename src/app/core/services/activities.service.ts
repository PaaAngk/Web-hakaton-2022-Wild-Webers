import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Activities } from '../modules/activities.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Schedules } from '../modules/schedules.model';
import { TuiDay } from '@taiga-ui/cdk';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  private listSubject = new ReplaySubject<Activities[]>(1);
  public list = this.listSubject.asObservable();

  constructor(private apiService: ApiService) {}

  // get(): Observable<Activities> {
  //   return this.apiService.get('/activities')
  //     .pipe(map((data: {activities: Activities}) => data.activities));
  // }

  get(day: string): Observable<Activities[]> {
    return this.apiService
      .get('/activities?' + 'dt=' + day + '&_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }

  getByGroup(group: string,week_begining?: TuiDay): Observable<Activities[]> {
    var param:string='dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    
    return this.apiService
      .get('/activities?groups_like=' +group+'&'+ param + '_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }

  getByTeachers(teachers: string,week_begining?: TuiDay): Observable<Activities[]> {
    var param:string='dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    
    return this.apiService
      .get('/activities?teachers_like=' +teachers+'&'+ param + '_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }

  getByAuditories(auditories: string,week_begining?: TuiDay): Observable<Activities[]> {
    var param:string='dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    param=param+'dt=' +week_begining?.year+'-'+week_begining?.formattedMonthPart+'-'+week_begining?.formattedDayPart+'&';
    week_begining=week_begining?.append(new TuiDay(0,0,1));
    
    return this.apiService
      .get('/activities?auditories_like=' +auditories+'&'+ param + '_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }
}
