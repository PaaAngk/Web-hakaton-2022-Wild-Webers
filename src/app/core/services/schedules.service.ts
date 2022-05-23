import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedules } from '../modules/schedules.model';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SchedulesService {
  listGroup: string[] = [];
  listTeachers: string[] = [];
  listAuditories: string[] = [];
  constructor(private apiService: ApiService) {
    this.getListGroupAndTeachersAndAuditories();
  }


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


  getGroup(group: string, week_begining: string): Observable<Schedules[]> {
    return this.apiService
      .get(
        '/schedules?groups=' +
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
  getTeachers(
    teachers: string,
    week_begining: string
  ): Observable<Schedules[]> {
    return this.apiService
      .get(
        '/schedules?teachers=' +
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
  getAuditories(
    auditories: string,
    week_begining: string
  ): Observable<Schedules[]> {
    return this.apiService
      .get(
        '/schedules?auditories=' +
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

  getListGroupAndTeachersAndAuditories() {
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
      }
      this.listGroup = listGroup;

      for (let item of schedules) {
        for (let i in item.teachers) {
          if (!listTeachers.includes(item.teachers[i])) {
            listTeachers.push(item.teachers[i]);
          }
        }
      }
      this.listTeachers = listTeachers;

      for (let item of schedules) {
        for (let i in item.auditories) {
          if (!listAuditories.includes(item.auditories[i])) {
            listAuditories.push(item.auditories[i]);
          }
        }
      }
      this.listAuditories = listAuditories;
    });
  }

  
}
