import { Component, OnInit } from '@angular/core';
import { NgForm }  from "@angular/forms";
import { Heroe }  from "../../interface/heroe.interface";
import { HeroesService } from "../../services/heroes.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe : Heroe = {
    nombre:"",
    bio:"",
    casa:"Marvel"
  }

  id:string;

  constructor(private router:Router, private _heroesService: HeroesService, private aRoute:ActivatedRoute) {
    this.aRoute.params
      .subscribe(
        parametros=>{
          this.id = parametros['id'];
          if(this.id!=='new'){
            this._heroesService.getHeroe(this.id)
              .subscribe(data=>this.heroe=data);
          }
        }
      )
  }

  ngOnInit() {
  }

  guardar(){
    if(this.id=='new') {
      this._heroesService.nuevoHeroe(this.heroe)
      .subscribe(
        data=>{
          this.router.navigate(['/heroe',data.name]);
        },
        error=>{
          console.error(error);
        })
    }else{
      this._heroesService.actualizarHeroe(this.heroe, this.id)
            .subscribe(data=>{
              console.log(data);
            },error=>{
              console.error(error);
            })
    }
  }

  agregarNuevo( form : NgForm ) {
    this.router.navigate(['/heroe','new']);
    form.reset({casa:'Marvel'});
  }

}
