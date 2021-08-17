import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {HeroesService} from '../../services/heroes.service'
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  heroes : any [] = [];
  texto :string;

  @Input() heroe : any = {};
  @Input() index : number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private _heroesService:HeroesService,
    private activeRoute:ActivatedRoute, private router:Router,
    ) { 
      this.heroeSeleccionado = new EventEmitter();
    }

  ngOnInit() {

    this.activeRoute.params.subscribe( params =>{
      this.texto = params['texto'];
      this.heroes = this._heroesService.buscarHeroes(params ['texto']);
      console.log(this.heroes,"TEXTO")
    })
  }

  verHeroe(){
    //console.log(this.index);
    this.router.navigate(['/heroe',this.index])
    //this.heroeSeleccionado.emit(this.index)
  }
}
