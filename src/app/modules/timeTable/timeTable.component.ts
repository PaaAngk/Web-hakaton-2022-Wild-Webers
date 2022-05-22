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

    //this.schedulesService.get().subscribe(data=>( console.log(data)))
    const d: Date = new Date();
    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data=>( console.log(data)))
    //this.schedulesService.getTeachers("Морра","2022-04-11").subscribe(data=>( console.log(data)))
    //this.schedulesService.getAuditories("Танцплощадка","2022-04-11").subscribe(data=>( console.log(data)))
    

  }
}
