import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './timeTable.component';
import { TimeTableRoutingModule } from 'src/app/modules/timeTable/timeTable-routing.module';
import {TuiDataListModule, TuiLoaderModule} from '@taiga-ui/core';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/core';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {TuiRadioListModule} from '@taiga-ui/kit';
import { CustomListComponent } from 'src/app/UI/custom-list.component';
import {TuiCalendarModule} from '@taiga-ui/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxLabeledModule} from '@taiga-ui/kit';
import { CalendarCardComponent } from './../../UI/calendar-card/calendar-card.component';

@NgModule({
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    TuiDataListModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    FormsModule,
    FormsModule,
    TuiCheckboxLabeledModule,
        ReactiveFormsModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiDataListWrapperModule,
        TuiRadioListModule,
    TuiCalendarModule,
    TuiLoaderModule,
  ],
  declarations: [
    TimeTableComponent,
    CustomListComponent,
    CalendarCardComponent
  ]
})
export class TimeTableModule { }
