import { Component, OnInit } from '@angular/core'
import { PokemonService } from '../pokemon.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css'],
})
export class PokemonPageComponent implements OnInit {
  hideGeneral = false
  hideMoveset = false
  hideEvolution = false
  specificPokemon = null

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.pokemonService
        .getSpecificPokemon(this.route.snapshot.params.pokemonName)
        .subscribe(response => {
          this.specificPokemon = response
        })
    }, 3000)
  }

  toggleGeneralInfo() {
    this.hideGeneral = !this.hideGeneral
  }

  toggleMovesetInfo() {
    this.hideMoveset = !this.hideMoveset
  }

  toggleEvolutionInfo() {
    this.hideEvolution = !this.hideEvolution
  }
}
