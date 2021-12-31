import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokeAPI, PokemonDetails, Results, TYPE_COLOURS } from '../../interface';
import { PokemonService } from '../../services/generation1.service';

@Component({
  selector: 'app-generation1',
  templateUrl: './generation1.component.html',
  styleUrls: ['./generation1.component.css']
})
export class Generation1Component implements OnInit {
  @Output() exportPokemons = new EventEmitter();
  pokemonsLoaded!: boolean;
  pokemons!: PokeAPI;
  query!: string;
  abilityFilters!: Array<string>;
  typeFilters!: string;

  constructor(private pokemonService: PokemonService) { }

  @Input() set search(newSearch: string) {
    if (newSearch !== this.query) {
      this.query = newSearch;
    }
  }

  @Input() set typeFilter(type: string) {
    if (type !== this.typeFilter) {
      this.typeFilters = type;
    }
  }

  @Input() set abilityFilter(abilities: Array<string>) {
    if (abilities !== this.abilityFilters) {
      this.abilityFilters = abilities;
    }
  }

  getPokemonDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonDetails(pokemon.name)
      .subscribe((details: PokemonDetails) => {
        pokemon.details = details;
        if (pokemon.id === '151') {
          this.pokemonsLoaded = true;
          this.exportPokemons.emit(this.pokemons.results);
        }
      });
  }

  getPokemonSpeciesDetails(pokemon: Results): void {
    this.pokemonService
      .getPokemonSpecies(pokemon.name)
      .subscribe((species: any) => {
        const entries = species.flavor_text_entries;
        if (entries) {
          entries.some((flavor: any) => {
            if (flavor.language.name === 'en') {
              pokemon.description = flavor.flavor_text;
            }
          });
        }
      });
  }

  _getTypeColour(type: string): string {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
    else {
      return '';
    }
  }

  getPokemons(): void {
    this.pokemonService.getPokemon().subscribe((data: PokeAPI) => {
      this.pokemons = data;

      if (this.pokemons.results && this.pokemons.results.length) {
        this.pokemons.results.forEach(pokemon => {
          pokemon.id = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];

          this.getPokemonDetails(pokemon);
          this.getPokemonSpeciesDetails(pokemon);
        });
      }
    });
  }

  ngOnInit(): void {
    this.pokemonsLoaded = false;
    this.getPokemons();
  }

}
