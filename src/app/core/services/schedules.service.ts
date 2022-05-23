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

  search(input: string, week_begining: string): Observable<Schedules[]> {
    var string:string ='';
    if (this.listGroup.includes(input)) {
      //вернуть расписание группы
      string='groups'
    } else if (this.listTeachers.includes(input)) {
      //вернуть расписание препода
      string='teachers'
    } else if (this.listAuditories.includes(input)) {
      //вернуть расписание аудитории
      string='auditories'
    } else {
      //вернуть ошибку
    }
    return this.apiService
        .get(
          '/schedules?'+string+'=' +
            input +
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
      this.listTeachers = listTeachers;
      this.listGroup = listGroup;
      this.listAuditories = listAuditories;
    });
  }
}
