import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { DetalleComponent } from './detalle/detalle.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, CatalogoComponent, RegistroComponent, LoginComponent, DetalleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
