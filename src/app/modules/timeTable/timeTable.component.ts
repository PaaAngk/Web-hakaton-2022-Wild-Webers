import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Schedules } from './../../core/modules/schedules.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/core/services';
import {ActivitiesService} from 'src/app/core/services/activities.service';
import {TuiDay,TuiDayOfWeek} from '@taiga-ui/cdk';
import { TUI_FIRST_DAY_OF_WEEK } from '@taiga-ui/core';



@Component({
  selector: 'app-timeTable',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timeTable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeTableComponent implements OnInit {
  tableGroupData?: Array<Schedules>

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schedulesService: SchedulesService

    

    //private activitiesService: ActivitiesService

  ) { }


  date: TuiDay | null = null;
    onDayClick(day: TuiDay): void {
      this.date = day;
      var weekStartDate: TuiDay;
      switch(day.dayOfWeek()){
        case 0: weekStartDate = day; break;
        case 1: weekStartDate = new TuiDay(day.year, day.month, day.day - 1); break;
        case 2: weekStartDate = new TuiDay(day.year, day.month, day.day - 2); break;
        case 3: weekStartDate = new TuiDay(day.year, day.month, day.day - 3); break;
        case 4: weekStartDate = new TuiDay(day.year, day.month, day.day - 4); break;
        case 5: weekStartDate = new TuiDay(day.year, day.month, day.day - 5); break;
        case 6: weekStartDate = new TuiDay(day.year, day.month, day.day - 6); break;
      }
      // Найти расписание группы
     
  }

  ngOnInit() {
  }

  clickButton(){
    const d: Date = new Date();
    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data=>( console.log(data), this.tableGroupData = data))
  }
}
