import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  profileForm: FormGroup;
  intereses = [
    { nombre: 'Música', seleccionado: true },
    { nombre: 'Gaming', seleccionado: true },
    { nombre: 'Deportes', seleccionado: false },
    { nombre: 'Arte y Cultura', seleccionado: true },
    { nombre: 'Tecnología', seleccionado: false },
    { nombre: 'Gastronomía', seleccionado: false },
    { nombre: 'Viajes', seleccionado: true },
    { nombre: 'Fotografía', seleccionado: false }
  ];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      nombre: ['María'],
      apellido: ['García'],
      email: ['maria.garcia@email.com'],
      telefono: ['+57 300 123 4567'],
      ubicacion: ['bogota'],
      biografia: ['Amante de la música y los eventos culturales. Siempre buscando nuevas experiencias y conexiones.']
    });
  }

  toggleInteres(interes: any) {
    interes.seleccionado = !interes.seleccionado;
  }
}
