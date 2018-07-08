import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
  imports: [
    CommonModule, PageHeaderModule, ReportsRoutingModule
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule { }

