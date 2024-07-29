import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { GenerosComponent } from './generos/generos.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'movie-detail/:id', 
        component: MovieDetailComponent
    },
    {
        path: 'generos', 
        component: GenerosComponent
    },

    {
        path: '**',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: 'generos'
    },
    
];
