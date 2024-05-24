import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() detail!: Pokemon;
  @Output() remove: EventEmitter<Pokemon> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onRemove() {
    console.log('Removing Pokemon:', this.detail.name);
    this.remove.emit(this.detail);
  }
}
