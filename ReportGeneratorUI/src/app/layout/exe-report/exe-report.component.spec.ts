import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeReportComponent } from './exe-report.component';

describe('ExeReportComponent', () => {
  let component: ExeReportComponent;
  let fixture: ComponentFixture<ExeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
