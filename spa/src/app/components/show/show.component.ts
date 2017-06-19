import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html'
})
export class ShowComponent implements OnInit {
  heroes:Heroe[] = [];
  text:string;
  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.heroes = this.heroesService.buscarHeroe( params['text'] );
      this.text = params['text'];
    });
  }

}
