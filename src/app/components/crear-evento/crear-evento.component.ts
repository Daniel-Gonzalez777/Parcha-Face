import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent {
  eventoForm: FormGroup;
  isLoading = false;
  currentStep = 1;
  totalSteps = 4;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.eventoForm = this.fb.group({
      // Paso 1: Información Básica
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      categoria: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(20)]],
      imagen: [''],
      
      // Paso 2: Fecha y Lugar
      fecha: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      horaFin: [''],
      online: [false],
      lugar: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      
      // Paso 3: Detalles
      capacidad: ['', [Validators.required, Validators.min(1)]],
      precio: [0],
      requisitos: [''],
      contacto: [''],
      
      // Paso 4: Configuración
      publico: [true],
      comentarios: [true],
      recordatorios: [true],
      feedback: [true],
      verificado: [false]
    });
  }

  // Métodos para navegación entre pasos
  nextStep() {
    if (this.validateCurrentStep()) {
      if (this.currentStep < this.totalSteps) {
        this.currentStep++;
      }
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  goToStep(step: number) {
    if (step >= 1 && step <= this.totalSteps) {
      this.currentStep = step;
    }
  }

  validateCurrentStep(): boolean {
    const stepFields = this.getStepFields(this.currentStep);
    const stepForm = this.fb.group({});
    
    stepFields.forEach(field => {
      stepForm.addControl(field, this.eventoForm.get(field)!);
    });

    return stepForm.valid;
  }

  getStepFields(step: number): string[] {
    switch (step) {
      case 1:
        return ['titulo', 'categoria', 'descripcion'];
      case 2:
        return ['fecha', 'hora', 'lugar', 'direccion', 'ciudad'];
      case 3:
        return ['capacidad', 'precio'];
      case 4:
        return ['publico', 'comentarios', 'recordatorios', 'feedback'];
      default:
        return [];
    }
  }

  onSubmit() {
    if (this.currentStep === this.totalSteps && this.eventoForm.valid) {
      this.isLoading = true;
      // Aquí iría la lógica para crear el evento
      console.log('Evento creado:', this.eventoForm.value);
      
      // Simular llamada a API
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/eventos']);
      }, 2000);
    } else {
      this.nextStep();
    }
  }

  isStepCompleted(step: number): boolean {
    if (step < this.currentStep) {
      return true;
    }
    return false;
  }

  isStepActive(step: number): boolean {
    return step === this.currentStep;
  }

  getStepIcon(step: number): string {
    switch (step) {
      case 1: return '📝';
      case 2: return '📅';
      case 3: return '👤';
      case 4: return '⚙️';
      default: return '📝';
    }
  }

  getStepTitle(step: number): string {
    switch (step) {
      case 1: return 'Información Básica';
      case 2: return 'Fecha y Lugar';
      case 3: return 'Detalles';
      case 4: return 'Configuración';
      default: return 'Información Básica';
    }
  }

  getStepSubtitle(step: number): string {
    switch (step) {
      case 1: return 'Título, descripción y categoría';
      case 2: return 'Cuándo y dónde será tu evento';
      case 3: return 'Capacidad, precio y contacto';
      case 4: return 'Privacidad y configuraciones finales';
      default: return 'Título, descripción y categoría';
    }
  }
}
