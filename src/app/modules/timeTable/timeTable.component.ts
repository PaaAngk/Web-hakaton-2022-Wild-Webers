import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/core/services';
import {ActivitiesService} from 'src/app/core/services/activities.service';
import {
  TuiContextWithImplicit,
  TuiIdentityMatcher,
  TuiStringHandler,
} from '@taiga-ui/cdk';
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
