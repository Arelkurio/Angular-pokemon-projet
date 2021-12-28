import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Results } from '../../interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class ContenuComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  @Output() abilitiesSelected = new EventEmitter();

  abilities!: Array<string>;
  types!: Array<string>;
  pokemonList!: Array<Results>;
  search!: string;
  currentType!: string;
  currentAbilities!: Array<string>;

  onTypeSelected(): void {
    if (this.currentType) {
      this.typeSelected.emit(this.currentType);
    } else {
      this.typeSelected.emit('');
    }
  }

  onAbilitySelected(): void {
    if (this.currentAbilities && this.currentAbilities.length) {
      this.abilitiesSelected.emit(this.currentAbilities);
    } else {
      this.abilitiesSelected.emit('');
    }
  }

  setPokemonAbilities(pokemon: Results): void {
    if (pokemon) {
      pokemon.details!.abilities!.forEach(ability => {
        const abilityName = ability.ability.name;
        if (!this.abilities.includes(abilityName)) {
          this.abilities.push(abilityName);
          this.abilities.sort();
        }
      });
    }
  }

  setPokemonTypes(pokemon: Results): void {
    if (pokemon) {
      pokemon.details!.types!.forEach(type => {
        const typeName = type.type.name;
        if (!this.types.includes(typeName)) {
          this.types.push(typeName);
          this.types.sort();
        }
      });
    }
  }

  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;
      this.pokemonList.forEach(pokemon => {
        this.setPokemonAbilities(pokemon);
        this.setPokemonTypes(pokemon);
      });
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.abilities = [];
    this.types = [];
  }

  searchEvent(search: any): void {
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }



}
