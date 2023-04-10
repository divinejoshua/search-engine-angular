import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerboxComponent } from './answerbox.component';

describe('AnswerboxComponent', () => {
  let component: AnswerboxComponent;
  let fixture: ComponentFixture<AnswerboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
