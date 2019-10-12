import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiondesigningComponent } from './questiondesigning.component';

describe('QuestiondesigningComponent', () => {
  let component: QuestiondesigningComponent;
  let fixture: ComponentFixture<QuestiondesigningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestiondesigningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiondesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
