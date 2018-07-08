import { Component, OnInit } from '@angular/core';
import { ExecutedStepsStatus } from './models/executedStepsStatus';
import { MissionExecInfo } from './models/missionExecInfo';
import { ReportsService } from './reports.service';


@Component({
  selector: 'app-exe-report',
  templateUrl: './exe-report.component.html',
  styleUrls: ['./exe-report.component.scss']
})
export class ExeReportComponent implements OnInit {

  execMissions: MissionExecInfo[];
  selectedExecMission: MissionExecInfo;
  execSteps: ExecutedStepsStatus[];

  constructor(private _http: ReportsService) { }

  getMissionExecInfo(): void {
    this._http.getMissionExecInfo().subscribe(info => this.execMissions = info);
  }

  getExecutedMissionStepsStatuses(id: number): void {
    this._http.getExecutedMissionStepsStatuses(id).subscribe(info => this.execSteps = info);
  }

  ngOnInit() {
    this.getMissionExecInfo();
  }

}
