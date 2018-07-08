import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'exeStatusPipe' })
export class ExeStatusPipe implements PipeTransform {
    transform(value: number): string {
        if (value == 0)
            return "None";
        if (value == 1)
            return "Executed";
        if (value == 2)
            return "Passed";
        if (value == 2)
            return "Failed";

        return "None";
    }
}