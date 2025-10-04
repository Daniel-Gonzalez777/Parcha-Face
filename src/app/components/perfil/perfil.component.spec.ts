import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';

describe('PerfilComponent', () => {
  let component: PerfilComponent;
  let fixture: ComponentFixture<PerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilder]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with user data', () => {
    expect(component.profileForm.get('nombre')?.value).toBe('María García');
    expect(component.profileForm.get('email')?.value).toBe('maria.garcia@email.com');
  });
});
