import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Activities} from '../modules/activities.model'
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Schedules } from '../modules/schedules.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  constructor (
    private apiService: ApiService
  ) {}

  get(): Observable<Activities> {
    return this.apiService.get('/activities')
      .pipe(map((data: {activities: Activities}) => data.activities));
  }

  getByGroup(group: string, day: string): Observable<Activities[]> {
    return this.apiService
      .get(
        '/activities?' +
          '&dt=' +
          day +
          '&_sort=day,pair&_order=asc'
      )
      .pipe(
        map(
          (data: { schedules: Array<Activities> }) =>
            data as any as Array<Activities>
        )
      );
  }
}
