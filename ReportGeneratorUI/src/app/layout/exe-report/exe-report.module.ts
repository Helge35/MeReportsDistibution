
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ExeReportRoutingModule} from './exe-report-routing.module';
import { ExeReportComponent } from './exe-report.component';
import { PageHeaderModule } from './../../shared';
import { ReportDetailsStatusComponent } from './report-details-status/report-details-status.component';
import { ChartsModule  } from 'ng2-charts';
import {ExeStatusPipe} from './models/exeStatusPipe';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    ExeReportRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PageHeaderModule,
    
  ],
  declarations: [ExeReportComponent, ReportDetailsStatusComponent, ExeStatusPipe]
})
export class ExeReportModule { }



