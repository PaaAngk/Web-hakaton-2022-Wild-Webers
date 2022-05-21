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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schedulesService: SchedulesService
    //private activitiesService: ActivitiesService
  ) { }

  ngOnInit() {
  }

  clickButton(){
    this.schedulesService.getGroup("Снорки").subscribe(data=>( console.log(data.id)))
    //this.activitiesService.getGroup("Снорки").subscribe(data=>( console.log(data.id)))
  }

}
