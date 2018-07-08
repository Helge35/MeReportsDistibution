import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpJsonParseError, HttpErrorResponse } from "@angular/common/http/src/response";

import { MissionExecInfo } from './models/missionExecInfo';
import { ExecutedStepsStatus } from './models/executedStepsStatus';



@Injectable()
export class ReportsService {

    private _reportsUrl: string = 'http://localhost:49297';

    constructor(private _http: HttpClient) { }

    getMissionExecInfo(): Observable<MissionExecInfo[]> {
        return this._http.get<MissionExecInfo[]>(this._reportsUrl+"/api/MissionsExecution");
    }

    getExecutedMissionStepsStatuses(id: number): Observable<ExecutedStepsStatus[]> {
        var url = `${this._reportsUrl}/api/MissionsExecution/${id}`;
        return this._http.get<ExecutedStepsStatus[]>(url);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}