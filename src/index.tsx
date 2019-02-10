import './index.css';

import * as d3 from 'd3';

// here's the initial code:
// https://bl.ocks.org/curran/e30339061fb0dac8dfcfbb57d06715b8

const svg = d3.select('svg').style('background-color', 'black');
const width = parseInt(svg.attr('width'));
const height = parseInt(svg.attr('height'));
const n = 200;
const circles = svg
	.selectAll('circle')
	.data(d3.range(n))
	.enter()
	.append('circle')
	.attr('r', 10)
	.attr('fill', d => `rgba(100,${d},200,${d / n})`);

const xPeriod: number = 11;
const yPeriod: number = 10;

// let timerOn = true;

// let currentTime: number;

const timerFunction = (time: number) => {
	// currentTime = time;

	circles
		.attr(
			'cy',
			d =>
				(Math.sin((d / 200 + time / 1000) * yPeriod) * height) / 4 +
				height / 2
		)
		.attr(
			'cx',
			d =>
				(Math.cos((d / 200 + time / 1000) * xPeriod) * width) / 4 +
				width / 2
		);
};

d3.timer(timerFunction);

// document.addEventListener('click', () => {
// 	timerOn
// 		? timer.stop()
// 		: timer.restart(timerFunction, currentTime, currentTime);
// 	timerOn = !timerOn;
// });
