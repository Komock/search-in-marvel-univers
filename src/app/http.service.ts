import { Injectable } from '@angular/core';
import {
	BaseRequestOptions, Headers,
	Http, Request, Response, XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpService extends Http {

	public constructor(
		_backend: XHRBackend,
		_defaultOptions: BaseRequestOptions
	) {
		super(_backend, _defaultOptions);
	}

	public prepareHeaders(headersObj: HashMap): Headers{
		const headers: Headers = new Headers();
		Object.keys(headersObj)
			.forEach((key: string) => headers.append(key, headersObj[key]));
		return headers;
	}

	// GET
	public get<T>(
		url: string,
		headersObj: HashMap = { 'Content-Type': 'text/html' }
	): Observable<T> {
		let preparedHeaders = this.prepareHeaders(headersObj);
		return this.request(new Request(this._defaultOptions.merge({ 
			url, 
			headers: preparedHeaders, 
			method: 'GET'
		})))
		.map((res: Response) => res.json())
		.catch((err: Error) => Observable.of([]));
	}

	// POST
	public post<T>(
		url: string, 
		body: HashMap,
		headersObj: HashMap = { 'Content-Type': 'application/json' }, 
	): Observable<T>{
		let preparedHeaders = this.prepareHeaders(headersObj);
		return this.request(new Request(this._defaultOptions.merge({ 
			url, 
			headers: preparedHeaders, 
			method: 'POST',
			body: body
		})))
		.map((res: Response) => res.json())
		.catch((err: Error) => Observable.of([]));
	}

}