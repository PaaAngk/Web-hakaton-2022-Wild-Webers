import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesRoutingModule } from './activities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
  ],
  declarations: [ActivitiesComponent]
})
export class ActivitiesModule { }
