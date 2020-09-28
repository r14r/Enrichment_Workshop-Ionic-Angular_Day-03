import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-conect4-Step2',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class Connect4Step2Page implements OnInit {
	board: any;

	boardState = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0]
	];

	active = 'r';
	dropAllowed = true;
	winner = false;
	aiComments = ['Once you start playing, the AI will tell you why it\'s using specific moves here.'];
	playType = 1;
	modal = false;

	constructor() {
	}

	ngOnInit() {
		this.init();
	}

	cellClicked(col, row) {
		console.log('cellClicked', 'clicked on cell' + row + '/' + col);
		this.board[col][row] = this.board[col][row] === 'red' ? 'blue' : 'red';

		const fillrow = this.board[col].filter((cell, index) => (cell === 'empty') ? index : 0);
		console.log(fillrow);
	}

	init() {
		this.boardState = [
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0]
		];

		this.active = 'r';

		this.dropAllowed = true;

		this.winner = false;

		this.aiComments = ['Once you start playing, the AI will tell you why it\'s using specific moves here.'];
	}

	winDetect() {
		/* @TOFIX:
		let tempWinner = false;

		for (let i = 0; i < this.boardState.length; i++) {
			const rowMatch = this.boardState[i].join('').match(/r{4}|y{4}/);
			if (rowMatch) {
				rowMatch[0].indexOf('r') > -1 ? tempWinner = 'red' : tempWinner = 'yellow';
			}
		}
		// vertical
		const columns = this.getColumns();
		for (let j = 0; j < columns.length; j++) {
			const colMatch = columns[j].join('').match(/r{4}|y{4}/);
			if (colMatch) {
				colMatch[0].indexOf('r') > -1 ? tempWinner = 'red' : tempWinner = 'yellow';
			}
		}
		// diag
		const diags = this.getDiags();
		for (let l = 0; l < diags.length; l++) {
			const diagMatch = diags[l].join('').match(/r{4}|y{4}/);
			if (diagMatch) {
				diagMatch[0].indexOf('r') > -1 ? tempWinner = 'red' : tempWinner = 'yellow';
			}
		}
		return tempWinner;
		*/
	}

	getColumns() {
		/* @TOFIX:
const columns = [];

for (const col of this.boardState) {
const column = [];

for (const row of col) {
	column.push(row);
}
columns.push(column);
}
return columns;
*/
	}
	getDiags(arr) {
		/* @TOFIX:
if (typeof arr === 'undefined') { arr = this.boardState; }
const diags = [];
for (let i = -5; i < 7; i++) {
	const group = [];
	for (let j = 0; j < 6; j++) {
		if ((i + j) >= 0 && (i + j) < 7) {
			group.push(arr[j][i + j]);
		}
	}
	diags.push(group);
}
for (i = 0; i < 12; i++) {
	const group = [];
	for (let j = 5; j >= 0; j--) {
		if ((i - j) >= 0 && (i - j) < 7) {
			group.push(arr[j][i - j]);
		}
	}
	diags.push(group);
}
return diags.filter(function (a) {
	return a.length > 3;
});
*/
	}

	ai() {
		/* @TOFIX:
let decision = null;
function threatDetect(lt, type) {
	// vertical threat assessment & response
	const columns = getColumns();
	for (let i = 0; i < columns.length; i++) {
		let vertMatch;
		type === 'major' ? vertMatch = '0' + lt + lt + lt : vertMatch = '00' + lt + lt;
		const colMatch = columns[i].join('').match(vertMatch);
		if (colMatch) {
			decision = i;
			console.log('ai: responding to a ' + type + ' vertical ' + responseType);
			aiComments.push('ai: responding to a ' + type + ' vertical ' + responseType);
		}
	}

	if (!decision) {
		// horiz threat assessment & response
		let horizThreatPatterns;
		if (type === 'major') {
			horizThreatPatterns = ['0' + lt + lt + lt, lt + '0' + lt + lt, lt + lt + '0' + lt, lt + lt + lt + '0'];
		} else {
			horizThreatPatterns = ['00' + lt + lt, '0' + lt + lt + '0', '0' + lt + '0' + lt, lt + '0' + lt + '0', '0' + lt + lt + '0', lt + lt + '00'];
		}

		for (i = 0; i < boardState.length; i++) {
			const found = [];
			const joined = boardState[i].join('');
			for (let j = 0; j < horizThreatPatterns.length; j++) {
				const match = joined.match(horizThreatPatterns[j]);
				if (match) { found.push(match[0]); }
			}
			if (found.length) {
				let testCase = 0;
				if (i === boardState.length - 1) {
					if (found[0] === '00yy' || found[0] === '00rr') { testCase = 1; }
					decision = joined.indexOf(found[0]) + found[0].indexOf('0') + testCase;
					console.log('ai: responding to a ' + type + ' horizontal ' + responseType);
					aiComments.push('ai: responding to a ' + type + ' horizontal ' + responseType);
				} else {
					matchPosition = joined.indexOf(found[0]) + found[0].indexOf('0');
					if (found[0] === '00yy' || found[0] === '00rr') { matchPosition++; }
					if (boardState[i + 1][matchPosition] !== 0) {
						decision = matchPosition;
						console.log('ai: responding to a ' + type + ' horizontal ' + responseType);
						aiComments.push('ai: responding to a ' + type + ' horizontal ' + responseType);
					}
				}
			}
		}
	}

	if (!decision) {
		// diag threat assessment & response
		const diags = getDiags();
		const diagThreatPatterns = ['0' + lt + lt + lt, lt + '0' + lt + lt, lt + lt + '0' + lt, lt + lt + lt + '0'];
		for (i = 0; i < diags.length; i++) {
			const found = [];
			const joined = diags[i].join('');
			for (let j = 0; j < diagThreatPatterns.length; j++) {
				const match = joined.match(diagThreatPatterns[j]);
				if (match) { found.push(match[0]); }
			}
			if (found.length) {
				for (let l = 0; l < found.length; l++) {
					diagMap = getDiags([[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12, 13], [14, 15, 16, 17, 18, 19, 20], [21, 22, 23, 24, 25, 26, 27], [28, 29, 30, 31, 32, 33, 34], [35, 36, 37, 38, 39, 40, 41]]);
					const vulnSlot = diagMap[i][found[l].indexOf('0')];
					if (typeof boardState[Math.floor(vulnSlot / 7) + 1] === 'undefined' || boardState[Math.floor(vulnSlot / 7) + 1][(vulnSlot % 7)] !== 0) {
						decision = vulnSlot % 7;
						console.log('ai: responding to a ' + type + ' diagonal ' + responseType);
						aiComments.push('ai: responding to a ' + type + ' diagonal ' + responseType);
					}
				}
			}
		}
	}
}

function opportunityDetect(type) {
	// detecting our opportunities is just like detecting threats (mostly, 3 extra patterns)
	// we want to be defensive over offensive, so we only look for opportunities
	// if there are no immediate threats
	responseType = 'opportunity';
	threatDetect(active, type);
}

// look for winning opportunities
opportunityDetect('major');

// if none, look for major threats
if (decision === null) {
	const responseType = 'threat';
	threatDetect((this.active === 'r' ? 'y' : 'r'), 'major');
}

// if none look for minor opportunities
if (decision === null) {
	opportunityDetect('minor');
}

// if none look for minor threats
if (decision === null) {
	const responseType = 'threat';
	threatDetect((this.active === 'r' ? 'y' : 'r'), 'minor');
}

if (decision !== null && this.boardState[0][decision] === 0) {
	this.drop(0, decision);
} else {
	console.log('ai: no threats or opportunities found, goin random');
	let random = Math.floor(Math.random() * 7);
	let failSafe = 0;
	let boardValue = this.boardState[0][random];
	while (boardValue !== 0 && failSafe < 100) {
		random = Math.floor(Math.random() * 7);
		boardValue = this.boardState[0][random];
		failSafe++;
	}
	this.drop(0, random);
}
}
*/
	}

	drop(index, index2) {
		/* @TOFIX:
if (this.dropAllowed && this.boardState[index][index2] === 0) {
	this.dropAllowed = false;
	this.boardState[0][index2] = this.active;
	// recursive timeout loop
	(function dropLoop(i) {
		$timeout(function () {
			if (typeof boardState[i] !== 'undefined' && boardState[i][index2] === 0 && i <= 5) {
				boardState[i - 1][index2] = 0;
				boardState[i][index2] = active;
				dropLoop(i + 1);
			} else {
				active = (active === 'r' ? 'y' : 'r');
				dropAllowed = true;
				winner = winDetect();
				if (winner) {
					dropAllowed = false;
				}
				if (playType === 1 && active === 'y') {
					// ai
					ai();
				}
			}
		}, 50);
	})(1);
}
*/
	}
}
