import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './timeTable.component';
import { TimeTableRoutingModule } from 'src/app/modules/timeTable/timeTable-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimeTableRoutingModule
  ],
  declarations: [TimeTableComponent]
})
export class TimeTableModule { }
