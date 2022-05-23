import { Schedules } from './../../core/modules/schedules.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
  
})
export class CalendarCardComponent implements OnInit {
  @Input()
  scheduleItem?: Schedules;

  @Input()
  class?: String;
  
  constructor() { }

  ngOnInit() {
  }

}
