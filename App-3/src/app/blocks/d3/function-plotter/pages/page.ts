import {
	Component,
	OnInit,
	ViewEncapsulation
} from '@angular/core';

import * as d3 from 'd3';

import { HelperService } from 'src/app/helpers/helper.service';

@Component({
	selector: 'app-function-plotter',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
	encapsulation: ViewEncapsulation.None
})
export class FunctionPlotterPage implements OnInit {
	public ID = 'BasicShapesPage';
	private toolbox = new HelperService(this.ID);

	container: any;
	svg: any;
	tooltip: any;

	dataset: any;

	margin = { top: 50, right: 50, bottom: 50, left: 50 };

	width: number;
	height: number;

	widthWithBorder: number;
	heightWithBorder: number;

	radius = 6;
	n = 360;

	xScale: any;
	yScale: any;

	constructor() {
		this.toolbox.log('constructor', 'd3: ' + d3.version);
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');
	}

	ionViewDidEnter() {
		this.toolbox.log('ionViewDidEnter');

		this.setupAndDrawGraph();
	}
	defineScaleX(domainMin, domainMax, rangeMin, rangeMax) {
		return d3
			.scaleLinear()
			.domain([domainMin, domainMax])
			.range([rangeMin, rangeMax]);
	}

	defineScaleY(domainMin, domainMax, rangeMin, rangeMax) {
		return d3
			.scaleLinear()
			.domain([domainMin, domainMax])
			.range([rangeMin, rangeMax]);
	}

	setScaleX(svg) {
		svg.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + this.height + ')')
			.call(d3.axisBottom(this.xScale));
	}

	setScaleY(svg) {
		svg.append('g')
			.attr('class', 'y axis')
			.call(d3.axisLeft(this.yScale));
	}

	f(func, x) {
		switch (func) {
			case 'sin':
				return { y: Math.sin((x * Math.PI) / 90) / 2 + 0.5 };
				break;
			case 'sqr':
				const maxX = (360 * 360) / 4;

				return { y: ((x - this.n / 2) * (x - this.n / 2)) / maxX };
				break;

			default:
				return { y: x };
				break;
		}
	}
	setupAndDrawGraph() {
		const box = document.querySelector('#container');

		this.widthWithBorder = box.clientWidth;
		this.heightWithBorder = box.clientHeight;

		this.width = box.clientWidth - this.margin.left - this.margin.right;
		this.height = box.clientHeight - this.margin.top - this.margin.bottom;

		this.toolbox.log('setupAndDrawGraph', this.width + ' x ' + this.height);

		// Get container
		this.container = d3.select('#container');

		// Define the div for the tooltip
		this.toolbox.log('setupAndDrawGraph', 'remove childs in container');
		this.container.select('svg').remove();

		this.toolbox.log('setupAndDrawGraph', 'append tooltip');
		this.tooltip = this.container
			.append('div')
			.attr('class', 'tooltip')
			.style('position', 'absolute')
			.style('visibility', 'hidden');

		// Prepare SVG
		this.toolbox.log('setupAndDrawGraph', 'append svg');
		this.svg = d3
			.select('#container')
			.append('svg')
			.attr('width', this.widthWithBorder)
			.attr('height', this.heightWithBorder)
			.append('g')
			.attr(
				'transform',
				'translate(' + this.margin.left + ',' + this.margin.top + ')'
			);

		// Get the data
		if (false) {
			d3.csv('/assets/data/graph.csv')
				.then(data => {
					const slices = data.columns.slice(1).map(id => {
						return {
							id,
							values: data.map(d => {
								return {
									date: (d.date),
									measurement: +d[id]
								};
							})
						};
					});
				})
				.catch(error => {
					// handle error
				});
		}

		this.toolbox.log('createGraph', 'setup gdata');
		this.dataset = d3.range(this.n).map(x => {
			return this.f('sqr', x);

			return { y: (x - this.n / 2) * (x - this.n / 2) };
			return { y: Math.sin((x * Math.PI) / 90) / 2 + 0.5 };
			return { y: d3.randomUniform(1)() };
		});

		this.toolbox.log('createGraph', 'define scale');
		this.xScale = this.defineScaleX(0, this.n - 1, 0, this.width);
		this.yScale = this.defineScaleY(0, 1, this.height, 0);

		this.toolbox.log('createGraph', 'add axis');
		this.svg
			.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + this.height + ')')
			.call(d3.axisBottom(this.xScale));

		this.svg
			.append('g')
			.attr('class', 'y axis')
			.call(d3.axisLeft(this.yScale));

		const line = d3
			.line()
			.x((d, i) => this.xScale(i))
			.y(d => this.yScale(d.y))
			.curve(d3.curveMonotoneX);

		const timeConv = d3.timeParse('%d-%b-%Y');

		this.toolbox.log('createGraph', 'add function');
		this.svg
			.append('path')
			.datum(this.dataset)
			.attr('class', 'line')
			.attr('d', line);

		this.toolbox.log('createGraph', 'add dots');
		this.svg
			.selectAll('.dot')
			.data(this.dataset)
			.enter()
			.append('circle')
			.attr('class', 'dot')
			.attr('cx', (d, i) => this.xScale(i))
			.attr('cy', d => this.yScale(d.y))
			.attr('r', 5)
			.on('mouseover', (d, i) => {
				this.toolbox.log(
					'createGraph',
					'mouseover: d=' + JSON.stringify(d) + ', i=' + i
				);

				const text = 'X: ' + i + '<br>' + 'Y: ' + d.y;
				this.tooltip.html(text);
				this.tooltip.style('visibility', 'visible');
			})
			.on('mousemove', () => {
				this.tooltip
					.transition()
					.duration(200)
					.style('opacity', 0.9);

				this.tooltip
					.style('top', d3.event.pageY - 10 + 'px')
					.style('left', d3.event.pageX + 10 + 'px');
			})
			.on('mouseout', () => {
				this.toolbox.log('createGraph', 'mouseout');

				this.tooltip.style('visibility', 'hidden');
			});
	}
}
