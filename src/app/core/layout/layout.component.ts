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

    this.schedulesService.getGroup("Муми-тролли","2022-05-23").subscribe(data => {this.tableGroupData=data
      console.log(data)});
    //this.schedulesService.getTeachers("Морра","2022-04-11").subscribe(data=>( console.log(data)))
    //this.schedulesService.getAuditories("Танцплощадка","2022-04-11").subscribe(data=>( console.log(data)))

    console.log(this.schedulesService.listGroup);
    console.log(this.schedulesService.listAuditories);
    console.log(this.schedulesService.listTeachers);

    //this.schedulesService.search("Юксаре", "2022-05-23").subscribe(data => this.tableGroupData=data);
    //console.log(this.tableGroupData);
  }
}
