import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<[]> {
    debugger;
    return this.http.get<[]>(`${this.baseUrl}pokemon?limit=151&offset=0`);
  }
  getPokemonData(url: string): Observable<[]> {
    debugger;
    return this.http.get<[]>(`${url}`);
  }
}
