// generos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Contenido {
  id: string;
  titulo: string;
  genero: string;
  ano: number;
  poster: string;
  descripcion: string;
  status: string;
}

@Component({
  selector: 'app-generos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  pestanaActiva: 'series' | 'peliculas' = 'series';
  series: Contenido[] = [];
  peliculas: Contenido[] = [];

  ngOnInit() {
    this.cargarSeries();
    this.cargarPeliculas();
  }

  cargarSeries(): void {
    this.series = [
      { id: '1', titulo: 'Boku no Hero', poster: '../../assets/anime/boku nohero.jpg', descripcion: 'Un joven nacido sin poderes en un mundo donde los poderes son la norma, sueña con convertirse en el héroe más grande del mundo.', genero: 'Acción, Aventura', ano: 2016, status: 'En emisión' },
      { id: '2', titulo: 'Una Voz Silenciosa', poster: '../../assets/anime/unavozsilenciosa.jpg', descripcion: 'Un chico problemático busca redención después de haber intimidado a una niña sorda en la escuela primaria.', genero: 'Drama, Romance', ano: 2016, status: 'Finalizado' },
      { id: '3', titulo: 'Fullmetal Alchemist', poster: '../../assets/anime/fullmetal.jpg', descripcion: 'Dos hermanos alquimistas buscan la piedra filosofal para restaurar sus cuerpos después de un desastroso intento de resucitar a su madre.', genero: 'Acción, Aventura', ano: 2003, status: 'Finalizado' },
      { id: '4', titulo: 'Hellsing', poster: '../../assets/anime/hellsing.jpg', descripcion: 'Una organización secreta lucha contra vampiros y otras criaturas sobrenaturales en la Inglaterra moderna.', genero: 'Acción, Horror', ano: 2001, status: 'Finalizado' }
    ];
  }

  cargarPeliculas(): void {
    this.peliculas = [
      { id: '1', titulo: 'Inception', genero: 'Ciencia ficción', ano: 2010, poster: '../../assets/movies/inception.jpg', descripcion: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.', status: 'Finalizado' },
      { id: '2', titulo: 'The Shawshank Redemption', genero: 'Drama', ano: 1994, poster: '../../assets/movies/shawshank.jpg', descripcion: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', status: 'Finalizado' },
      { id: '3', titulo: 'Pulp Fiction', genero: 'Crimen', ano: 1994, poster: '../../assets/movies/pulp-fiction.jpg', descripcion: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', status: 'Finalizado' }
    ];
  }

  cambiarPestana(pestana: 'series' | 'peliculas'): void {
    this.pestanaActiva = pestana;
  }
  
  isDarkMode = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
}
