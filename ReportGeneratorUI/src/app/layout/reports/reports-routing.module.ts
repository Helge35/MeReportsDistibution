import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports.component';
//import { ExeReportComponent } from './exe-report/exe-report.component';

const routes: Routes = [
    {
        path: '', component: ReportsComponent,
       // children: [
     //       { path: '', redirectTo: 'exe-report', pathMatch: 'prefix' },
      //     { path: 'exe-report1', loadChildren: './exe-report/exe-report.module#ExeReportModule' },
      //     { path: 'exe-report', loadChildren: './reports.module#ReportsModule' },
      //  ]
    }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportsRoutingModule {
}
