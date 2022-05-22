import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedules } from './../../core/modules/schedules.model';
import { SchedulesService } from 'src/app/core/services';
import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';
import {TuiDay,TuiDayOfWeek} from '@taiga-ui/cdk';
const INCOME = {
  name: 'Income',
  items: [
      'Donations',
      'Product placement',
      'Sponsorship',
      'Found on the street',
      'Unexpected inheritance',
      'Investments',
      'Color copier',
  ],
};

const EXPENSES = {
  name: 'Expenses',
  items: [
      'Energy drinks',
      'Coffee',
      'Ramen',
      'Bills',
      'Back medicine',
      'Warhammer 40000 figurines',
  ],
};


@Component({
  selector: 'app-timeTable',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timeTable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeTableComponent implements OnInit {
  schedules: Schedules[]=[];

  tableGroupData?: Array<Schedules>

  valueGroups = [];
  valueTeachers = [];
  valueAuditories = [];
 
    
    readonly itemsGroups = ["df", "gfdg"];
    readonly itemsTeachers = ["fff"];
    readonly itemsAuditories = ["bbb"];
    items = [];

 
    readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (items1, items2) =>
        items1.length === items2.length && items1.every(item => items2.includes(item));
 
    // readonly valueContent: TuiStringHandler<TuiContextWithImplicit<readonly string[]>> =
    //     ({$implicit}) => {
    //         if (!$implicit.length) {
    //             return ' ';
    //         }
 
    //         const selected = this.items.find(({items}) =>
    //             this.identityMatcher($implicit, items),
    //         );
 
    //         return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;
    //     };

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
    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data => this.schedules=data);
    //this.schedulesService.getTeachers("Морра","2022-04-11").subscribe(data=>( console.log(data)))
    //this.schedulesService.getAuditories("Танцплощадка","2022-04-11").subscribe(data=>( console.log(data)))
    console.log(this.schedules)

  }
  
}
