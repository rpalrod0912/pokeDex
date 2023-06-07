import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lists-page',
  templateUrl: './lists-page.component.html',
  styleUrls: ['./lists-page.component.css'],
})
export class ListsPageComponent implements OnInit {
  public isLoaded: boolean = false;
  public pokemonArr: any = [];

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    console.log(
      this.pokemonService.getPokemons().subscribe((data: any) => {
        console.log(data);
        data.results.forEach((pokemonData: any) => {
          this.pokemonService
            .getPokemonData(pokemonData.url)
            .subscribe((data: any) => {
              this.pokemonArr.push(data);
            });
        });
        console.log(this.pokemonArr);
        this.isLoaded = true;
      })
    );
  }
}
