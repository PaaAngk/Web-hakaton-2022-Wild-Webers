import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeTableComponent } from './timeTable.component';
import { TimeTableRoutingModule } from 'src/app/modules/timeTable/timeTable-routing.module';
import {TuiDataListModule, TuiLoaderModule} from '@taiga-ui/core';
import {TuiPrimitiveTextfieldModule} from '@taiga-ui/core';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiDataListWrapperModule, TuiSelectModule} from '@taiga-ui/kit';

import {TuiRadioListModule, TuiFilterModule, TuiFilterByInputPipeModule, TuiComboBoxModule} from '@taiga-ui/kit';
import { CustomListComponent } from 'src/app/UI/custom-list.component';
import {TuiCalendarModule} from '@taiga-ui/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiCheckboxLabeledModule,TuiStringifyContentPipeModule} from '@taiga-ui/kit';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiCheckboxBlockModule} from '@taiga-ui/kit';

import {TuiScrollbarModule, TuiHintModule } from '@taiga-ui/core';


import { CalendarCardComponent } from './../../UI/calendar-card/calendar-card.component';
import {TuiLetModule} from '@taiga-ui/cdk';


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
    TuiStringifyContentPipeModule,
    TuiFilterByInputPipeModule,
    TuiDataListWrapperModule,
    TuiRadioListModule,
    TuiCalendarModule,
    TuiLoaderModule,
    TuiFilterModule,
    TuiLetModule,TuiCheckboxBlockModule,
    TuiComboBoxModule,
    TuiLetModule,
    TuiScrollbarModule,
    TuiHintModule,
  ],
  declarations: [
    TimeTableComponent,
    CustomListComponent,
    CalendarCardComponent
  ]
})
export class TimeTableModule { }
