import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableRoutingModule } from 'src/app/modules/timeTable/timeTable-routing.module';

import {TuiRadioListModule, TuiFilterModule, TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxLabeledModule,TuiStringifyContentPipeModule, TuiCheckboxBlockModule, TuiFilterByInputPipeModule, TuiComboBoxModule} from '@taiga-ui/kit';
import {TuiScrollbarModule, TuiHintModule, TuiCalendarModule, TuiTextfieldControllerModule, TuiPrimitiveTextfieldModule, TuiDataListModule, TuiLoaderModule } from '@taiga-ui/core';
import { CalendarCardComponent } from './../../UI/calendar-card/calendar-card.component';
import {TuiLetModule, TuiForModule, TuiFilterPipeModule} from '@taiga-ui/cdk';
 
import { CustomListComponent } from 'src/app/UI/custom-list.component';
import { TimeTableComponent } from './timeTable.component';


@NgModule({
  imports: [
    CommonModule,
    TimeTableRoutingModule,
    TuiDataListModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiCheckboxLabeledModule,
    ReactiveFormsModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiRadioListModule,
    TuiCalendarModule,
    TuiLoaderModule,TuiStringifyContentPipeModule,
    TuiFilterModule,TuiComboBoxModule,TuiFilterByInputPipeModule,
    TuiLetModule,TuiCheckboxBlockModule,TuiScrollbarModule,
    TuiHintModule,TuiFilterPipeModule,
    TuiForModule,
  ],
  declarations: [
    TimeTableComponent,
    CustomListComponent,
    CalendarCardComponent
  ]
})
export class TimeTableModule { }
