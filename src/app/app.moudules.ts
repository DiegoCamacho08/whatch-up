import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { GenerosComponent } from './generos/generos.component';
import { routes } from './app.routes'; 

@NgModule({
  declarations: [
    
  ],
  imports: [
    AppComponent ,
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeComponent,
    LoginComponent,
    MovieDetailComponent,
    GenerosComponent
  ],
  providers: [],
  
})
export class AppModule { }