import { Schedules } from './../../core/modules/schedules.model';
import { Component, Input, OnInit } from '@angular/core';
import { Activities } from 'src/app/core/modules/activities.model';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
  
})
export class CalendarCardComponent implements OnInit {
  @Input()
  scheduleItem?: Schedules;

  @Input()
  activitiesItem?: Activities;

  @Input()
  class?: String;
  
  constructor() { }

  ngOnInit() {
  }

}
