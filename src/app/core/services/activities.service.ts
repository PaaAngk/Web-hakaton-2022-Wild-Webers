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


  getParametrDay(week_begining?: TuiDay):string{
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
    return param
  }

  getActivitiesByGroup(group: string,showProjects:boolean,showEvents:boolean,week_begining?: TuiDay): Observable<Activities[]> {
    var param:string='';
    //отображать проекты
    if(showProjects){
      if(showEvents){
        //показывать мероприятия и проекты
        param='type=0&type=1&type=3&type=4&'
      }else{
        //только проекты показывать
        param='type=1&type=3&type=4&'
      }
    }else {
      //не отображать проекты
      if(showEvents){
        //только мепроприятия
        param='type=0&type=3&type=4&'
      }else{
        //показывать активити только с переносами
        param='type=3&type=4&'
      }
    }
    // console.log(param)
    // console.log(showProjects)
    // console.log(showEvents)
    return this.apiService
      .get('/activities?'+param+'groups_like=' +group+'&'+ this.getParametrDay(week_begining) + '_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }

  getActivitiesByTeachers(group: string,showProjects:boolean,showEvents:boolean,week_begining?: TuiDay): Observable<Activities[]> {
    var param:string='';
    //отображать проекты
    if(showProjects){
      if(showEvents){
        //показывать мероприятия и проекты
        param='type=0&type=1&type=3&type=4&'
      }else{
        //только проекты показывать
        param='type=1&type=3&type=4&'
      }
    }else {
      //не отображать проекты
      if(showEvents){
        //только мепроприятия
        param='type=0&type=3&type=4&'
      }else{
        //показывать активити только с переносами
        param='type=3&type=4&'
      }
    }
    // console.log(param)
    // console.log(showProjects)
    // console.log(showEvents)
    return this.apiService
      .get('/activities?'+param+'teachers_like=' +group+'&'+ this.getParametrDay(week_begining) + '_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }


  getActivitiesByAuditories(group: string,showProjects:boolean,showEvents:boolean,week_begining?: TuiDay): Observable<Activities[]> {
    var param:string='';
    //отображать проекты
    if(showProjects){
      if(showEvents){
        //показывать мероприятия и проекты
        param='type=0&type=1&type=3&type=4&'
      }else{
        //только проекты показывать
        param='type=1&type=3&type=4&'
      }
    }else {
      //не отображать проекты
      if(showEvents){
        //только мепроприятия
        param='type=0&type=3&type=4&'
      }else{
        //показывать активити только с переносами
        param='type=3&type=4&'
      }
    }
    // console.log(param)
    // console.log(showProjects)
    // console.log(showEvents)
    return this.apiService
      .get('/activities?'+param+'auditories_like=' +group+'&'+ this.getParametrDay(week_begining) + '_sort=dt,pair&_order=asc')
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }

  
}
