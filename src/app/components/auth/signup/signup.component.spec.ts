import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.signupForm.get('fullName')?.value).toBe('');
    expect(component.signupForm.get('email')?.value).toBe('');
    expect(component.signupForm.get('password')?.value).toBe('');
    expect(component.signupForm.get('confirmPassword')?.value).toBe('');
    expect(component.signupForm.get('terms')?.value).toBe(false);
  });

  it('should toggle password visibility', () => {
    const initialValue = component.hidePassword;
    component.hidePassword = !component.hidePassword;
    expect(component.hidePassword).toBe(!initialValue);
  });

  it('should toggle confirm password visibility', () => {
    const initialValue = component.hideConfirmPassword;
    component.hideConfirmPassword = !component.hideConfirmPassword;
    expect(component.hideConfirmPassword).toBe(!initialValue);
  });
});
