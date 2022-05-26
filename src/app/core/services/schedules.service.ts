import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';

import { Schedules } from '../modules/schedules.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {

  constructor(private apiService: ApiService) {
    this.findListGroupAndTeachersAndAuditories();
    
  }
  private listGroupSubject = new ReplaySubject<string[]>(1);
  public listGroup = this.listGroupSubject.asObservable();
  private listTeachersSubject = new ReplaySubject<string[]>(1);
  public listTeachers = this.listTeachersSubject.asObservable();
  private listAuditoriesSubject = new ReplaySubject<string[]>(1);
  public listAuditories = this.listAuditoriesSubject.asObservable();

  get(): Observable<Schedules[]> {
    return this.apiService
      .get('/schedules')
      .pipe(
        map(
          (data: { schedules: Array<Schedules> }) =>
            data as any as Array<Schedules>
        )
      );
  }

  getByGroup(group: string, week_begining: string): Observable<Schedules[]> {
    return this.apiService
      .get(
        '/schedules?groups_like=' +
          group +
          '&week_begining=' +
          week_begining +
          '&_sort=day,pair&_order=asc'
      )
      .pipe(
        map(
          (data: { schedules: Array<Schedules> }) =>
            data as any as Array<Schedules>
        )
      );
  }
  getByTeachers(
    teachers: string,
    week_begining: string
  ): Observable<Schedules[]> {
   
    return this.apiService
      .get(
        '/schedules?teachers_like=' +
          teachers +
          '&week_begining=' +
          week_begining +
          '&_sort=day,pair&_order=asc'
      )
      .pipe(
        map(
          (data: { schedules: Array<Schedules> }) =>
            data as any as Array<Schedules>
        )
      );
  }
  getByAuditories(
    auditories: string,
    week_begining: string
  ): Observable<Schedules[]> {
    return this.apiService
      .get(
        '/schedules?auditories_like=' +
          auditories +
          '&week_begining=' +
          week_begining +
          '&_sort=day,pair&_order=asc'
      )
      .pipe(
        map(
          (data: { schedules: Array<Schedules> }) =>
            data as any as Array<Schedules>
        )
      );
  }

  findListGroupAndTeachersAndAuditories() {
    var schedules: Schedules[] = [];
    var listGroup: string[] = [];
    var listTeachers: string[] = [];
    var listAuditories: string[] = [];
    this.get().subscribe((data) => {
      schedules = data;

      for (let item of schedules) {
        for (let i in item.groups) {
          if (!listGroup.includes(item.groups[i])) {
            listGroup.push(item.groups[i]);
          }
        }

        for (let i in item.teachers) {
          if (!listTeachers.includes(item.teachers[i])) {
            listTeachers.push(item.teachers[i]);
          }
        }

        for (let i in item.auditories) {
          if (!listAuditories.includes(item.auditories[i])) {
            listAuditories.push(item.auditories[i]);
          }
        }
      }
      this.listGroupSubject.next(listGroup);
      this.listTeachersSubject.next(listTeachers);
      this.listAuditoriesSubject.next(listAuditories);
    });
  }
}
