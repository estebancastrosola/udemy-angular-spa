import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-busquedaheroe',
  templateUrl: './busquedaheroe.component.html'
})
export class BusquedaheroeComponent implements OnInit {

  termino:string;
  heroes: Heroe[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private heroesService:HeroesService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.findHeroes(params['termino']);
    })
  }

  verHeroe(index:number)
  {
    console.log(index);
    this.router.navigate(['/heroe',index]);
  }

}
