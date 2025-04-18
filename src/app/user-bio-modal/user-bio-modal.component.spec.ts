import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserBioModalComponent} from './user-bio-modal.component';

describe('UserBioModalComponent', () => {
  let component: UserBioModalComponent;
  let fixture: ComponentFixture<UserBioModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBioModalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserBioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
