import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswerModalComponent } from './question-answer-modal.component';

describe('QuestionAnswerModalComponent', () => {
  let component: QuestionAnswerModalComponent;
  let fixture: ComponentFixture<QuestionAnswerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionAnswerModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionAnswerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
