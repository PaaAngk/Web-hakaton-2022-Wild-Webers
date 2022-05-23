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
  styleUrls: ['./timeTable.component.scss']
})
export class TimeTableComponent implements OnInit {

  schedules: Schedules[]=[];
  weekDays:TuiDay[] = [];

  listPairs:number[]=[1,2,3,4,5,6,7];
  listDays:number[]=[1,2,3,4,5,6,7,8];

  loadCompleted : boolean = false;
  tableGroupData: Array<Schedules> =[]

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
    this.clickButton()
    this.onDayClick(TuiDay.fromLocalNativeDate(new Date()))
    this.schedulesService.listGroup.subscribe(
      (data) => {
        this.itemsGroups = data;console.log(this.itemsGroups);
      }
    );
    this.schedulesService.listTeachers.subscribe(
      (data) => {
        this.itemsTeachers = data;console.log(this.itemsTeachers);
      }
    );
    this.schedulesService.listAuditories.subscribe(
      (data) => {
        this.itemsAuditories = data;console.log(this.itemsAuditories);
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
    this.schedulesService.getGroup("Муми-тролли",(weekStartDate.year+'-0'+(weekStartDate.month+1)+'-'+weekStartDate.day).toString()).subscribe(
      data => {
        this.tableGroupData=data,
        this.loadCompleted = true
       },
    );
  }

  ngOnInit() {  
  }

  clickButton() {
    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(
      data => {
        this.tableGroupData=data,
        this.loadCompleted = true
       },
    );
  }

  filterFun(arr:  Array<Schedules>, day:number, pair:number){
    //console.log(this.tableGroupData)
    return arr.filter(
      function (el)
      {
        return el.day == day && el.pair ==  pair;
      }
    )
  }
  
}
