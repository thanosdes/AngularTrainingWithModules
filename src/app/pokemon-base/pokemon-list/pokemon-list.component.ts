import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pickachu',
      type: 'electric',
      isCool: false,
      isStylish: true,
    },
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: true,
      isStylish: true,
    },
    {
      id: 3,
      name: 'charmander',
      type: 'fire',
      isCool: true,
      isStylish: false,
    },
  ];

  title: string = '';

  constructor() {}

  handleRemove(event: Pokemon) {
    console.log('Removing Pokemon with ID:', event.id);
    this.pokemons = this.pokemons.filter(
      (pokemon: Pokemon) => pokemon.id !== event.id
    );
  }

  ngOnInit(): void {}
  track(id: number, item: Pokemon) {
    return item.id;
  }
}
