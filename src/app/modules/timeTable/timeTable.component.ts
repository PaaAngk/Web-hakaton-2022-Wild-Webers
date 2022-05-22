import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Schedules } from './../../core/modules/schedules.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/core/services';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { TuiDay, TuiDayOfWeek } from '@taiga-ui/cdk';

@Component({
  selector: 'app-timeTable',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timeTable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeTableComponent implements OnInit {

  schedules: Schedules[]=[];
  currentDay:number =1 

  tableGroupData?: Array<Schedules> =[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schedulesService: SchedulesService //private activitiesService: ActivitiesService
  ) { 
    this.onDayClick(TuiDay.fromLocalNativeDate(new Date()))
  }


  date: TuiDay | null = null;
  onDayClick(day: TuiDay): void {
    this.date = day;
    var weekStartDate: TuiDay;
    switch (day.dayOfWeek()) {
      case 0:
        weekStartDate = day;
        break;
      case 1:
        weekStartDate = new TuiDay(day.year, day.month, day.day - 1);
        break;
      case 2:
        weekStartDate = new TuiDay(day.year, day.month, day.day - 2);
        break;
      case 3:
        weekStartDate = new TuiDay(day.year, day.month, day.day - 3);
        break;
      case 4:
        weekStartDate = new TuiDay(day.year, day.month, day.day - 4);
        break;
      case 5:
        weekStartDate = new TuiDay(day.year, day.month, day.day - 5);
        break;
      case 6:
        weekStartDate = new TuiDay(day.year, day.month, day.day - 6);
        break;
      default: weekStartDate = day
    }

    // Найти расписание группы
    this.currentDay = weekStartDate.day
  }

  ngOnInit() {}

  clickButton() {
    const d: Date = new Date();

    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data => this.tableGroupData=data);
    //this.schedulesService.getTeachers("Морра","2022-04-11").subscribe(data=>( console.log(data)))
    //this.schedulesService.getAuditories("Танцплощадка","2022-04-11").subscribe(data=>( console.log(data)))

    console.log(this.schedulesService.listGroup);
    console.log(this.schedulesService.listAuditories);
    console.log(this.schedulesService.listTeachers);
  }
}
