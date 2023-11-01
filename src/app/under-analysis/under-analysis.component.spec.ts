import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderAnalysisComponent } from './under-analysis.component';

describe('UnderAnalysisComponent', () => {
  let component: UnderAnalysisComponent;
  let fixture: ComponentFixture<UnderAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderAnalysisComponent]
    });
    fixture = TestBed.createComponent(UnderAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
