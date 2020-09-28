import { Component, OnInit } from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
	selector: 'app-list',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class DemoPage implements OnInit {
	private selectedItem: any;
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

	title: string;
	note: string;
	icon = 'wifi';

	dataService: DataService;

	items: any;

	constructor(public service: DataService) {
		console.log('constructor');
		this.dataService = service;

		this.items = this.dataService.getData();
		console.log('constructor::items=' + JSON.stringify(this.items));
	}

	addItem() {
		console.log('DemoPage::addItem|' + this.title);

		this.dataService.addItem(this.title, this.note, this.icon);
		this.items = this.dataService.getData();

		console.table(this.items);
	}

	ngOnInit() {
	}
}
