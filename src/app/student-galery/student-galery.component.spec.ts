import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGaleryComponent } from './student-galery.component';

describe('StudentGaleryComponent', () => {
  let component: StudentGaleryComponent;
  let fixture: ComponentFixture<StudentGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentGaleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
