import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesurveyComponent } from './managesurvey.component';

describe('ManagesurveyComponent', () => {
  let component: ManagesurveyComponent;
  let fixture: ComponentFixture<ManagesurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
