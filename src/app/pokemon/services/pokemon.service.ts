import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<[]> {
    return this.http.get<[]>(`${this.baseUrl}pokemon?limit=151&offset=0`);
  }
  getPokemonData(url: string): Observable<[]> {
    return this.http.get<[]>(`${url}`);
  }

  async getPokemonDataFetch(url: string) {
    let response;
    let data = await fetch(url).then((res) => {
      response = res.json();
    });
    console.log(response);
    return response;
  }
}
