import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymossurveyComponent } from './anonymossurvey.component';

describe('AnonymossurveyComponent', () => {
  let component: AnonymossurveyComponent;
  let fixture: ComponentFixture<AnonymossurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymossurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymossurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
