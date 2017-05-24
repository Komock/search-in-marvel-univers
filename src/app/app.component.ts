import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public title: string = 'Find your Hero!';
	public searchInProgress: boolean = false;
	public noResults: boolean = false;
	public heroes: Hero[] = [];

	// Input Subject
	public inputSubject$$: Subject<string> = new Subject<string>();
	public inputStream(input: HTMLInputElement): void{
		this.searchInProgress = true;
		this.noResults = false;
		this.inputSubject$$.next(input.value);
	}

	public constructor(
		private _heroesService: HeroesService
	){}

	public ngOnInit(): void{
		this.inputSubject$$
			.debounceTime(700)
			.switchMap((searchQuery:string)=>{
				if (searchQuery === ''){
					return Observable.of({data:{
						results:[]
					}});
				}
				return this._heroesService.findHeroes(searchQuery);
			}).subscribe((data: HashMap)=> {
				let results = data.data.results;
				this.heroes = results;
				this.searchInProgress = false;
				if (results.length === 0) {
					this.noResults = true;
				}
			});
	}
}