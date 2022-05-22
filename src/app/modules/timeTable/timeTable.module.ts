import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './timeTable.component';
import { TimeTableRoutingModule } from 'src/app/modules/timeTable/timeTable-routing.module';
import {TuiCalendarModule} from '@taiga-ui/core';

@NgModule({
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    TuiCalendarModule
  ],
  declarations: [TimeTableComponent]
})
export class TimeTableModule { }
