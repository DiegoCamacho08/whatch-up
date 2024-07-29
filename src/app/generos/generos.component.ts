import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

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
  isDarkMode = false;

  constructor(private router: Router) {}

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
      { id: '5', titulo: 'Your Name', poster: '../../assets/anime/yourname.jpg', descripcion: 'Dos adolescentes, un chico y una chica, descubren que pueden intercambiar cuerpos y trabajan juntos para evitar un desastre.', genero: 'Drama, Romance, Fantasía', ano: 2016, status: 'Finalizado' },
      { id: '6', titulo: 'El Viaje de Chihiro', poster: '../../assets/anime/elviajedechihiro.jpg', descripcion: 'Una niña pequeña se adentra en un mundo espiritual mientras busca la manera de salvar a sus padres transformados en cerdos.', genero: 'Aventura, Fantasía', ano: 2001, status: 'Finalizado' },
      { id: '7', titulo: 'Akira', poster: '../../assets/anime/akira.jpg', descripcion: 'En un futuro post-apocalíptico, un joven motociclista desarrolla habilidades psíquicas y debe ser detenido antes de que destruya la ciudad.', genero: 'Acción, Ciencia Ficción', ano: 1988, status: 'Finalizado' },
      { id: '8', titulo: 'La Princesa Mononoke', poster: '../../assets/anime/laprincesamononoke.jpg', descripcion: 'Un joven guerrero se ve atrapado en un conflicto entre los dioses del bosque y una colonia minera humana.', genero: 'Aventura, Fantasía', ano: 1997, status: 'Finalizado' }
    ];
  }

  cambiarPestana(pestana: 'series' | 'peliculas'): void {
    this.pestanaActiva = pestana;
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  irADetalles(id: string): void {
    this.router.navigate(['/movie-detail', id]);
  }
}