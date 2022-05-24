import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedules } from './../../core/modules/schedules.model';
import { SchedulesService } from 'src/app/core/services';
import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';
import { TuiDay, TuiDayOfWeek } from '@taiga-ui/cdk';
import { Activities } from 'src/app/core/modules/activities.model';
import { ActivitiesService } from 'src/app/core/services/activities.service';
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
})
export class TimeTableComponent implements OnInit {
  weekDays: TuiDay[] = [];

  listPairs: number[] = [1, 2, 3, 4, 5, 6, 7];
  listDays: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  loadCompleted: boolean = false;

  tableGroupData: Array<Schedules> = [];
  tableGroupDataActivities: Array<Activities> = [];
  selectedGroup: string = 'Муми-тролли';

  valueGroups = [];
  valueTeachers = [];
  valueAuditories = [];

  itemsGroups: string[] = [];
  itemsTeachers: string[] = [];
  itemsAuditories: string[] = [];

  date: TuiDay | null = null;
  dateForProject: string = '';
  weekStartDate?: TuiDay;

  readonly identityMatcher: TuiIdentityMatcher<readonly string[]> = (
    items1,
    items2
  ) =>
    items1.length === items2.length &&
    items1.every((item) => items2.includes(item));

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
    private schedulesService: SchedulesService,
    private activitiesService: ActivitiesService
  ) {
    this.onDayClick(TuiDay.fromLocalNativeDate(new Date()));
    this.updateData();
    this.schedulesService.listGroup.subscribe((data) => {
      this.itemsGroups = data;
      //console.log(this.itemsGroups);
    });
    this.schedulesService.listTeachers.subscribe((data) => {
      this.itemsTeachers = data;
      //console.log(this.itemsTeachers);
    });
    this.schedulesService.listAuditories.subscribe((data) => {
      this.itemsAuditories = data;
      //console.log(this.itemsAuditories);
    });
  }

  onDayClick(day: TuiDay): void {
    this.weekDays = [];
    this.date = day;
    this.dateForProject = this.date.toString();
    switch (day.dayOfWeek()) {
      case 0:
        this.weekStartDate = day;
        break;
      case 1:
        this.weekStartDate = day.append(new TuiDay(0, 0, 1), true);
        break;
      case 2:
        this.weekStartDate = day.append(new TuiDay(0, 0, 2), true);
        break;
      case 3:
        this.weekStartDate = day.append(new TuiDay(0, 0, 3), true);
        break;
      case 4:
        this.weekStartDate = day.append(new TuiDay(0, 0, 4), true);
        break;
      case 5:
        this.weekStartDate = day.append(new TuiDay(0, 0, 5), true);
        break;
      case 6:
        this.weekStartDate = day.append(new TuiDay(0, 0, 6), true);
        break;
      default:
        this.weekStartDate = day;
    }
    this.weekDays.push(
      this.weekStartDate,
      this.weekStartDate.append(new TuiDay(0, 0, 1)),
      this.weekStartDate.append(new TuiDay(0, 0, 2)),
      this.weekStartDate.append(new TuiDay(0, 0, 3)),
      this.weekStartDate.append(new TuiDay(0, 0, 4)),
      this.weekStartDate.append(new TuiDay(0, 0, 5)),
      this.weekStartDate.append(new TuiDay(0, 0, 6))
    );
    this.updateData();
  }

  ngOnInit() {}

  updateData() {
    var date: string =
      '' +this.weekStartDate?.year +'-' +this.weekStartDate?.formattedMonthPart +
      '-' +this.weekStartDate?.formattedDayPart;
    //получаем занятия
    this.schedulesService
      .getByGroup(this.selectedGroup, date.toString())
      .subscribe((data) => {
        (this.tableGroupData = data), (this.loadCompleted = true);
      });

    this.activitiesService
      .findList(this.weekStartDate)
      .subscribe((data) => {
        (this.tableGroupDataActivities = data), (this.loadCompleted = true);
      });
  }

  filterSchedules(arr: Array<Schedules>, day: number, pair: number) {
    //console.log(this.tableGroupData)
    return arr.filter(function (el) {
      return el.day == day && el.pair == pair;
    });
  }
  filterActivities(arr: Array<Activities>, day: number, pair: number) {
    //console.log(arr);

    return arr.filter( (el) => {
      var d=this.weekStartDate?.append(new TuiDay(0, 0, day))
      var date: string =
      '' +d?.year +'-' +d?.formattedMonthPart +
      '-' +d?.formattedDayPart;
      return el.dt == date.toString()  && el.pair == pair;
    });
  }
}
