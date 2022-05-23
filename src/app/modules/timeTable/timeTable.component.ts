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
  weekDays:TuiDay[] = [];

  tableGroupData?: Array<Schedules> =[]

  valueGroups = [];
  valueTeachers = [];
  valueAuditories = [];
 
    
    itemsGroups:string[] =[];
    itemsTeachers:string[] =[];
    itemsAuditories :string[] =[];
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
  ) { 
    this.onDayClick(TuiDay.fromLocalNativeDate(new Date()))
    this.schedulesService.listGroup.subscribe(
      (data) => {
        this.itemsGroups = data;
      }
    );
    this.schedulesService.listTeachers.subscribe(
      (data) => {
        this.itemsTeachers = data;
      }
    );
    this.schedulesService.listAuditories.subscribe(
      (data) => {
        this.itemsAuditories = data;
      }
    );
  }


  date: TuiDay | null = null;
  onDayClick(day: TuiDay): void {
    this.weekDays = [];
    this.date = day;
    var weekStartDate: TuiDay;
    switch (day.dayOfWeek()) {
      case 0:
        weekStartDate=day;
        break;
      case 1:
        weekStartDate=day.append(new TuiDay(0,0,1),true);
        break;
      case 2:
        weekStartDate=day.append(new TuiDay(0,0,2),true);
        break;
      case 3:
        weekStartDate=day.append(new TuiDay(0,0,3),true);
        break;
      case 4:
        weekStartDate=day.append(new TuiDay(0,0,4),true);
        break;
      case 5:
        weekStartDate=day.append(new TuiDay(0,0,5),true);
        break;
      case 6:
        weekStartDate=day.append(new TuiDay(0,0,6),true);
        break;
      default: weekStartDate = day
    }
    this.weekDays.push(weekStartDate, weekStartDate.append(new TuiDay(0,0,1)),
    weekStartDate.append(new TuiDay(0,0,2)), weekStartDate.append(new TuiDay(0,0,3)),
    weekStartDate.append(new TuiDay(0,0,4)), weekStartDate.append(new TuiDay(0,0,5)),
    weekStartDate.append(new TuiDay(0,0,6)));
  }

  ngOnInit() {
    
    
  }

  clickButton() {
    const d: Date = new Date();

    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data => {this.tableGroupData=data
      console.log(data)});
    //this.schedulesService.getTeachers("Морра","2022-04-11").subscribe(data=>( console.log(data)))
    //this.schedulesService.getAuditories("Танцплощадка","2022-04-11").subscribe(data=>( console.log(data)))

    console.log(this.schedulesService.listGroup);
    console.log(this.schedulesService.listAuditories);
    console.log(this.schedulesService.listTeachers);
    
  }
  
}
