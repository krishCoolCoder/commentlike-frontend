import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpModelComponent } from './sign-up-model.component';

describe('SignUpModelComponent', () => {
  let component: SignUpModelComponent;
  let fixture: ComponentFixture<SignUpModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
