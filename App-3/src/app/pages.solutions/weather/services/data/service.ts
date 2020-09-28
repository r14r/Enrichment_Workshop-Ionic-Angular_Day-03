import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export enum SearchType {
	all = '',
	movie = 'movie',
	series = 'series',
	episode = 'episode'
}

@Injectable({
	providedIn: 'root'
})
export class DataService {
	apiKey = 'd4f36eceaee04510d4e765a0e065924d';
	url = 'https://api.openweathermap.org/data/2.5/weather?q=';

	globalUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=';

	constructor(private http: HttpClient) { }

	getData(city, country) {
		return this.http
			.get(
				`${this.url}${city},${country}&units=imperial&APPID=${this.apiKey}`
			)
			.pipe(map(res => JSON.stringify(res)));
	}

	getGeo(lat, lon) {
		return this.http
			.get(
				`${this.globalUrl}${lat}&lon=${lon}&units=imperial&APPID=${this.apiKey}`
			)
			.pipe(map(res => JSON.stringify(res)));
	}
}
