import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component'
import { GeneralInfoComponent } from './general-info/general-info.component'
import { EvolutionInfoComponent } from './evolution-info/evolution-info.component'
import { MovesetInfoComponent } from './moveset-info/moveset-info.component'
import { PokemonListComponent } from './pokemon-list/pokemon-list.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    PokemonPageComponent,
    GeneralInfoComponent,
    EvolutionInfoComponent,
    MovesetInfoComponent,
    PokemonListComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }