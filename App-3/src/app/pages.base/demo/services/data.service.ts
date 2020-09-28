import { Injectable } from '@angular/core';
import { single } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private icons = [
		'flask',
		'wifi',
		'beer',
		'football',
		'basketball',
		'paper-plane',
		'american-football',
		'boat',
		'bluetooth',
		'build'
	];

	/*
	items = [
		{ title: '1', note: 'n', icon: 'wifi' }
	]
	*/

	public items: Array<{ title: string; note: string; icon: string }> = [];

	constructor() {
		console.log('constructor');

		for (let i = 1; i < 11; i++) {
			this.items.push({
				title: 'Item ' + i,
				note: 'Hier steht Eintragn Nr. ' + i,
				icon: this.icons[Math.floor(Math.random() * this.icons.length)]
			});
		}
	}

	getData() {
		console.log('getData');

		return this.items;
	}

	addItem(title, note, icon = 'wifi') {
		console.log('DataService::addItem|' + title);
		this.items.push({
			title,
			note,
			icon
		});

		console.table(this.items);
	}
}
