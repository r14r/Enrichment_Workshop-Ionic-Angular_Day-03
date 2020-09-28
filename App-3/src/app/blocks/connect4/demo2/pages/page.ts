import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-connect4-demo2',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Connect4Demo2Page implements OnInit {
	private ID = 'Connect4Demo1Page';
	private helper = new HelperService(this.ID);

	board: any;

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');

		this.init();
	}

	cellClicked(col, row) {
		this.helper.log('cellClicked', 'clicked on cell' + row + '/' + col);
	}

	init() {
		this.helper.log('init');
	}
}
