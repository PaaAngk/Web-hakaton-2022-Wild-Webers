import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedules } from './../../core/modules/schedules.model';
import { SchedulesService } from 'src/app/core/services';
import { elementAt, Observable, Observer } from 'rxjs';
import { TuiDay, TuiDayOfWeek,TuiMonth } from '@taiga-ui/cdk';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';
import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';

import { Activities } from 'src/app/core/modules/activities.model';
import { ActivitiesService } from 'src/app/core/services/activities.service';


@Component({
  selector: 'app-timeTable',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timeTable.component.scss']
})
export class TimeTableComponent implements OnInit {
  weekDays: TuiDay[] = [];

  calendarMonth: TuiMonth = TuiMonth.currentLocal();
  
  listPairs: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  listDays: number[] = [1, 2, 3, 4, 5, 6, 7];

  loadCompleted : boolean = false;
  valueGroups:string = '';
  valueTeachers:string = '';
  valueAuditories:string = '';

  value = null;
    readonly stringify = (item: string): string =>`${item}`;

  itemsAll: string[] = [];
  itemsCategory: number[]=[];

  tableGroupData: Array<Schedules> =[]
  
  tableGroupDataActivities: Array<Activities> =[]

  selectedGroup:string ='';
  selectedTeachers:string ='';
  selectedAuditories:string ='';

  itemsGroups:string[] =[];
  itemsTeachers:string[] =[];
  itemsAuditories :string[] =[];

  date: TuiDay | null = null;
  weekStartDate?: TuiDay;
  months: string[] = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август",
"Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  sheduleMonths: string='';

  cantLoad = false;
  showCriteria:FormGroup;
 

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schedulesService: SchedulesService,
    private activitiesService: ActivitiesService,
    private formBuilder: FormBuilder
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
      this.itemsAll = this.itemsGroups.concat(this.itemsTeachers,this.itemsAuditories);
      this.itemsAll.sort((a,b) => a > b ? 1 : -1 );
    });

    this.showCriteria = this.formBuilder.group({
      projects: [false],
      events: [false],
       lessons: new FormControl({value: true, disabled: true}),
       traffic: new FormControl({value: true, disabled: true}),
    });
  }

  selectGroup(item: string) {
    this.selectedGroup = item;
    this.router.navigate([], { queryParams: { group: item },relativeTo: this.activatedRoute });
    this.valueTeachers =''
    this.valueAuditories =''
  }

  selectTeachers(item: string) {
    this.selectedGroup = item;
    this.router.navigate([], { queryParams: { teachers: item },relativeTo: this.activatedRoute });
    this.updateData();
    this.valueGroups =''
    this.valueAuditories =''
  }

  selectAuditories(item: string) {
    this.selectedGroup = item;
    this.router.navigate([], { queryParams: { auditories: item },relativeTo: this.activatedRoute });
    this.updateData();
    this.valueGroups =''
    this.valueTeachers =''
  }

  onDayClick(day: TuiDay): void {
    this.weekDays = [];
    this.calendarMonth = new TuiMonth(day.year, day.month);
    this.date = day;
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
    if (this.weekDays[0].month != this.weekDays[6].month){
      this.sheduleMonths = ""+this.weekDays[0].day+" "+this.months[this.weekDays[0].month]+" - "+this.weekDays[6].day+" "+this.months[this.weekDays[6].month];
    }else this.sheduleMonths = ""+this.weekDays[0].day+" "+this.months[this.weekDays[0].month];

    this.updateData();
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.valueGroups = params['group']==undefined? '':params['group'];
      this.valueTeachers = params['teachers']==undefined? '':params['teachers'];
      this.valueAuditories = params['auditories']==undefined? '':params['auditories'];
      console.log(this.valueTeachers)
      this.updateData();
    });
    this.showCriteria.value.projects=false
    this.showCriteria.value.events=false
  }
 
  changeWeekToNext(){
    this.onDayClick(this.weekDays[0].append(new TuiDay(0,0,7)));
  }
  changeWeekToPrevious(){
    this.onDayClick(this.weekDays[0].append(new TuiDay(0,0,7),true));
  }
  ngAfterContentChecked(){}

  updateData() {
    var date:string= ''+this.weekStartDate?.year+'-'+this.weekStartDate?.formattedMonthPart+'-'+this.weekStartDate?.formattedDayPart;
    //если выбрана группа
    if(this.valueGroups!=''){
      this.loadCompleted = true
      //получаем занятия 
      this.schedulesService.getByGroup(this.valueGroups,date.toString()).subscribe(
        data => {
          this.tableGroupData=data,
          this.loadCompleted = false
        }
      );
      //получаем активити 
      this.activitiesService.getActivitiesByGroup(this.valueGroups,this.showCriteria.value.projects,this.showCriteria.value.events,this.weekStartDate).subscribe(
        (data) => {
          this.tableGroupDataActivities = data,
          this.loadCompleted = false,
          this.ngAfterContentChecked()
          },
          (error)=>{this.cantLoad = true, this.loadCompleted = false, this.tableGroupData=[]}
      );
    }
    //если выбран препод
    else if (this.valueTeachers!=''){
      this.loadCompleted = true
      //получаем занятия 
      this.schedulesService.getByTeachers(this.valueTeachers,date.toString()).subscribe(
        data => {
          this.tableGroupData=data,
          this.loadCompleted = false
        },
      );
      //получаем активити 
      this.activitiesService.getActivitiesByTeachers(this.valueTeachers,this.showCriteria.value.projects,this.showCriteria.value.events,this.weekStartDate).subscribe(
        (data) => {
          this.tableGroupDataActivities = data,
          this.loadCompleted = false
        },
        (error)=>{this.cantLoad = true, this.loadCompleted = false, this.tableGroupData=[]}
      );
    }
    //если выбрана аудитория
    else if (this.valueAuditories!=''){
      this.loadCompleted = true
      //получаем занятия 
      this.schedulesService.getByAuditories(this.valueAuditories,date.toString()).subscribe(
        data => {
          this.tableGroupData=data,
          this.loadCompleted = false
        },
      );
      //получаем активити 
      this.activitiesService.getActivitiesByAuditories(this.valueTeachers,this.showCriteria.value.projects,this.showCriteria.value.events,this.weekStartDate).subscribe(
        (data) => {
          this.tableGroupDataActivities = data,
          this.loadCompleted = false
        },
        (error)=>{this.cantLoad = true, this.loadCompleted = false, this.tableGroupData=[]}
      );
    }
    
  }

  filterSchedules( day: number, pair: number) {
    return this.tableGroupData.filter(function (el) {
      return el.day == day && el.pair == pair;
    });
  }

  filterSchedulesAsync( day: number, pair: number) {
    return new Promise<Array<Schedules>>((resolve, reject) => {
        this.tableGroupData.filter(function (el) {
        return el.day == day && el.pair == pair;
      })
    });
  }

  filterActivities(arr: Array<Activities>, day: number, pair: number) {
    //console.log(arr);
    return arr.filter( (el) => {
      var d=this.weekDays[day-1]
      var date: string ='' +d?.year +'-' +d?.formattedMonthPart +'-' +d?.formattedDayPart;
      return el.dt == date.toString()  && el.pair == pair;
    });

  }
}
