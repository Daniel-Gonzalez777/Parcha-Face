import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CrearEventoComponent } from './crear-evento.component';

describe('CrearEventoComponent', () => {
  let component: CrearEventoComponent;
  let fixture: ComponentFixture<CrearEventoComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [CrearEventoComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearEventoComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.eventoForm.get('titulo')?.value).toBe('');
    expect(component.eventoForm.get('categoria')?.value).toBe('');
    expect(component.eventoForm.get('descripcion')?.value).toBe('');
  });
});
