import { ExeReportModule } from './exe-report.module';

describe('ExeReportModule', () => {
  let exeReportModule: ExeReportModule;

  beforeEach(() => {
    exeReportModule = new ExeReportModule();
  });

  it('should create an instance', () => {
    expect(exeReportModule).toBeTruthy();
  });
});
