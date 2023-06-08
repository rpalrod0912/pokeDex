import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.scss'],
})
export class ListsPageComponent implements OnInit {
  public isLoaded: boolean = false;
  public pokemonArr: any = [];
  public rawData: any = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}
  async ngOnInit() {
    //
    /*this.pokemonService.getPokemons().subscribe((data: any) => {
      this.rawData = data.results;
      this.iterateRawArray();
    });*/
    await this.getPokemons();
  }

  async getPokemons() {
    await this.getPokemonsRaw();
    for (let i = 0; i < this.rawData.length; i++) {
      await axios
        .get(this.rawData[i])
        .then((res) => {
          this.pokemonArr.push(res.data);
        })
        .catch((error) => {
          console.log('El error es :' + error);
        });
    }
    this.isLoaded = true;
  }
  async getPokemonsRaw() {
    try {
      const response = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'
      );
      response.data.results.forEach((pokemon: any) => {
        debugger;
        this.rawData.push(pokemon.url);
      });
    } catch (error) {
      console.log('El error es: ' + error);
    }
  }
}
