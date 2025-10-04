import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  eventos = [
    {
      id: 1,
      titulo: "Concierto de Rock Nacional",
      descripcion: "Disfruta de los mejores artistas del rock colombiano en un evento único.",
      categoria: "Música",
      fecha: "15 Dic 2024",
      ubicacion: "Bogotá",
      precio: "Desde $50.000",
      imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      titulo: "Torneo Gaming CS:GO",
      descripcion: "Competencia épica de Counter-Strike con premios increíbles.",
      categoria: "Gaming",
      fecha: "20 Dic 2024",
      ubicacion: "Medellín",
      precio: "Gratis",
      imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      titulo: "Fiesta de Año Nuevo",
      descripcion: "Celebra el fin de año con la mejor música y ambiente.",
      categoria: "Social",
      fecha: "31 Dic 2024",
      ubicacion: "Cali",
      precio: "$80.000",
      imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      titulo: "Workshop de Cocina Italiana",
      descripcion: "Aprende a preparar los mejores platos italianos.",
      categoria: "Educativo",
      fecha: "25 Dic 2024",
      ubicacion: "Bogotá",
      precio: "$120.000",
      imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      titulo: "Conferencia de Startups",
      descripcion: "Conoce las últimas tendencias en emprendimiento tecnológico.",
      categoria: "Educativo",
      fecha: "18 Dic 2024",
      ubicacion: "Barranquilla",
      precio: "Gratis",
      imagen: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      titulo: "Workshop de Desarrollo Web",
      descripcion: "Aprende las últimas tecnologías web con expertos.",
      categoria: "Educativo",
      fecha: "22 Dic 2024",
      ubicacion: "Medellín",
      precio: "$150.000",
      imagen: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      id: 7,
      titulo: "Festival de Música Electrónica",
      descripcion: "Los mejores DJs nacionales e internacionales en un festival épico.",
      categoria: "Música",
      fecha: "28 Dic 2024",
      ubicacion: "Cartagena",
      precio: "$200.000",
      imagen: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop"
    },
    {
      id: 8,
      titulo: "Torneo de Fútbol 5",
      descripcion: "Competencia de fútbol 5 con equipos de toda la ciudad.",
      categoria: "Deportes",
      fecha: "30 Dic 2024",
      ubicacion: "Bogotá",
      precio: "$30.000",
      imagen: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop"
    },
    {
      id: 9,
      titulo: "Exposición de Arte Moderno",
      descripcion: "Descubre las obras más innovadoras del arte contemporáneo.",
      categoria: "Arte",
      fecha: "27 Dic 2024",
      ubicacion: "Medellín",
      precio: "$25.000",
      imagen: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop"
    }
  ];

  getCategoryColor(categoria: string): string {
    const colors: { [key: string]: string } = {
      'Música': '#eab308',
      'Gaming': '#a855f7',
      'Social': '#f28c0f',
      'Educativo': '#eab308',
      'Deportes': '#a855f7',
      'Arte': '#f28c0f'
    };
    return colors[categoria] || '#6b7280';
  }
}
