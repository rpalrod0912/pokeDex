import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss'],
})
export class PokemonViewComponent implements OnInit {
  id: String = '';
  private routeParams: any;
  isLoaded: Boolean = false;
  pkmData: any;

  constructor(
    private pokemonService: PokemonService,
    private router: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.routeParams = this.router.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.pokemonService
      .getPokemonData(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
      .subscribe((data) => {
        console.log(data);
        this.pkmData = data;
        this.isLoaded = true;
      });
  }
}
