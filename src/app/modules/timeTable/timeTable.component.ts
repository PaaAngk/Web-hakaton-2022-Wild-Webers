import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchedulesService } from 'src/app/core/services';

@Component({
  selector: 'app-timeTable',
  templateUrl: './timeTable.component.html',
  styleUrls: ['./timeTable.component.scss']
})
export class TimeTableComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private schedulesService: SchedulesService
  ) { }

  ngOnInit() {
  }

  clickButton(){
    this.schedulesService.get().subscribe(data=>( console.log(data)))
  }

}
