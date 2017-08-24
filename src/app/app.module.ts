import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { APP_ROUTING } from './app.routes';

// servicios
import { AuthService } from './services/auth.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AuthGuard} from "./guards/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreciosComponent,
    NavbarComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
