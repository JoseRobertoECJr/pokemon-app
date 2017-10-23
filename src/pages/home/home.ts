import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokemonsProvider } from '../../providers/pokemons/pokemons';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	pokemonNumber: number;
	pokemons: any[];
	errorMessage: string;

  constructor(public navCtrl: NavController, public pokemonsProvider: PokemonsProvider) {
  	this.pokemonNumber = 1;
  	this.pokemons = [];
  }

  ionViewDidLoad(){
  	this.getPokemon();
  }

  printPokemons(){
  	console.log(this.pokemons);
  }

  getPokemon(){
  	this.pokemonsProvider.getPokemon(this.pokemonNumber)
  		.subscribe(
  				pokemon => this.pokemons.push(pokemon),
  				error => this.errorMessage = <any>error
  			);
  	this.pokemonNumber++;
  }

}
