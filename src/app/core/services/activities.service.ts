import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< Updated upstream
import {Activities} from '../modules/activities.model'
=======
import {Activities} from '../modules/activities.module'
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream

  }
}
=======
  }
}
>>>>>>> Stashed changes
