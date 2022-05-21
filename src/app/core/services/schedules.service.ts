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
      .pipe(map((data: {schedules: Schedules}) => data.schedules));

  }
}
