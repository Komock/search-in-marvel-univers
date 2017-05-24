import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroesService {
	
	public findHeroes(searchQuery: string):Observable<HashMap> {
		const PUBLIC_KEY: string = 'd68edd92cd8e6fb61e9a691abd3e00ed';
		let url: string = `//gateway.marvel.com/v1/public/characters?nameStartsWith=${searchQuery}&apikey=${PUBLIC_KEY}`;
		// console.log('url: ', url);
		return this._http.get(url, { 'Content-Type': 'application/json' });
	}

	constructor(
		private _http: HttpService
	) { }

}
