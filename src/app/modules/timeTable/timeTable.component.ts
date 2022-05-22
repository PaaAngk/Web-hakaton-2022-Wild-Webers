import { Schedules } from './../../core/modules/schedules.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/core/services';
import {ActivitiesService} from 'src/app/core/services/activities.service';


@Component({
  selector: 'app-timeTable',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timeTable.component.scss']
})
export class TimeTableComponent implements OnInit {
  tableGroupData?: Array<Schedules>

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schedulesService: SchedulesService

    //private activitiesService: ActivitiesService

  ) { }

  ngOnInit() {
  }

  clickButton(){
    const d: Date = new Date();
    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data=>( console.log(data), this.tableGroupData = data))
  }
}
