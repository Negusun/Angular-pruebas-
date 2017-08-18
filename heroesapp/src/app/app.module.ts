import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//rutas
import { APP_ROUTING } from './app.routes';
//servicios
import { HeroesService } from './services/heroes.service'
//componentes
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';
import { KeysPipe } from './pipes/keys.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

export const firebaseConfig = {
  apiKey: "AIzaSyD0tASeJkB9UHA_X8F4CD4Tm5xWPRc1spQ",
  authDomain: "heroesapp-7ee3f.firebaseapp.com",
  databaseURL: "https://heroesapp-7ee3f.firebaseio.com",
  projectId: "heroesapp-7ee3f",
  storageBucket: "heroesapp-7ee3f.appspot.com",
  messagingSenderId: "342091670501"
};

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeComponent,
    KeysPipe,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
