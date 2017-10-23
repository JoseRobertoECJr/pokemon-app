import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the PokemonsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonsProvider {

	pokemonApiUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public http: Http) {
    console.log('Hello PokemonsProvider Provider');
  }

  getPokemon(id: number): Observable<any> {
  	return this.http.get(this.pokemonApiUrl + id)
            .map(res => res.json())
            .catch(this.handleError);
  }

  private handleError(error: any): Observable<any>{
        console.log('Ops. Ocorreu um erro!');
        return Observable.throw(error.message || error);
  }

}
