import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {Heroe} from '../interface/heroe.interface';
import "rxjs/Rx";

@Injectable()
export class HeroesService {

  FireBaseUrl: string = "https://heroesapp-7ee3f.firebaseio.com/heroes";
  constructor(private http: Http) {

  }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'aplication/json'
    });
    let url = `${ this.FireBaseUrl }.json`;

    return this.http.post( url , body, { headers:headers } )
      .map(
        res=>{
          console.log(res.json());
          return res.json();
        }
      )
  }

  borarHeroe(key$:string){
    let url = `${ this.FireBaseUrl }/${ key$ }.json`;
    return this.http.delete(url)
      .map(res=>res.json())
  }

  actualizarHeroe(heroe:Heroe, key$:string){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'aplication/json'
    });
    let url = `${ this.FireBaseUrl }/${ key$ }.json`;

    return this.http.put( url , body, { headers:headers } )
      .map(
        res=>{
          console.log(res.json());
          return res.json();
        }
      )
  }

  getHeroe( key$:string ){
    let url = `${ this.FireBaseUrl }/${ key$ }.json`;
    return this.http.get(url)
      .map(res=>res.json());
  }

  getHeroes(){
    let url = `${ this.FireBaseUrl }.json`;
    return this.http.get(url)
      .map(res=>res.json())
  }

}
