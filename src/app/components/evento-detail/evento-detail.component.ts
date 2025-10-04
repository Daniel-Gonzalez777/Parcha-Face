import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-detail',
  templateUrl: './evento-detail.component.html',
  styleUrls: ['./evento-detail.component.css']
})
export class EventoDetailComponent implements OnInit {
  evento: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const eventId = this.route.snapshot.paramMap.get('id');
    this.loadEvento(eventId);
  }

  loadEvento(id: string | null) {
    // Simular carga de datos
    setTimeout(() => {
      this.evento = {
        id: id,
        titulo: "Concierto de Rock Nacional",
        descripcion: "Disfruta de los mejores artistas del rock colombiano en un evento único.",
        descripcionExtendida: "Este concierto promete ser una experiencia inolvidable con los mejores exponentes del rock nacional. Contaremos con la participación de bandas legendarias y artistas emergentes que han marcado la historia de la música colombiana. El evento incluye presentaciones en vivo, food trucks, y una zona VIP con beneficios exclusivos.",
        categoria: "Música",
        fecha: "15 de Diciembre, 2024",
        hora: "8:00 PM",
        ubicacion: "Estadio El Campín",
        direccion: "Calle 63 # 57-60, Bogotá",
        capacidad: 500,
        asistentes: 342,
        precio: "$50.000",
        organizador: "Rock Colombia Events",
        organizadorAvatar: "assets/images/placeholder-user.jpg",
        imagen: "assets/images/acoustic-concert.png"
      };
    }, 1000);
  }

  getCategoryColor(categoria: string): string {
    const colors: { [key: string]: string } = {
      'Música': '#3b82f6',
      'Gaming': '#10b981',
      'Social': '#f59e0b',
      'Educativo': '#8b5cf6',
      'Deportes': '#ef4444'
    };
    return colors[categoria] || '#6b7280';
  }
}
