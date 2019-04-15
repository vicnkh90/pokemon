import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

const pokemonsUrl = 'https://pokeapi.co/api/v2/pokemon'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons = ['charmander', 'squirtle', 'dratini']
  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(pokemonsUrl)
  }

  getSpecificPokemon(pokemonName) {
    return this.http.get(pokemonsUrl + `/${pokemonName}`)
  }
}
