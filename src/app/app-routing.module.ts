import { LayoutComponent } from './core/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'schedule'},

  {
    path: '',
    component  : LayoutComponent,
    children   : [
        {path: 'schedule', loadChildren: () => import('./modules/timeTable/timeTable.module').then(m => m.TimeTableModule)},
        {path: 'schedule/:group', loadChildren: () => import('./modules/timeTable/timeTable.module').then(m => m.TimeTableModule)},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
