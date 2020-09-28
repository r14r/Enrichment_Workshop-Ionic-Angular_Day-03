import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-connect4',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Connect4Step1Page implements OnInit {

	boardsize = 5;

	rows = [0, 1, 2, 3, 4];
	cols = [0, 1, 2, 3, 4];

	board: any[][];

	boardSizeRange(): any[] {
		return Array(this.boardsize);
	}

	boardCellsRange(): any {
		return Array(this.boardsize * this.boardsize);
	}

	boardInitialize() {
		this.board = new Array(this.boardsize).fill('red').map(() => new Array(this.boardsize).fill('empty'));

		console.table(this.board);

	}
	constructor() {

	}

	ngOnInit() {
		this.boardInitialize();
	}

	cellClicked(col, row) {
		console.log('cellClicked', 'clicked on cell' + row + '/' + col);
		this.board[col][row] = this.board[col][row] === 'red' ? 'blue' : 'red';

		const fillrow = this.board[col].filter((cell, index) => (cell === 'empty') ? index : 0);
		console.log(fillrow);
	}
}
