import { Component, OnInit } from '@angular/core';
import { Schedules } from './../../core/modules/schedules.model';
import { SchedulesService } from 'src/app/core/services';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  schedules: Schedules[]=[];
  tableGroupData?: Array<Schedules> =[]
  constructor(private schedulesService: SchedulesService) { }

  ngOnInit() {
  }
  clickButton() {
    const d: Date = new Date();
  }
}
