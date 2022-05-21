import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Activities} from '../modules/activities.model'
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';

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
}
