import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-connect4-demo1',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Connect4Demo1Page implements OnInit {
	private ID = 'Connect4Demo1Page';
	private helper = new HelperService(this.ID);

	board: any;

	oneClick = 0;
	tally;

	constructor() {
		this.helper.log('constructor');
	}

	ngOnInit() {
		this.helper.log('ngOnInit');

		this.init();
	}

	cellClicked(col, row) {
		this.helper.log('cellClicked', 'clicked on cell' + row + '/' + col);

		this.tally = this.oneClick++;

		if (this.tally % 2 === 0) {
			$(this).append('<div class="disc yellow"></div>');
		} else {
			$(this).append('<div class="disc red"></div>');
		}
	};

	init() { }
}



init() {
	this.helper.log('init');
}
}
