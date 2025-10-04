import { Component } from '@angular/core';

@Component({
  selector: 'app-comunidad',
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent {
  usuarios = [
    {
      nombre: "María García",
      ubicacion: "Bogotá",
      avatar: "assets/images/placeholder-user.jpg",
      intereses: ["Música", "Arte"],
      eventosCreados: 5,
      eventosAsistidos: 12
    },
    {
      nombre: "Carlos López",
      ubicacion: "Medellín",
      avatar: "assets/images/placeholder-user.jpg",
      intereses: ["Gaming", "Tecnología"],
      eventosCreados: 3,
      eventosAsistidos: 8
    },
    {
      nombre: "Ana Rodríguez",
      ubicacion: "Cali",
      avatar: "assets/images/placeholder-user.jpg",
      intereses: ["Deportes", "Social"],
      eventosCreados: 7,
      eventosAsistidos: 15
    },
    {
      nombre: "David Martínez",
      ubicacion: "Barranquilla",
      avatar: "assets/images/placeholder-user.jpg",
      intereses: ["Música", "Gaming"],
      eventosCreados: 2,
      eventosAsistidos: 6
    },
    {
      nombre: "Laura Sánchez",
      ubicacion: "Bogotá",
      avatar: "assets/images/placeholder-user.jpg",
      intereses: ["Arte", "Educativo"],
      eventosCreados: 4,
      eventosAsistidos: 9
    },
    {
      nombre: "Pedro González",
      ubicacion: "Medellín",
      avatar: "assets/images/placeholder-user.jpg",
      intereses: ["Deportes", "Social"],
      eventosCreados: 6,
      eventosAsistidos: 11
    }
  ];

  grupos = [
    {
      nombre: "Rock Colombiano",
      descripcion: "Para los amantes del rock nacional",
      miembros: 234,
      imagen: "assets/images/acoustic-concert.png"
    },
    {
      nombre: "Gamers Colombia",
      descripcion: "Comunidad de gamers colombianos",
      miembros: 567,
      imagen: "assets/images/gaming-tournament.png"
    },
    {
      nombre: "Arte y Cultura",
      descripcion: "Eventos culturales y artísticos",
      miembros: 189,
      imagen: "assets/images/italian-cooking-class.png"
    },
    {
      nombre: "Startup Network",
      descripcion: "Emprendedores y startups",
      miembros: 345,
      imagen: "assets/images/startup-conference.png"
    }
  ];

  discusiones = [
    {
      titulo: "¿Cuál es el mejor lugar para conciertos en Bogotá?",
      contenido: "Estoy organizando un concierto y me gustaría saber sus recomendaciones sobre los mejores venues en la ciudad.",
      autor: {
        nombre: "María García",
        avatar: "assets/images/placeholder-user.jpg"
      },
      fecha: "Hace 2 horas",
      likes: 12,
      comentarios: 8
    },
    {
      titulo: "Torneo de FIFA 2024 - Inscripciones abiertas",
      contenido: "Estamos organizando un torneo de FIFA para el próximo mes. ¡Inscríbanse ya!",
      autor: {
        nombre: "Carlos López",
        avatar: "assets/images/placeholder-user.jpg"
      },
      fecha: "Hace 4 horas",
      likes: 25,
      comentarios: 15
    },
    {
      titulo: "Workshop de cocina italiana - Fotos del evento",
      contenido: "¡Gracias a todos los que asistieron! Aquí están algunas fotos del evento de ayer.",
      autor: {
        nombre: "Ana Rodríguez",
        avatar: "assets/images/placeholder-user.jpg"
      },
      fecha: "Hace 1 día",
      likes: 18,
      comentarios: 6
    }
  ];
}
