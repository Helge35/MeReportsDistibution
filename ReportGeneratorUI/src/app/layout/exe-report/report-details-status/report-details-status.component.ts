import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExecutedStepsStatus } from '../models/executedStepsStatus';


@Component({
  selector: 'report-details-status',
  templateUrl: './report-details-status.component.html',
  styleUrls: ['./report-details-status.component.scss']
})
export class ReportDetailsStatusComponent implements OnInit {



  @Input() set ExecutionStepsInfo(value: ExecutedStepsStatus[]) {
    this.execSteps = value;
    this.getChartData();
  }

  private getChartData(): void {

    var noneCount: number = 0;
    var exeCount: number = 0;
    var passCount: number = 0;
    var failCount: number = 0;
    var valStatus = 0;

    var statuses = this.execSteps.map((step) => step.StatusInfo);
    statuses.forEach(element => {

      if (!element.length) {
        noneCount++;
      }
      else {
        var noneCountL = element.filter(x => x.StatusID === 0).length;
        var exeCountL = element.filter(x => x.StatusID === 1).length;
        var passCountL = element.filter(x => x.StatusID === 2).length;
        var failCountL = element.filter(x => x.StatusID === 3).length;

        noneCount += element.length - exeCountL - passCountL - failCountL;

        exeCount += exeCountL;
        passCount += passCountL;
        failCount += failCountL;
      }
    });



    this.pieChartData = [
      noneCount,
      exeCount,
      passCount,
      failCount]
  }

  execSteps: ExecutedStepsStatus[];

  public pieChartData: number[] = [];
  public pieChartLabels: string[] = [
    'None',
    'Executed',
    'Passed',
    'Failed',
  ];

  public pieChartType: string = 'pie';


  public chartHovered(e: any): void {
    // console.log(e);
  }

  public chartClicked(e: any): void {
    // console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
