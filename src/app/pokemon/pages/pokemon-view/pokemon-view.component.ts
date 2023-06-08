import { Component, OnInit, OnChanges, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokemonViewComponent implements OnInit {
  id: String = '';
  private routeParams: any;
  //Loading Data Booleans
  isLoaded: Boolean = false;
  pkmDataIsLoaded: Boolean = false;
  speciesDataIsLoaded: Boolean = false;

  //Pokemon JSON Data From PokeApi
  pkmData: any;
  speciesData: any;

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
        debugger;
        console.log(data);
        this.pkmData = data;
        this.pkmDataIsLoaded = true;
        this.isDataLoaded();
      });
    this.pokemonService
      .getPokemonData(`https://pokeapi.co/api/v2/pokemon-species/${this.id}`)
      .subscribe((data) => {
        console.log(data);
        this.speciesData = data;
        this.speciesDataIsLoaded = true;
        this.isDataLoaded();
      });
  }

  public isDataLoaded(): void {
    if (this.speciesDataIsLoaded && this.pkmDataIsLoaded) {
      this.isLoaded = true;
    }
  }
}
