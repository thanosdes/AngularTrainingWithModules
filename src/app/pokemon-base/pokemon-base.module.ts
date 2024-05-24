import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonDetailComponent, PokemonListComponent],
  imports: [BrowserModule],
  exports: [PokemonDetailComponent, PokemonListComponent],
})
export class PokemonBaseModule {}
