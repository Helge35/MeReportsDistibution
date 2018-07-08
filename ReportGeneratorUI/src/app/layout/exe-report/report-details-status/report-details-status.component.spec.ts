import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailsStatusComponent } from './report-details-status.component';

describe('ReportDetailsStatusComponent', () => {
  let component: ReportDetailsStatusComponent;
  let fixture: ComponentFixture<ReportDetailsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDetailsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
