import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChoiceComponent } from './second-choice.component';

describe('SecondChoiceComponent', () => {
  let component: SecondChoiceComponent;
  let fixture: ComponentFixture<SecondChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
