import { Injectable } from '@angular/core';
import {Http, Headers } from '@angular/http';
import {Heroe} from '../interface/heroe.interface';
import "rxjs/Rx";

@Injectable()
export class HeroesService {

  FireBaseUrl: string = "https://heroesapp-7ee3f.firebaseio.com/heroes.json";
  constructor(private http: Http) {

  }

  nuevoHeroe(heroe:Heroe){
    let body = JSON.stringify(heroe);
    let headers = new Headers({
      'Content-Type' : 'aplication/json'
    });

    return this.http.post( this.FireBaseUrl, body, { headers:headers } )
      .map(
        res=>{
          console.log(res.json());
          return res.json();
        }
      )
  }

}
